class Category {
    static idCounter = 1;

    constructor(name) {
        this._id = Category.idCounter++;
        this._name = name;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(v) {
        this._name = v;
    }

}
