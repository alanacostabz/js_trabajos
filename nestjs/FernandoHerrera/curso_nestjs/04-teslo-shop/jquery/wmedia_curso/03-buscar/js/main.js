// Esperar que el DOM este listo
// vanilla javascript
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Estoy Listo!");
// });

// jquery
// $(document).ready(function () {
//   console.log("Yo tambien estoy listo");
// });

// $(document).on("DOMContentLoaded", function () {
//   console.log("Y yo tambien lo estoy!");
// });

$(document).ready(function () {
  // descendientes directos
  $("aside > img").fadeOut("slow");

  // busqueda de elementos
  $("a span").css("color", "red");

  // selectores multiples
  // $("a, span, p").slideToggle();

  // pseudo clases
  $("p:odd").css({
    "font-weight": "bold",
    color: "goldenrod",
  });
});
