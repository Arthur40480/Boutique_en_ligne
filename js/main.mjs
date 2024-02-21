import { categories, articles } from "./data.mjs";

const categoriesContainerElt = document.getElementsByClassName('categories-container')[0];
const articlesContainerElt = document.getElementsByClassName('articles-container')[0];

/**
 * Affiche les catégories
 * @param {Array} categories - Tableau des catégories
 */
function displayCategories(categories) {
    categories.forEach(category => {
        const categoryElt = document.createElement('div');
        categoryElt.classList.add("category");
        categoryElt.classList.add("hover:bg-blue-500");
        categoryElt.classList.add("cursor-pointer");
        categoryElt.textContent = category.name;
        categoriesContainerElt.appendChild(categoryElt);
        //Evenement pour afficher les articles d'une catégorie
        categoryElt.addEventListener('click', () => {
            articlesContainerElt.innerHTML = '';
            const filteredArticles = articles.filter(article => article.category.name === category.name);
            displayArticles(filteredArticles);
        } )
    });
};

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
}

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
}

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
}

/**
 * Crée un bouton pour l'ajout d'un article au panier
 * @returns {HTMLButtonElement} - L'élément du bouton créé
 */
function createButtonAddToCartElt() {
    const buttonElt = document.createElement("button");
    buttonElt.classList.add("h-10", "w-12", "mt-1", "bg-blue-500", "rounded-md", "px-3", "py-1", "text-white", "font-bold", "hover:bg-indigo-700");
    const imgButtonElt = document.createElement("img");
    imgButtonElt.classList.add("filter", "invert");
    imgButtonElt.setAttribute("src", "/assets/addCart.png");
    imgButtonElt.setAttribute("alt", "Incon de panier");
    buttonElt.appendChild(imgButtonElt);
    return buttonElt;
}

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
        const buttonAddToCartElt = createButtonAddToCartElt();
    
        const cardArticleElt = document.createElement("a");
        cardArticleElt.classList.add("group");
        cardArticleElt.setAttribute("href", "#");

        containerImgElt.appendChild(imgArticleElt);
        cardArticleElt.appendChild(containerImgElt);
        cardArticleElt.appendChild(idArticleElt);
        cardArticleElt.appendChild(nameArticleElt);
        cardArticleElt.appendChild(priceArticleElt);
        cardArticleElt.appendChild(buttonAddToCartElt);
        articlesContainerElt.appendChild(cardArticleElt);
    })
}

displayCategories(categories);
displayArticles(articles);
