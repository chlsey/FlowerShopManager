class Flower {
    #price;
    #color;
    #image;

    constructor(price, color, image) {
        this.#price = price;
        this.#color = color;
        this.#image = image;
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

    getColor() {
        return this.#color;
    }

    setColor(color) {
        this.#color = color;
    }

    getImage() {
        return this.#image;
    }

    setImage(image) {
        this.#image = image;
    }
}