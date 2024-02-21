import { Category } from "./classe/Category.mjs";
import { Article } from "./classe/Article.mjs";

// Categories:
const categoryTShirt = new Category("T-shirt");
const categorySweat = new Category("Sweat");
const categoryJacket = new Category("Jacket");
const categoryPants = new Category("Pants");
const categoryJeans = new Category("Jeans");
const categoryShorts = new Category("Shorts");
const categoryShoes = new Category("Shoes");

export const categories = [categoryTShirt, categorySweat, categoryJacket, categoryPants, categoryJeans, categoryShorts, categoryShoes];

// Articles:
const tShirt1 = new Article("T-shirt manche longue", 35, categoryTShirt, "tShirt1.jpg");
const tShirt2 = new Article("T-shirt oversize", 23, categoryTShirt, "tShirt2.jpg");
const sweat1 = new Article("Sweat à capuche", 55, categorySweat, "sweat1.jpg");
const sweat2 = new Article("Sweat en laine", 75, categorySweat, "sweat2.jpg" );
const jacket1 = new Article("Veste aviateur", 120, categoryJacket, "jacket1.jpg");
const jacket2 = new Article("Veste de costume", 220, categoryJacket, "jacket2.jpg");
const pants1 = new Article("Pantalon de survêtement", 50, categoryPants, "pants1.jpg");
const jeans1 = new Article("Jeans", 80, categoryJeans, "jeans1.jpg");
const shorts1 = new Article("Short en jeans", 42, categoryShorts, "shorts1.jpg");
const shorts2 = new Article("Short de boxe", 30, categoryShorts, "shorts2.jpg");
const shoes1 = new Article("Chaussure à talon", 115, categoryShoes, "shoes1.jpg");

export const articles = [
    tShirt1,
    tShirt2,
    sweat1,
    sweat2,
    jacket1,
    jacket2,
    pants1,
    jeans1,
    shorts1,
    shorts2,
    shoes1
];

