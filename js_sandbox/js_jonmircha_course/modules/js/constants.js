export const PI = Math.PI;

export let usuario = "Alan",
  password = "test1234";

// con const y let no se puede hacer un export default directo se tiene que hacer despues de la asignación ya que JS nos sabe que valor va a tener (hoisting)
// solo las funciones y clases se pueden exportar directo
// export default password;

export default function saludar() {
  console.log("Hola módulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola clases +ES6");
  }
}
