// Esperar que el DOM este listo
$(document).ready(function () {
  // EVENT LISTENER DIRECTO
  // $("a").on("click", function (evt) {
  //   evt.preventDefault();
  //   console.log("a clicked");
  // });

  // EVENT LISTENER DELEGADO
  $("main").on("click", "a", function (evt) {
    evt.preventDefault();
    console.log("a clicked");
  });

  // METHOD CHAINING
  var $enlace = $(
    "<a href='http://www.wmedia.es' target='_blank'>wmedia.es</a>"
  );

  $("p")
    .last()
    .css("color", "goldenrod")
    .data("color", "amarillo")
    .append($enlace);
});
