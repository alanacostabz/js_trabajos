/*
  DOM:
      Nos permite manejar html con js a traves
      de los navegadores
*/

// console.log("********** Elementos del documento **********");
// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.charset);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);
// setTimeout(() => {
//   console.log(document.getSelection().toString());
// }, 3000);
// document.write('<h2>Hola Mundo desde el DOM</h2>');





// console.log("********** Nodos, Elementos y Sectores **********");

// // Ya no se utilizan
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));


// console.log(document.getElementById("menu"));
// console.log(document.querySelector("#menu"));
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a"));
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll('a').forEach(el => console.log(el));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelectorAll("#menu li"));
// console.log(document.querySelector("#menu li"));






// **********  DOM: Atributos y Data-Attributes **********

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute('lang'));
// console.log(document.querySelector('.link-dom').href);
// console.log(document.querySelector('.link-dom').getAttribute('href'));

// document.documentElement.lang = 'en';
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute('lang','es-MX')
// console.log(document.documentElement.lang);

// const $linkDOM = document.querySelector('.link-dom');


// $linkDOM.setAttribute("target","_blank");
// $linkDOM.setAttribute("rel","noopener");
// $linkDOM.setAttribute("href","https://youtube.com");
// console.log($linkDOM.hasAttribute("rel"));
// $linkDOM.removeAttribute("rel");
// console.log($linkDOM.hasAttribute("rel"));

// // data-attributes
// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
// console.log($linkDOM.dataset.description);
// $linkDOM.dataset.description = "Ir a youtube";
// console.log($linkDOM.dataset.description);




// DOM: Nodos, Elementos y Selectores

// const $linkDOM = document.querySelector('.link-dom');

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM));
// console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

// $linkDOM.style.setProperty("text-decoration","none");
// $linkDOM.style.setProperty("display","block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.margin = "Auto";
// $linkDOM.style.padding = "1rem";
// $linkDOM.style.borderRadius = ".5rem";

// // Variables CSS - Custom Properties
// const $html = document.documentElement,
//   $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
// let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");


// console.log(varDarkColor, varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color","#000");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color", varDarkColor);



// DOM: Clases CSS
// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// console.log($card.className);
// console.log($card.classList);
// $card.classList.remove("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45","rotate-135");
// $card.classList.add("opacity-80","sepia");
// $card.classList.remove("opacity-80","sepia");
// $card.classList.toggle("opacity-80","sepia");




// DOM: Texto y HTML
// const $whatIsDOM = document.getElementById("que-es");

// let text = `
//   <p>
//     El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API
//     para documentos HTML y XML.
//   </p>
//   <p>
//     Este provee una representacion estructural del document, permitiendo modificar su contenido
//     y presentación visual mediante código JS.
//   </p>
//   <p>
//     <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//   </p>
// `;

// //$whatIsDOM.innerText = text;
// $whatIsDOM.textContent = text;
// $whatIsDOM.innerHTML = text;
// $whatIsDOM.outerHTML = text;






// DOM Traversing: recorriendo el DOM
/*
  Son una serie de propiedades que nos da
  el API del DOM para que tomando como referencia
  un nodo poder recorrer diferentes elementos
*/

// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstChild);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.closest("div"));
// console.log($cards.closest("body"));
// console.log($cards.children[3].closest("section"));



// DOM: Creando Elementos y Fragmentos
// const $figure = document.createElement("figure"),
//   $img = document.createElement("img"),
//   $figcaption = document.createElement("figcaption"),
//   $figcaptionText = document.createTextNode("Animals"),
//   $cards =  document.querySelector(".cards");
//   $figure2 = document.createElement("figure");

// $img.setAttribute("src","https://placeimg.com/200/200/animals");
// $img.setAttribute("alt","animals");
// $figure.classList.add("card");

//   $figcaption.appendChild($figcaptionText);
//   $figure.appendChild($img);
//   $figure.appendChild($figcaption);
//   $cards.appendChild($figure);

//   $figure2.innerHTML = `
//     <img src="https://placeimg.com/200/200/people" alt="People">
//     <figcaption>People</figcaption>
//   `;

//   $figure2.classList.add("card");
//   $cards.appendChild($figure2);

//   const estaciones = ["Primavera","Verano","Otoño","Invierno"];
//   $ul = document.createElement("ul");

//   document.write("<h3>Estaciones del año</h3>");
//   document.body.appendChild($ul);

//   estaciones.forEach(el => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $ul.appendChild($li);
//   });

//   const continentes = ["África", "América", "Asia","Europa", "Oceanía"];
//   $ul2 = document.createElement("ul");

//   document.write("<h3>Continentes del mundo</h3>");
//   document.body.appendChild($ul2);
//   $ul2.innerHTML = "";
//   continentes.forEach(el => {
//     $ul2.innerHTML += `<li>${el}</li>`;
//   });


//   // Fragmentos
//   const juegosPS5 = [
//     "Spiderman: Miles Morales",
//     "Demon's Souls Remake",
//     "FIFA 21",
//     "Call Of Duty: Black Ops Cold War",
//     "Cyberpunk 2077",
//     "Persona 5 Royal",
//     "The Last Of Us: Part II",
//     "Final Fantasy VII: Remake",
//     "Resident Evil 3 Remake"
//   ];

//   $ul3 = document.createElement("ul");
//   $fragment = document.createDocumentFragment();

//   juegosPS5.forEach(el => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $fragment.appendChild($li);
//   });

//   document.write("<h3>Juegos PS5</h3>");
//   $ul3.appendChild($fragment);
//   document.body.appendChild($ul3);



// DOM: Templates HTML
/*template es como un modelo a seguir
donde se estructura el contenido html el 
cual se quiere que mediante js sea dinamico
y es otra forma de poder interactuar con el DOM*/

// const $cards = document.querySelector(".cards"),
// $template = document.getElementById("template-card").content,
// $fragment = document.createDocumentFragment(),
// cardContent = [
//   {
//     title: "Tecnología",
//     img: "https://placeimg.com/200/200/tech"
//   },
//   {
//     title: "Animales",
//     img: "https://placeimg.com/200/200/animals"
//   },
//   {
//     title: "Arquitectura",
//     img: "https://placeimg.com/200/200/arch"
//   },
//   {
//     title: "Gente",
//     img: "https://placeimg.com/200/200/people"
//   },
//   {
//     title: "Naturaleza",
//     img: "https://placeimg.com/200/200/nature"
//   }
// ];

// cardContent.forEach(el => {
//   $template.querySelector("img").setAttribute("src",el.img);
//   $template.querySelector("img").setAttribute("alt",el.title);
//   $template.querySelector("figcaption").textContent = el.title;

//   let $clone = document.importNode($template, true);
//   $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);
  




// DOM: Modificando elementos (OLD STYLE)

// const $cards = document.querySelector(".cards"),
// $newCard = document.createElement("figure"),
// $cloneCards = $cards.cloneNode(true);

// $newCard.innerHTML = `
// <img src = "https://placeimg.com/200/200/any" alt="Any">  
// <figcaption>Any</figcaption>
// `;

// $newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
//$cards.insertBefore($newCard, $cards.firstElementChild);
//document.body.appendChild($cloneCards);








// DOM: Modificando Elementos (Cool Style)

/*
  insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

  Posiciones:
    .beforebegin(hermano anterior)
    .afterbegin(primer hijo)
    .beforeend(ultimo hijo)
    .afterend(hermano siguiente)
*/

// const $cards = document.querySelector(".cards"),
// $newCard = document.createElement("figure");
// let $contentCard = `
// <img src = "https://placeimg.com/200/200/any" alt="Any">  
// <figcaption></figcaption>
// `;

// $newCard.classList.add("card");

// $newCard.insertAdjacentHTML('beforeend', $contentCard);
// $newCard.querySelector('figcaption').insertAdjacentText('afterbegin','Any');
//$cards.insertAdjacentElement('afterbegin', $newCard);

//$cards.prepend($newCard);
//$cards.before($newCard);
//$cards.append($newCard);
//$cards.after($newCard);






// DOM: Manejadores de Eventos 
/*
  Los eventos son aquel mecanismo que tenemos
  en js para poder controlar las acciones del 
  usuario y definir ciertos comportamientos del
  documento que sucedan en cierto momento o cuando
  se cumplan algunas condiciones.
*/


// DOM: Eventos con Parámetros y Remover Eventos

// function holaMundo() {
//   alert('Hola Mundo');
//   console.log(event);
// }

// function saludar(nombre = 'Desconocid@') {
//   alert(`Hola ${nombre}`);
// }

// const $eventoSemantico = document.getElementById('evento-semantico');
// const $eventoMultiple = document.getElementById('evento-multiple');
// const $eventoRemover = document.getElementById('evento-remover');

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = (e) => {
//   alert('Hola mundo manejador de eventos semanticos');
//   console.log(e);
//   console.log(event);
// }

// $eventoMultiple.addEventListener('click', holaMundo);
// $eventoMultiple.addEventListener('click', (e) => {
//   alert('Manejador de eventos multiples');
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
// });

// $eventoMultiple.addEventListener('click', () => {
//   saludar();
//   saludar('messi');
// });

// const removerDobleClick = (e) => {
//   alert(`Removiendo el evento de tipo ${e.type}`);
//   console.log(e);
//   $eventoRemover.removeEventListener('dblclick', removerDobleClick);
//   $eventoRemover.disable = true;
// }

// $eventoRemover.addEventListener('dblclick', removerDobleClick);








// DOM: Flujo de Eventos (Burbuja y Captura) 
// DOM: stopPropagation & preventDefault

// const $divsEventos = document.querySelectorAll('.eventos-flujo div'),
//   $linkEventos = document.querySelector('.eventos-flujo a');

// //console.log($divsEventos);
// function flujoEventos(e) {
//   console.log(`Hola te saluda ${this.className}, el click que originó ${e.target.className}`);
//   e.stopPropagation();
// }

// $divsEventos.forEach(div => {
//   // Fase de burbuja
//   div.addEventListener('click', flujoEventos);
//   //div.addEventListener('click', flujoEventos, false);

//   // Fase de captura
//   //div.addEventListener('click', flujoEventos, true);

//   // div.addEventListener('click', flujoEventos, {
//   //   capture: false,
//   //   once: true
//   // });
// });


// $linkEventos.addEventListener('click', e => {
//   alert('Hola soy goku');
//   e.preventDefault();
//   e.stopPropagation();
// });




//console.log($divsEventos);
// function flujoEventos(e) {
//   console.log(`Hola te saluda ${this}, el click que originó ${e.target.className}`);
// }

// document.addEventListener('click',(e) => {
//   console.log('Click en',e.target);

//   if (e.target.matches('.eventos-flujo div')) {
//     flujoEventos(e);
//   }
// });












// BOM: Propiedades y Eventos
//window.addEventListener('resize',(e)=> {
//   console.clear();
//   console.log('****** EVENTO RESIZE ********');
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
//   console.log(window.outerWidth);
//   console.log(window.outerHeight);
// });

// window.addEventListener('scroll', e => {
//   console.clear();
//   console.log('****** EVENTO SCROLL ********');
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });

// window.addEventListener('load', e => {
//   //console.clear();
//   console.log('****** EVENTO LOAD ********');
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });


// document.addEventListener('DOMContentLoaded', e => {
//   //console.clear();
//   console.log('****** EVENTO DOMContentLoaded ********');
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });







// BOM: Métodos
//window.alert('Alerta');
//window.confirm('Confirmación');
//window.prompt('Aviso');
// const $btnAbrir = document.getElementById('abrir-ventana'),
// $btnCerrar = document.getElementById('cerrar-ventana'),
// $btnImprimir = document.getElementById('imprimir-ventana');

// let ventana;

// $btnAbrir.addEventListener('click', e =>{
//   ventana = window.open('http://bryanacosta.000webhostapp.com');
// });
// $btnCerrar.addEventListener('click', e =>{
//   //window.close();
//   ventana.close();
// });
// $btnImprimir.addEventListener('click', e =>{
//   window.print();
// });







// BOM: Objetos: URL, Historial y Navegador
// console.log('************ Objeto URL (location) ****************');
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.pathname);
//location.reload();

// console.log('************ Objeto Historial (history) ****************');
// console.log(history);
// console.log(history.length);
// //history.back(4);
// //history.forward(3);
// //history.go(-1);

// console.log('************ Objeto Navegador (navigator) ****************');
// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);