// CURRIFICACIÓN: es ejecutar una función que tiene n parametros e irla reduciendo a menos parametros
// CLOSURE: es una función que guarda referencias, se puede ver como un objeto que tiene una funcionaidad unica

// EJEMPLO 1
// function suma(a) {
//   let i = 0;
//   return function (b) {
//     i++;
//     console.log(a + b);
//     console.log(i);
//   };
// }

// let s1 = suma(1);
// s1(2);
// s1(3);

// EJEMPLO 2
function factoryElement(tag, className_) {
  let className = className_;
  return function (child) {
    let element = document.createElement(tag);
    element.textContent = child;
    element.classList.add(className);

    document.body.appendChild(element);
  };

  let miDiv = factoryElement("div", "border");
  let miButton = factoryElement("button", "border");

  miDiv("Hola soy un texto");
  miButton("soy un boton");
}
