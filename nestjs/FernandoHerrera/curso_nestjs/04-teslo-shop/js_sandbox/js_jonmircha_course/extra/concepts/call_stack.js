// PILA DE EJECUCIÓN (CALL STACK): https://developer.mozilla.org/es/docs/Glossary/Call_stack

/*
    Es como un mapa (pila) que utilizan los motores de JS a la hora de ejecutar nuestros programas y le sirve para saber
    en que función estan parados durante la ejecución del programa y por que funciones fueron pasando previamente
    hasta llegar ahí. Y de esta manaera cuando el motor termine de ejecutar la función actual puede continuar de ejecutar
    la funcipon previa. Desde el lugar exacto que se habia realizado la llamada de la función actual y así si llama otra el motor 
    va saber a donde tiene que volver cuando termine de ejecutar esta otra función.

    A las pilas se les conoce como LIFO (lASt iN First Out)

    El motor de JS puede ejecutar una sola cosa a la vez

    NOTAS:
      - cuando ejecutamos un programa en js la primer función que se agrega a la pila es una función anónima 
        que engloba todo el programa, es como si fuera el hilo principal de todo el programa y cuando esta función
        salga de la pila significa que se terminó la ejecución del programa principal

      - SCOPE: es el contexto actual de ejecución
      - CONTEXTO DE EJECUCIÓN: variables y funciones que se pueden acceder cuando se está ejecutando una función, el contexto (this), arguments u objeto global (window o global)
      - THIS: hace referencia al objeto que seria como el dueño de la función y el valor que tiene THIS determina 
      el contexto de la función
      - ARGUMENTS: es un objeto similar a los arrays que tienen las funciones en su scope local (menos las arrows functions),
        contiene los parámetros que recibe la función cuando fue invocada
      
      - muchas veces se dice que lo que se guarda en la pila de ejecución son las funciones o llamadas a las funciones, pero
      en verdad lo que se apila es un frame registro que contiene la función, el contexto de ejecución, el nombre del archivo 
      al que pertenece y el número de la proxima línea a ejecutar que se va a actualizar a medida que se vaya ejecutando.
      - cada vez que se llama una función el motor va a crear un nuevo registro de estos y lo va agregar a su pila de ejecución
      y el motor de JS trabaja con ese registro hasta que se termine de ejecutar la fn ya sea por que se llegó al final o por que
      se ejecutó un return y ahi es cuando sacas el registro de la pila y continuas trabajando con el que estaba de bajo.
  */

// EJEMPLO 1
const cortar = (ingrediente) => {
  console.log("Cortar " + ingrediente);
};

function mezclarIngredientes(n) {
  if (n <= 0) return;

  console.log("Mezclar #" + n);
  mezclarIngredientes(n - 1);
}

function comer() {
  console.log("Comer");
}

function hacerEnsaladaMixta() {
  cortar("tomate");
  cortar("lechuga");
  cortar("cebolla");
  mezclarIngredientes(5);
  comer();
}

hacerEnsaladaMixta();
