// Esperar que el DOM este listo
$(document).ready(function () {
  var $input = $("#claim"),
    $h1 = $(".contenido").children("h1");

  $input.keydown(function (evento) {
    $h1.text($input.val());
  });
});
