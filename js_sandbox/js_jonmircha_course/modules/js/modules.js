import saludar, { Saludar, PI, usuario } from "./constants.js";
import { arithmetic as calculos } from "./arithmetic.js";

console.log("Archivos modules.js");

console.log(PI);
console.log(usuario);
// console.log(password);
// console.log(arithmetic.sumar(3, 4));
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));
saludar();
let saludo = new Saludar();
saludo;
