export class Article {
    static idCounter = 1;

    constructor(name, price, category, imgSrc) {
        this.id = Article.idCounter++;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imgSrc = `../assets/${imgSrc}`;
        this.quantity = 1;
    }
}

export class Category {
    static idCounter = 1;

    constructor(name) {
        this.id = Category.idCounter++;
        this.name = name;
    }
}

export class Customer {
    static idCounter = 1;

    constructor(name, lastName, adress, phoneNumber) {
        this.id = Customer.idCounter++;
        this.name = name;
        this.lastName = lastName;
        this.adress = adress;
        this.phoneNumber = phoneNumber;
    }
}

export class Order {
    static idCounter = 1;

    constructor(customer, articleList, total) {
        this.id = Order.idCounter++;
        this.date = new Date();
        this.customer = customer;
        this.articleList = articleList;
        this.total = total;
    }
}
