// Esperar que el DOM este listo
$(document).ready(function () {
  var $input = $("#claim"),
    $h1 = $(".contenido").children("h1");

  $input.keydown(function (evento) {
    console.log(evento.which);
    var code = evento.which;
    // https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    // https://craig.is/killing/mice
    if (code === 13) {
      $h1.text($input.val());
    }
  });
});
