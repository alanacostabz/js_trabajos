// Esperar que el DOM este listo
$(document).ready(function () {
  // var $parrfo = $("p").last();

  // // css
  // $parrfo.css("color", "goldenrod");

  // // atributo data
  // $parrfo.data("color", "amarillo");

  // // append
  // var $enlace = $(
  //   "<a href='http://www.wmedia.es' target='_blank'>wmedia.es</a>"
  // );
  // $parrfo.append($enlace);

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
