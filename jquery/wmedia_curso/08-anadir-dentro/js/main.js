// Esperar que el DOM este listo
$(document).ready(function () {
  var $enlace = $("<a href='#'>Conocer más gatos negros!</a>");
  $(".contenido").find("p").prepend($enlace);
  $(".contenido").find("p").append($enlace);
  $(".contenido").find("p").last().remove();
});
