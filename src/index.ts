type tempratureType = 'celcius' | 'fahrenheit' | 'kelvin' | 'c' | 'f' | 'k';
type degreeType = `${number}${tempratureType}` | `${number}`;
const validTypes = ['celcius', 'fahrenheit', 'kelvin', 'c', 'f', 'k'];

export function convertTemprature(degree: degreeType | number, convertTo: tempratureType, toString: true): string;
export function convertTemprature(degree: degreeType | number, convertTo: tempratureType, toString?: false): number;
/**
* Convert temprature's unit
* @param degree Temprature with or without unit
* @param convertTo unit in which you want to convert the temprature
* @param toString return string value or numerical
*/
export function convertTemprature(degree: degreeType | string | number, convertTo: tempratureType = 'celcius', toString: boolean = false): string | number {
    // Paramters validation
    if (!convertTo || !validTypes.includes(convertTo))
        throw new Error("Invalid temprature unit was provided");

    if (!degree || (typeof (degree) !== 'string' && typeof (degree) !== 'number') || degree === NaN || (typeof (degree) === 'string' && !parseFloat(degree) && parseFloat(degree) !== 0))
        throw new Error("Invalid temprature was provided, it should either be a string starting with a number or a number");
    if (typeof (toString) !== 'boolean') throw new Error("thrid paramater (toString) should be boolean type i.e. true or false")

    // Constants
    const d = typeof (degree) === "string" ? parseFloat(degree) : degree,
        type = typeof (degree) === "string" ? degree[d.toString().length]?.toLowerCase() || degree[d.toString().length - 1]?.toLowerCase() : 'c';

    // Caluclating the value
    let converted: number = parseFloat((type === 'k'
        ?
        // Kelvin to something
        convertTo === "k" || convertTo === "kelvin" ? d
            : convertTo === "f" || convertTo === "fahrenheit" ? (d - 273.15) * 9 / 5 + 32
                : d - 273.15
        :
        type === 'f'
            // Fahrenheit to something
            ?
            convertTo === "c" || convertTo === "celcius" ? (d - 32) * 5 / 9
                : convertTo === "f" || convertTo === "fahrenheit" ? d
                    : (d - 32) * 5 / 9 + 273.15
            // Celcius or Wrong Unit to something
            : convertTo === "c" || convertTo === "celcius" ? d
                : convertTo === "f" || convertTo === "fahrenheit" ? (d * 9 / 5) + 32
                    : d + 273.15).toFixed(3));

    // Returning the value
    return toString ? converted + convertTo[0].toUpperCase() : converted;
}

export default convertTemprature;