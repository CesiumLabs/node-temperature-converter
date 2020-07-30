class Kelvin {
    /**
     * Kelvin constructor
     * @param x Degrees
     */
    constructor(x) {
        if (!x && x !== 0 || typeof x !== "number") throw new Error(`Expected input to be a number, received ${typeof x}!`);
        this.degrees = x;
    }

    /**
     * Converts Kelvin to celsius
     */
    toCelsius() {
        const fm = this.degrees ? this.degrees - 273.15 : 0;
        return fm;
    }

    /**
     * Converts Kelvin to Fahrenheit
     */
    toFahrenheit() {
        const fm = this.degrees ? (this.degrees - 273.15) * 9 / 5 + 32 : 0;
        return fm;
    }

    /**
     * String representation of Kelvin
     */
    toString() {
        return `${String(this.degrees || 0)}K`;
    }

}

module.exports = Kelvin;