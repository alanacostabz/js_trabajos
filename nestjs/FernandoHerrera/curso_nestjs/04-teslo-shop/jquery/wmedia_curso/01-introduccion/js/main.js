/***** VANILLA JS *****/
// var elemento = document.querySelector("h1");
// var timeout = setTimeout(() => {
//   elemento.innerHTML = "Hola desde Hermosillo con VANILLA JS";
// }, 1000);

/**** JQUERY *****/
var elemento = $("h1");
var timeout = setTimeout(() => {
  elemento.text("Hola desde Hermosillo con JQUERY");
}, 1000);
