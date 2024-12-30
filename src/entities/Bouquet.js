class Bouquet {
    #photo;
    #price;
    #cost;

    constructor(photo, price, cost) {
        this.#photo = photo;
        this.#price = price;
        this.#cost = cost;
    }

    getPhoto() {
        return this.#photo;
    }

    setPhoto(photo) {
        this.#photo = photo;
    }

    getPrice() {
        return this.#price;
    }

    setPrice(price) {
        if (price >= 0) {
            this.#price = price;
        } else {
            console.log("Price cannot be negative.");
        }
    }

    getCost() {
        return this.#cost;
    }

    setCost(cost) {
        if (cost >= 0) {
            this.#cost = cost;
        } else {
            console.log("Cost cannot be negative.");
        }
    }

    calculateProfit() {
        return this.#price - this.#cost;
    }
}