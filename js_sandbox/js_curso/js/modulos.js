import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculo } from "./aritmetica.js";

console.log('Archivo modulos.js');
console.log(PI, usuario);
// console.log(aritmetica.sumar(8, 2));
console.log(calculo.sumar(8, 2));
saludar();
let saludo = new Saludar();
saludo;