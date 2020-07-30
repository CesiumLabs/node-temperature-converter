# Node Temperature Converter
Simple package for node to convert temperature.

# Example

```js
const Converter = require("node-temperature-converter");

// celsius
const celsius = new Converter.Celsius(35);

const obc = {
    name: "Celsius",
    deg: celsius.degrees,
    fah: celsius.toFahrenheit(),
    kel: celsius.toKelvin(),
    str: celsius.toString(),
};
console.table(obc);

/*
Expected Output:
┌───────┬───────────┐
│ (idx) │  Values   │
├───────┼───────────┤
│ name  │ "Celsius" │
│  deg  │    35     │
│  fah  │    95     │
│  kel  │  308.15   │
│  str  │  "35°C"   │
└───────┴───────────┘
*/

// fahrenheit
const fahrenheit = new Converter.Fahrenheit(95);

const obf = {
    name: "Fahrenheit",
    deg: fahrenheit.degrees,
    cel: fahrenheit.toCelsius(),
    kel: fahrenheit.toKelvin(),
    str: fahrenheit.toString(),
};
console.table(obf);

/* 
Expected Output:
┌───────┬──────────────┐
│ (idx) │    Values    │
├───────┼──────────────┤
│ name  │ "Fahrenheit" │
│  deg  │      95      │
│  cel  │      35      │
│  kel  │    308.15    │
│  str  │    "95°F"    │
└───────┴──────────────┘
*/

// kelvin
const kelvin = new Converter.Kelvin(308.15);

const obk = {
    name: "Kelvin",
    deg: kelvin.degrees,
    cel: kelvin.toCelsius(),
    fah: kelvin.toFahrenheit(),
    str: kelvin.toString(),
};
console.table(obk);

/* 
Expected Output:
┌───────┬───────────┐
│ (idx) │  Values   │
├───────┼───────────┤
│ name  │ "Kelvin"  │
│  deg  │  308.15   │
│  cel  │    35     │
│  fah  │    95     │
│  str  │ "308.15K" │
└───────┴───────────┘
*/
```