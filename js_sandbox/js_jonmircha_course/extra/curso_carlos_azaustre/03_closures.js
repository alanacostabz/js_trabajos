/**
 * CLOSURES: clausulas o funciones de cierre son un patrón muy utilizado en js está dentro lo que se conoce como las good parts
 *
 * NOTAS
 *  - todo en JS es un objeto y heredan propiedades de la clase object y por lo tanto se pueden tratar como tal, podemos guardar una función
 *  en una variable y después invocarla con el parentesis
 *
 *  - las funciones pueden tener otras funciones dentro de ellas, produciendo así nuevos ambitos o scopes para las variables que hay dentro
 *  de ella y para las variables que hay dentro de ella y para poder acceder desde el exterior de la función a estas variables, tenemos que
 *  utilizar dos veces el operador parentesis
 *
 *  - un CLOSURE es una función que encapsula una serie de variables y definiciones locales que únicamente serán accesibles si son de vuelta
 *  con el operador return
 *
 *  - es una función autoejecutable que devuelve determinada variables o funciones y puedes trabajar con ellas (en cierta manera un patrón
 *  muy parecido al de clases en la POO y permite tener en cierta manera variables, tipo de datos o estructuras de datos privadas)
 */
const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

console.log(saludar("goldis")); // hola goldis
console.log(saludar); // f saludar()

/***************************************** */
const a = "Hey!";

function global() {
  const b = "¿Qué ";
  function local() {
    const c = "tal?";
    return a + b + c;
  }

  return local;
}

console.log(global()); // f local()
console.log(global()()); // Hey! ¿Qué tal?

const closure = global();
console.log(closure());

/***************************************** */

const miContador = (function () {
  let _contador = 0;

  function incrementar() {
    return _contador++;
  }

  function decrementar() {
    return _contador--;
  }

  function valor() {
    return _contador;
  }

  return {
    incrementar,
    decrementar,
    valor,
  };
})();

console.log(miContador.incrementar()); // 0
console.log(miContador.decrementar()); // 1
console.log(miContador.valor()); // 0
