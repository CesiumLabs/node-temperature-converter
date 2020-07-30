class Fahrenheit {
    /**
     * Fahrenheit constructor
     * @param x Degrees
     */
    constructor(x) {
        if (!x && x !== 0 || typeof x !== "number") throw new Error(`Expected input to be a number, received ${typeof x}!`);
        this.degrees = x;
    }

    /**
     * Converts Fahrenheit to celsius
     */
    toCelsius() {
        const fm = this.degrees ? (this.degrees - 32) * 5 / 9 : 0;
        return fm;
    }

    /**
     * Converts Fahrenheit to kelvin
     */
    toKelvin() {
        const fm = this.degrees ? (this.degrees - 32) * 5 / 9 + 273.15 : 0;
        return fm;
    }

    /**
     * String representation of Fahrenheit
     */
    toString() {
        return `${String(this.degrees || 0)}°F`;
    }

}

module.exports = Fahrenheit;