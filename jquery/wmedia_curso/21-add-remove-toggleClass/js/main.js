// Esperar que el DOM este listo
$(document).ready(function () {
  var $enlaces = $("a");

  $(".lateral")
    .children("img")
    .on("click", function () {
      // if ($enlaces.hasClass("dopodcast")) {
      //   // si la clase esta aplicada, eliminar
      //   $enlaces.removeClass("dopodcast");
      // } else {
      //   // si no esta aplicada, aplicar
      //   $enlaces.addClass("dopodcast");
      // }

      $enlaces.toggleClass("dopodcast");
    });
});
