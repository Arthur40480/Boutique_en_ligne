class Article {
    static idCounter = 1;

    constructor(name, price, category, imgSrc) {
        this._id = Article.idCounter++;
        this._name = name;
        this._price = price;
        this._category = category;
        this._imgSrc = imgSrc;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get category() {
        return this._category;
    }

    get imgSrc() {
        return this._imgSrc;
    }

    set name(v) {
        this._name = v;
    }

    set price(v) {
        this._price = v;
    }

    set category(v) {
        this._category = v;
    }

    set imgSrc(v) {
        this._imgSrc = v;
    }
}


