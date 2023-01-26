/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

// console.log(window);
// console.log(document);
// let texto = "Hola, soy tu amigo y docente digital... Jonathan MirCha";
// const hablar = (texto) =>
//   speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
// hablar(texto);
/*






*/
/* **********     Curso JavaScript: 61. DOM: Introducción - #jonmircha     ********** */
// console.log(
//   "******************* Elementos del Documento **********************"
// );
// console.log(window.document); // nos muestra todas las partes el html
// console.log(document); // no hay necesidad de poner window.
// console.log(document.head); // accedemos al head del documento
// console.log(document.body); // accedemos al body del documento
// console.log(document.documentElement); // accedemos a toda la etiqueta del html
// console.log(document.doctype); // accedemos el tipo de documento
// console.log(document.characterSet); // accedemos al juegos de carácteres
// console.log(document.title); // accdemos al titulo
// console.log(document.links); // accdemos a la lista de enlaces del documento
// console.log(document.images); // accdemos a la lista de imagenes del documento
// console.log(document.forms); // accdemos a la lista de formularios del documento
// console.log(document.styleSheets); // accdemos a una coleccion que represnta las hojas de estilo enlazadas en el documento
// console.log(document.scripts); // accedemos a una lista de scripts del documento
// setTimeout(() => {
//   console.log(document.getSelection().toString()); // accedemos a lo que seleccionamos en el documento
// }, 3000);
// document.write("<h2>Hola mundo desde el DOM</h2>");
// NOTA: HTMLCollection: es como un arreglo PERO de elementos de HTML
/*






*/
/* **********     Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores - #jonmircha     ********** */
/*
  - Un NODO de texto es el texto que tiene dentro una etiqueta (h1, p, h2, etc)
  - Un NODO de tipo elemento es como tal una etiquera de HTML en particular

  NODELIST: es otro tipo tipo de objeto parecido al arreglo pero que tiene que ver con el DOM

  A nivel de rendimiento querySelector es mas lento que getElementById ya que query selector tiene que hacer primero una validacón para saber que tipo de selector se acaba de ingresar

  querySelector y querySelector devuelven una nodelist, a diferencia de las otras que regresan una HTMLCollection
*/
// estos métodos es raro que se utilicen
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));

// console.log(document.getElementById("menu"));
// console.log(document.querySelector(".card"));
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll("a"));
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach((el) => console.log(el));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelector("#menu li"));
// console.log(document.querySelectorAll("#menu li"));
/*






*/
/*
 **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes - #jonmircha     ********** */
/*
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener"); // significa que no hay una dependencia entre la ventana que se abre y la ventana origen
$linkDOM.setAttribute("href", "https://youtube.com");
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// DATA-ATTRIBUTES
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Dodumento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribite a mi canal";
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
/*




*/
/*
 **********     Curso JavaScript: 64. DOM: Estilos y Variables CSS - #jonmircha     **********
 */
/*
  Data attributes are actually HTML attributes that allow you to create and assign bespoke data points to HTML elements. They are accessible via HMTL, CSS, and JavaScript, making them a powerful choice for storing bits of information that maybe aren’t so appropriate for class lists or ids. After all, we should aim to keep class and id attributes reserved for styling purposes, otherwise, things can get very messy and confusing quickly.

  NOTA:
    - Con la notación del punto se accede a todas las propiedades, mientras que el get attribute regresa solo la propiedad en sí.
*/
// const $linkDOM = document.querySelector(".link-dom");
// console.log($linkDOM.style); // a diferencia de computed style trae solo las afectadas
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM)); // trae las propiedades dinámicas del css, trae el valor por defecto que le da a esa etiqueta html el navegador a nivel de propiedades css
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// $linkDOM.style.setProperty("text-decoration", "none");
// $linkDOM.style.setProperty("display", "block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.marginLeft = "auto";
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.padding = "1rem";
// $linkDOM.style.borderRadius = "1.5rem";

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log(window.getComputedStyle($linkDOM));

// // Variables CSS - Custom Properties CSS
// const $html = document.documentElement,
//   $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//   varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor, varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color", "#000");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color", varDarkColor);
/*




*/
/*
 **********     Curso JavaScript: 65. DOM: Clases CSS - #jonmircha     **********
 */
// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.className); // trae el string que tenga la case de nombre
// console.log($card.classList); // nos trae la lista de clases del elemento
// $card.classList.contains("rotate-45"); // verifica si el elemento tiene la clase ingresada
// $card.classList.add("rotate-45"); // agrega una nueva clase
// $card.classList.contains("rotate-45");
// console.log($card.className);
// console.log($card.classList);
// $card.classList.remove("rotate-45"); // remueve una clase indicada
// $card.classList.contains("rotate-45");
// $card.classList.toggle("rotate-45");
// $card.classList.contains("rotate-45");
// $card.classList.toggle("rotate-45");
// $card.classList.contains("rotate-45");
// $card.classList.toggle("rotate-45"); // intercalar una clase por ejemplo on->off->on
// $card.classList.contains("rotate-45");
// $card.classList.replace("rotate-45", "rotate-135"); // remplaza una clase por otra
// $card.classList.add("opacity-80", "sepia"); // se puede agregar varias clases a la vez
// $card.classList.remove("opacity-80", "sepia"); // se puede remover varias clases a la vez
// $card.classList.toggle("opacity-80", "sepia"); // se puede intercalar varias clases a la vez
/*





*/
/*
 **********     Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha     **********
 */
// const $whatIsDOM = document.getElementById("que-es");

// let text = `
//   <p>
//     El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
//   </p>
//   <p>
//     Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//   </p>
//   <p>
//     <mark>
//       El DOM no es parte de la especificación de JS, es una API para los navegadores.
//     </mark>
//   </p>
// `;

// // $whatIsDOM.innerText = text; // agrega texto, no es parte del estándar
// $whatIsDOM.textContent = text; // agrega texto
// $whatIsDOM.innerHTML = text; // se renderiza como código html
// $whatIsDOM.outerHTML = text; // remplaza completamente el contenido

/*
  NOTA:
    - innerText y textContent sirven para dar contenido textual a un elemento, la diferencia es que innerText fue creada para internet explorer, en cambio textContent es la propiedad estándar, pero funcionan en cuaqulquier navegador.

    - Cuando se necesita insertar solo texto se debe usar textContent, cuando se necesite insertar solo código HTML se debe usar innerHTML
*/
/*




*/
/*
 **********     Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha     **********
 */
// DOM Traversing: son unas series de propiedades que nos da la API del DOM para que tomando la referencia de un nodo poder recorrer los elementos
// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children); // se obtienen los hijos de "cards" "elementos"
// console.log($cards.children[2]); // se obtiene hijo posicionado en el tercer lugar
// console.log($cards.parentElement); // retorna el elemento "body" al ser ese su padre
// console.log($cards.firstChild); // hace referencia al primer nodo en este caso seria un espacio (identación) por lo que no es muy util
// console.log($cards.firstElementChild); // obtiene el primer elemento hijo de cards
// console.log($cards.lastElementChild); // obtene el ultimo elemento hijo de cards
// console.log($cards.previousElementSibling); // el elemento hermano anterior de cards
// console.log($cards.nextElementSibling); // el elemento hermano posterior de cards
// console.log($cards.closest("div")); // busca el padre mas cercano del tipo de selector que tenemos
// console.log($cards.closest("div")); // busca el padre mas cercano del tipo de selector que tenemos
// console.log($cards.children[3].closest("section")); // busca el padre mas cercano del tipo de selector que tenemos
/*





*/
/*
 **********     Curso JavaScript: 68. DOM: Creando elementos y fragmentos - #jonmircha     **********
 */
// const $figure = document.createElement("figure"), // creamos un elemento figure
//   $img = document.createElement("img"), // creamos un elemento img
//   $figcaption = document.createElement("figcaption"), // creamos un elemento figcaption
//   $figcaptionText = document.createTextNode("Animals"), // creamos un nodo de texto
//   $cards = document.querySelector(".cards"),
//   $figure2 = document.createElement("figure");

// $img.setAttribute("src", "https://placeimg.com/200/200/animals");
// $img.setAttribute("alt", "Animals");
// $figure.classList.add("card");

// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure); // añadimos un elemento hijo a al elemento cards

// $figure2.innerHTML = `
//   <img src="https://placeimg.com/200/200/people" alt="People">
//   <figcaption>People</figcaption>
// `;
// $figure2.classList.add("card");
// $cards.appendChild($figure2);

// const juegosNintendo = ["Zelda", "Pokemon", "Mario", "Metroid", "Dragon Quest"],
//   $ul = document.createElement("ul");

// document.write("<h3>Sagas de Nintendo</h3>");
// document.body.appendChild($ul);

// juegosNintendo.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $ul.appendChild($li);
// });

// const juegosPlaystation = [
//     "God Of War",
//     "The Last Of Us",
//     "Uncharted",
//     "Bloodborne",
//     "Horizon",
//   ],
//   $ul2 = document.createElement("ul");

// document.write("<h3>Sagas de Playstation</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";
// juegosPlaystation.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// FRAGMENTOS: sirve para optimizar la carga de elementos al hacer todo en una insercción, es una manera más optima para no hacer tanta demanda de recursos al ordenador del usuario
// const equipos = [
//   "Club América",
//   "Boca Juniors",
//   "Real Madrid",
//   "Barcelona",
//   "River Plate",
//   "Bayern Munich",
//   "Manchester United",
//   "Liverpool",
//   "Chelsea",
//   "PSG",
// ];

// $ul3 = document.createElement("ul");
// $fragment = document.createDocumentFragment();

// equipos.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $fragment.appendChild($li);
// });

// document.write("<h3>Equios de fútbol</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);
/*





*/
/*
 **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     **********
 */
// Las etiquetas template son un modelo a serguir en el cual estructramos el contenido html que mediante js se convierta en dinámico y es otra forma de poder interactuar con el dom
// const $cards = document.querySelector(".cards"),
//   $template = document.getElementById("template-card").content,
//   $fragment = document.createDocumentFragment(),
//   cardContent = [
//     {
//       title: "Tecnología",
//       img: "https://placeimg.com/200/200/tech",
//     },
//     {
//       title: "Animales",
//       img: "https://placeimg.com/200/200/animals",
//     },
//     {
//       title: "Arquitectura",
//       img: "https://placeimg.com/200/200/arch",
//     },
//     {
//       title: "Gente",
//       img: "https://placeimg.com/200/200/people",
//     },
//     {
//       title: "Naturaleza",
//       img: "https://placeimg.com/200/200/nature",
//     },
//   ];

// cardContent.forEach((el) => {
//   $template.querySelector("img").setAttribute("src", el.img);
//   $template.querySelector("img").setAttribute("alt", el.title);
//   $template.querySelector("figcaption").textContent = el.title;

//   let $clone = document.importNode($template, true);
//   $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);
/**
 *
 *
 *
 *
 *
 */
/*
 **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     **********
 */
// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure"),
//   $cloneCards = $cards.cloneNode(true); // true para clonar todo el contenido

// $newCard.innerHTML = `
//   <img src="https://placeimg.com/200/200/any" alt="any">
//   <figcaption>Any</figcaption>
// `;
// $newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[2]); // reemplazar un elemento en espécifico
// $cards.removeChild($cards.lastElementChild); // eliminar ultimo elemento
//$cards.insertBefore($newCard, $cards.firstElementChild); // insertar un elemeto al principio
// document.body.appendChild($cloneCards);
/**
 *
 *
 *
 *
 *
 */
/*
 **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     **********
 */
/**
 * Existen tres métodos:
 * .insertAdjacent...
 *  .insertAdjacentElement(position,el) - hace referencia a un nodo de tipo elemento (etiqueta html)
 *  .insertAdjacentHTML(position,html) - textp que esté en formato html
 *  .insertAdjacentText(position,text) - nodos de texto
 *
 *  Posiciones:
 *    beforebegin(hernano anterior)
 *    afterbegin(primer hijo)
 *    beforeend(ultimo hijo)
 *    afterend(hermano siguiente)
 */
// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure");

// let $contentCard = `
//   <img src="https://placeimg.com/200/200/any" alt="any">
//   <figcaption></figcaption>
// `;
// $newCard.classList.add("card");

// $newCard.insertAdjacentHTML("beforeend", $contentCard);
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// $cards.insertAdjacentElement("afterbegin", $newCard);

// $cards.prepend($newCard); // primer hijo
// $cards.append($newCard); // ultimo hijo
// $cards.before($newCard); // hermano anterior
// $cards.after($newCard); // hermano  posterior
/**
 *
 *
 *
 *
 *
 */
/*
 **********     Curso JavaScript: 72. DOM: Manejadores de eventos - #jonmircha     **********
 */
/**
 *  Los EVENTOS es aquel mecanismo que tenemos en JS para controlar las acciones del usuario y definir ciertos comportamientos del documento que sucedan en cierto momento o cuando se cumplan ciertas condiciones.
 *
 * Las funciones que se ejecutan en un evento en inglés se conoce como eventhandler (manejadores de eventos, observadores, escuchadores), hay 3 maneras de defenir los eventos en JS
 *  - Evento como si fuera un atributo de html (no recomenable)
 *  - Evento semántico (pero solo se puede asignar una función)
 *  - Manejadores multiples (utilizando la función addEventListener del estándar del DOM)
 *
 * elementos importantes de event:
 * 1. type: tipo de evento que se desencadenó
 * 2. target: el elemento que originó el evento
 *
 * Los evento semanticos tienen un pequeño incoveniente el cual es que solamente puede ejecutar una función, no se pueden asignar diferentes funciones aun mismo evento
 */
// function holaMundo() {
//   alert("Hola Mundo");
//   console.log(event);
// }

// const $eventoSemantico = document.getElementById("evento-semantico"),
//   $eventoMultiple = document.getElementById("evento-multiple");

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e) {
//   alert("Hola mundo manejador de evento semántico");
//   console.log(e);
//   console.log(event);
// };

// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e) => {
//   alert("Hola Mundo manejador de evento múltiple");
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(event);
// });
/**
 *
 *
 *
 *
 *
 */
/*
 **********     Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     **********
 */
// NOTA: toda función que vaya a ser manejadora de eventos no puede recibir otro parametro que no sea el evento en sí
// function holaMundo() {
//   alert("Hola Mundo");
//   console.log(event);
// }

// function saludar(nombre = "Desconocid@") {
//   alert(`Hola ${nombre}`);
//   console.log(event);
// }

// const $eventoSemantico = document.getElementById("evento-semantico"),
//   $eventoMultiple = document.getElementById("evento-multiple"),
//   $eventoRemover = document.getElementById("evento-remover");

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e) {
//   alert("Hola mundo manejador de evento semántico");
//   console.log(e);
//   console.log(event);
// };

// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e) => {
//   alert("Hola Mundo manejador de evento múltiple");
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(event);
// });
// $eventoMultiple.addEventListener("click", () => {
//   saludar();
//   saludar("Alan");
// });

// Eliminar eventos
// NOTA: para remover una función manejadora, esa función tiene que estar previamente guardada, ya que la caracteristica de una función anonima en los eventos es que en el momento que se está declarando se está ejecutando y se pierde la referencia, y pues para poder utilizar el removedor de eventos esta tiene que esta guarda en una funcion expresada o una funcion declarada
// const removerDobleClick = (e) => {
//   alert(`Removiendo el evento de tipo ${e.type}`);
//   console.log(e);
//   $eventoRemover.removeEventListener("dblclick", removerDobleClick);
//   $eventoRemover.disabled = true;
// };
// $eventoRemover.addEventListener("dblclick", removerDobleClick);
/**
 *
 *
 *
 *
 *
 */
/*
 **********     Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha     **********
 */
// NOTA: hay dos maneras de trabajar con flujo de eventos y caotura y captura
// const $divsEventos = document.querySelectorAll(".eventos-flujo div");

// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
//   );
// }

// console.log($divsEventos);

// $divsEventos.forEach((div) => {
//   // Fase de burbuja
//   // div.addEventListener("click", flujoEventos);
//   // div.addEventListener("click", flujoEventos, false);

//   // Fase de captura
//   // div.addEventListener("click", flujoEventos, true);
//   div.addEventListener("click", flujoEventos, {
//     capture: false,
//     once: true,
//   });
// });
/**
 *
 *
 *
 *
 *
 */
/*
 **********     Curso JavaScript: 75. DOM: stopPropagation & preventDefault - #jonmircha     **********
 */
// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//   $linkEventos = document.querySelector(".eventos-flujo a");

// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
//   );
//   e.stopPropagation(); // apaga la propagación de los eventos que veiamos en la seccion anterior del flujo de eventos
// }

// console.log($divsEventos);

// $divsEventos.forEach((div) => {
//   // Fase de burbuja
//   div.addEventListener("click", flujoEventos);
//   // div.addEventListener("click", flujoEventos, false);

//   // Fase de captura
//   // div.addEventListener("click", flujoEventos, true);
//   // div.addEventListener("click", flujoEventos, {
//   //   capture: false,
//   //   once: true,
//   // });
// });

// $linkEventos.addEventListener("click", (e) => {
//   alert(`Hola soy Gokú`);
//   e.preventDefault(); // lo que hace este método es cancelar la accion que tenga por default el elemento
//   e.stopPropagation();
// });
/**
 *
 *
 *
 *
 *
 */
/*
 **********     Curso JavaScript: 76. DOM: Delegación de Eventos - #jonmircha     **********
 */
/**
 * DELEGACIÓN DE EVENTOS:  es un mecanismo a través del cual evitamos asignar event listeners a múltiples nodos específicos del DOM, asignando un event listener a solo un nodo padre que contiene el resto de estos nodos.
 * https://osmancea.medium.com/delegaci%C3%B3n-de-eventos-del-dom-con-javascript-d28131d43686
 */

// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this}, el click lo originó ${e.target.className}`
//   );
// }

// document.addEventListener("click", (e) => {
//   console.log("Click en", e.target);

//   if (e.target.matches(".eventos-flujo div")) {
//     flujoEventos(e);
//   }

//   if (e.target.matches(".eventos-flujo a")) {
//     alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
//     e.preventDefault();
//   }
// });
/**
 *
 *
 *
 *
 *
 */
/*
 **********     Curso JavaScript: 77. BOM: Propiedades y Eventos - #jonmircha     **********
 */
/**
 *  - BOM (Browser Object Model): es una serie de métodos y objetos que culegan directamente de window, nos permite manipular algunas propiedades y eventos de la ventana del navegador como tal de nuestra aplicación. Se centra en las carácteristicas y propiedades que como tal tiene el objeto window (que es el objeto global de la ventana de nuestro navegador)
 *
 *  - Es más eficiente trabajar con DOMContentLoaded que load ya que es más rapida la carga ya que load espera a que se cargue todo
 */
// window.addEventListener("resize", (e) => {
//   console.clear(); // limpia la consola
//   console.log("********* Evento Resize **********");
//   console.log(window.innerWidth); // hace referencia al tamaño del ancho del viewport de nuestra ventana
//   console.log(window.innerHeight); // hace referencia al tamaño del alto del viewport de nuestra ventana
//   console.log(window.outerWidth); // es el tamaño que tiene nuestra ventana del navegador
//   console.log(window.outerHeight); // es el tamaño que tiene nuestra ventana del navegador
//   console.log(e);
// });

// window.addEventListener("scroll", (e) => {
//   console.clear(); // limpia la consola
//   console.log("********* Evento Scroll **********");
//   console.log(window.scrollX); // hace referencia a las barras de desplazamiento (cuanto se aleja la barra de desplazamiento horizontal del marginTop)
//   console.log(window.scrollY); // hace referencia a las barras de desplazamiento (cuanto se aleja la barra de desplazamiento vertical del marginTop)
//   console.log(e);
// });

// window.addEventListener("load", (e) => {
//   console.log("********* Evento Load **********");
//   console.log(window.screenX); // identifica en que coordenada de la pantalla empieza a dibujarse la ventana del navegador
//   console.log(window.screenY); // identifica en que coordenada de la pantalla empieza a dibujarse la ventana del navegador
//   console.log(e);
// });

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("********* Evento DOMContentLoaded **********");
//   console.log(window.screenX); // identifica en que coordenada de la pantalla empieza a dibujarse la ventana del navegador
//   console.log(window.screenY); // identifica en que coordenada de la pantalla empieza a dibujarse la ventana del navegador
//   console.log(e);
// });
/**
 *
 *
 *
 *
 *
 */
/*
 **********     Curso JavaScript: 78. BOM: Métodos - #jonmircha     **********
 */
// window.alert("Alert");
// window.confirm("Confirmación");
// window.prompt("Aviso");
// const $btnAbrir = document.getElementById("abrir-ventana"),
//   $btnCerrar = document.getElementById("cerrar-ventana"),
//   $btnImprimir = document.getElementById("imprimir-ventana");

// let ventana;

// $btnAbrir.addEventListener("click", (e) => {
//   ventana = window.open("https://jonmircha.com");
//   // open("https://jonmircha.com");
// });
// $btnCerrar.addEventListener("click", (e) => {
//   //window.close();
//   ventana.close();
// });
// $btnImprimir.addEventListener("click", (e) => {
//   window.print();
// });
/**
 *
 *
 *
 *
 *
 */
/*
 **********     Curso JavaScript: 79. BOM: URL, Historial y Navegador - #jonmircha     **********
 */
/**
 * - URL: mejor conocido como objeto location
 * - HISTORY
 * - NAVIGATOR
 */
// console.log("********** Objeto URL (location) **********");
// console.log(window.location);
// console.log(window.location.origin);
// console.log(window.location.protocol);
// console.log(window.location.host);
// console.log(window.location.hostname);
// console.log(window.location.port);
// console.log(window.location.href);
// console.log(window.location.hash);
// console.log(window.location.search);
// console.log(window.location.pathname);
// location.reload();

// console.log("********** Objeto Historial (history) **********");
// console.log(window.history);
// console.log(window.history.length);
// console.log(window.history.back(1));
// console.log(window.history.forward(1));
// console.log(window.history.go(1));
// console.log(window.history.go(-1));

// console.log("********** Objeto Navegador (navigator) **********");
// console.log(window.navigator);
// console.log(window.navigator.connection); // nos da información la conexión del usuario
// console.log(window.navigator.geolocation); // geolocalización
// console.log(window.navigator.mediaDevices); // camara, microfonos
// console.log(window.navigator.mimeTypes); // son los tipo de formatos que dependiendo del tipo de información soportan los navegadores web
// console.log(window.navigator.onLine); // detecta si el usuario está conectado
// console.log(window.navigator.serviceWorker); // es un api que nos sirve para hacer progresive web apps (sitio web a aplicación instalable)
// console.log(window.navigator.storage); // api de alamcenamiento
// console.log(window.navigator.usb); // api de usb
// console.log(window.navigator.userAgent); // informacion sobre el navegador el cual estamos conectados
