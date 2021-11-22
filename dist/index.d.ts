declare type tempratureType = 'celcius' | 'fahrenheit' | 'kelvin' | 'c' | 'f' | 'k';
declare type degreeType = `${number}${tempratureType}` | `${number}`;
export declare function convertTemprature(degree: degreeType | number, convertTo: tempratureType, toString: true): string;
export declare function convertTemprature(degree: degreeType | number, convertTo: tempratureType, toString?: false): number;
export default convertTemprature;
