# Node Temperature Converter
Simple package for node to convert temperature.

# Example

```js
const { convertTemprature } = require('./');
// for typescript => import convertTemprature from "node-temperature-converter";

// Get numerical temprature
convertTemprature("13f", 'celcius') // output => -10.56

// Get string version or temprature with unit
convertTemprature("13f", 'celcius', true) // output => -10.56C

// The first parameter is the degree
const validDegree = [
    12, "12", "12p", "12c", "12celcius", // no unit or invalid unit will be considered as Celcius
    "12k", "12kelvin", "12kek", // anything starts with k will be considered as Kelvin
    "12f", "12fahrenheit", "12fall", // anything starts with f will be considered as Fahrenheit
]

// The second parameter is the unit in which you want to convert the temprature
const validUnits = ['celcius', 'fahrenheit', 'kelvin', 'c', 'f', 'k'];

// Thrid parameter is boolean type
true // returns stringified value like 120C
false // returns numerical value like 120
```