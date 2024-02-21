import { categories, articles } from "./data.mjs";

const categoriesContainerElt = document.getElementsByClassName('categories-container')[0];

/**
 * Affiche les catégories
 * @param categories Tableau des catégories
 */
function displayCategories(categories) {
    categories.forEach(category => {
        const categoryElt = document.createElement('div');
        categoryElt.classList.add("category");
        categoryElt.classList.add("hover:bg-blue-500");
        categoryElt.classList.add("cursor-pointer");
        categoryElt.textContent = category.name;
        categoriesContainerElt.appendChild(categoryElt);
    });
};

displayCategories(categories);
