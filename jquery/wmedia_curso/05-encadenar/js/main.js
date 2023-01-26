// Esperar que el DOM este listo
$(document).ready(function () {
  // $("section.contenido p:first-of-type");
  $(".contenido").find("p").last().prev().next().css("background-color", "red");
});
