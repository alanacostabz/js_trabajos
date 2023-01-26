// Esperar que el DOM este listo
$(document).ready(function () {
  var $enlace = $("<a href='#'>Conocer más gatos negros!</a>");
  $(".contenido").find("p").after($enlace);
});
