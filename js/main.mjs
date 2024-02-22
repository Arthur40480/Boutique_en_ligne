import { categories, articles } from "./data.mjs";

const categoriesContainerElt = document.getElementsByClassName("categories-container")[0];
const articlesContainerElt = document.getElementsByClassName("articles-container")[0];
const cartContainerElt = document.getElementsByClassName("cart-container")[0];
const cartArticleListElt = document.getElementsByClassName("cart-article-container")[0];
const buttonOpenCartElt = document.getElementsByClassName("open-cart")[0];
const buttonCloseCartElt = document.getElementsByClassName("close-cart")[0];
const cartPriceElt = document.getElementsByClassName("total-price-container")[0];
const cartArticles = [];

/**
 * Affiche les catégories
 * @param {Array} categories - Tableau des catégories
 */
function displayCategories(categories) {
    categories.forEach(category => {
        const categoryElt = document.createElement("div");
        categoryElt.classList.add("category");
        categoryElt.classList.add("hover:bg-blue-500");
        categoryElt.classList.add("cursor-pointer");
        categoryElt.textContent = category.name;
        categoriesContainerElt.appendChild(categoryElt);
        categoryElt.addEventListener("click", () => {
            articlesContainerElt.innerHTML = '';
            const filteredArticles = articles.filter(article => article.category.name === category.name);
            displayArticles(filteredArticles);
        } )
    });
};

displayCategories(categories);

/**
 * Crée un élément image avec les attributs spécifiés
 * @param {String} src - Attribut source de l'image
 * @param {String} alt - Attribut alt de l'image
 * @returns {HTMLImageElement} L'élément image créé
 */
function createImageArticleElt(src, alt) {
    const imgElt = document.createElement("img");
    imgElt.classList.add("h-full", "w-full", "object-cover", "object-center", "xl:aspect-h-8", "xl:aspect-w-7");
    imgElt.setAttribute("src", src);
    imgElt.setAttribute("alt", alt);
    return imgElt;
};

/**
 * Crée un élément p avec le texte spécifié
 * @param {String} text - le texte du paragraphe
 * @returns {HTMLParagraphElement} - L'élément p créé
 */
function createParagraphArticleElt(text) {
    const idElt = document.createElement("p");
    idElt.textContent = text;
    idElt.classList.add("mt-1", "font-bold");
    return idElt;
};

/**
 * Crée un élément de titre avec le nom de l'article
 * @param {String} name - Le nom de l'article
 * @returns {HTMLHeadingElement} - L'élément de titre créé
 */
function createNameArticleElt(name) {
    const nameElt = document.createElement("h3");
    nameElt.textContent = name;
    nameElt.classList.add("mt-1");
    return nameElt;
};

/**
 * Crée un bouton pour l'ajout d'un article au panier
 * @returns {HTMLButtonElement} - L'élément du bouton créé
 */
function createButtonAddToCartElt(article) {
    const buttonElt = document.createElement("button");
    buttonElt.classList.add("h-10", "w-12", "mt-1", "bg-blue-500", "rounded-md", "px-3", "py-1", "text-white", "font-bold", "hover:bg-indigo-700");
    const imgButtonElt = document.createElement("img");
    imgButtonElt.classList.add("filter", "invert");
    imgButtonElt.setAttribute("src", "/assets/addCart.png");
    imgButtonElt.setAttribute("alt", "Incon de panier");
    buttonElt.appendChild(imgButtonElt);
    buttonElt.addEventListener("click", () => addToCart(article));
    return buttonElt;
};

/**
 * Affiche les articles
 * @param {Array} articles - Tableau des articles
 */
function displayArticles(articles) {
    articles.forEach(article => {
        const containerImgElt = document.createElement("div");
        containerImgElt.classList.add("aspect-h-1", "aspect-w-1", "w-full", "overflow-hidden", "border", "rounded-lg", "bg-gray-200", "xl:aspect-h-8", "xl:aspect-w-7");

        const imgArticleElt = createImageArticleElt("./assets/jacket1.jpg", `Illustration de l'article ${article.name}`);
        const idArticleElt = createParagraphArticleElt("ID: " + article.id);
        const nameArticleElt = createNameArticleElt(article.name);
        const priceArticleElt = createParagraphArticleElt(article.price + "€");
        const buttonAddToCartElt = createButtonAddToCartElt(article);
    
        const cardArticleElt = document.createElement("div");
        cardArticleElt.classList.add("group");

        containerImgElt.appendChild(imgArticleElt);
        cardArticleElt.appendChild(containerImgElt);
        cardArticleElt.appendChild(idArticleElt);
        cardArticleElt.appendChild(nameArticleElt);
        cardArticleElt.appendChild(priceArticleElt);
        cardArticleElt.appendChild(buttonAddToCartElt);
        articlesContainerElt.appendChild(cardArticleElt);
    });
};

displayArticles(articles);

buttonOpenCartElt.addEventListener("click", displayCart);
buttonCloseCartElt.addEventListener("click", closeCart);

/**
 * Affiche le panier
 */
function displayCart() {
    cartContainerElt.classList.remove("translate-x-0");
};

/**
 * Ferme le panier
 */
function closeCart() {
    cartContainerElt.classList.add("translate-x-0");
};

/**
 * Ajoute un article dans le panier
 * @param {Object} article - Article à ajouter
 */
function addToCart(article) {
    const existingArticleInCart = cartArticles.find(articles => articles.id == article.id);
    if(existingArticleInCart) {
        existingArticleInCart.quantity += 1;
        console.log("Quantité de l'article mise à jour dans le panier :", existingArticleInCart.quantity);
        updateCart(cartArticles);
        displayCart();
    }else {
        cartArticles.push(article);
        console.log("Article ajouté au panier :", article);
        updateCart(cartArticles);
        displayCart();
    }
};

/**
 * Supprime un article du panier
 * @param {Object} article - Article à supprimer
 */
function removeToCart(article) {
    const index = cartArticles.indexOf(article);
    if (index !== -1) {
        cartArticles.splice(index, 1);
        console.log("Article retiré du panier :", article);
        updateCart(cartArticles);
    }
};

/**
 * Met à jour le panier
 * @param {Array} articles - Tableau des articles dans le panier
 */
function updateCart(articles) {
    cartArticleListElt.innerHTML = ``;
    calculateTotalCost(articles);
    displayArticleInCart(articles);
};

/**
 * Calcule le coût total du panier
 * @param {Array} articles - Tableau des articles dans le panier
 */
function calculateTotalCost(articles) {
    let total = 0;
    articles.forEach(article => {
        console.log("prix:" + article.price + " Quantity:" + article.quantity);
        total = total + (article.price * article.quantity);
    });
    cartPriceElt.innerHTML = total + "€";
};

/**
 * Crée un bouton pour la suppression d'un article au panier
 * @param {Object} article - Article à supprimer
 * @returns {HTMLButtonElement} - L'élément du bouton créé
 */
function createButtonRemoveToCartElt(article) {
    const buttonElt = document.createElement("button");
    buttonElt.classList.add("font-medium", "text-indigo-600", "hover:text-indigo-500");
    buttonElt.innerHTML = "Supprimer";
    buttonElt.addEventListener("click", () => removeToCart(article));
    return buttonElt;
};

/**
 * Affiche les articles ajouter dans le panier
 * @param {Array} articles - Tableau des articles dans le panier
 */
function displayArticleInCart(articles) {
    articles.forEach(article => {
        const listItem = document.createElement('li');
        listItem.id = article.id;
        listItem.classList.add('flex', 'py-6');
        listItem.innerHTML += `
            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src="./assets/jacket1.jpg" alt="Illustration de l'article ${article.name}" class="h-full w-full object-cover object-center">
            </div>
            <div class="ml-4 flex flex-1 flex-col">
                <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">${article.name}</a>
                        </h3>
                        <p class="ml-4">${article.price}€</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Id: ${article.id}</p>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                    <p class="text-gray-500">Qty ${article.quantity}</p>
                    <div class="delete-btn-container-${article.id} flex">
                    <!-- BOUTTON SUPPRIMER -->
                    </div>
                </div>
            </div>`;

        const deleteButton = createButtonRemoveToCartElt(article);
        const deleteButtonContainer = listItem.querySelector(`.delete-btn-container-${article.id}`);
        deleteButtonContainer.appendChild(deleteButton);

        cartArticleListElt.appendChild(listItem);
    });
}
