// Esperar que el DOM este listo
$(document).ready(function () {
  var $parrafos = $(".contenido").children("p");

  // $parrafos.slideToggle(3000, function () {
  //   console.log("Finalizado!");
  // });

  $(".lateral")
    .children("img")
    .on("mouseenter", function () {
      mostrarEnSecuencia($parrafos, 500);
    });

  // atajo para mouseenter y moseleave

  // $(".lateral")
  //   .children("img")
  //   .hover(
  //     function () {
  //       console.log("Entro");
  //     },
  //     function () {
  //       console.log("Salgo");
  //     }
  //   );

  function mostrarEnSecuencia($coleccion, tiempo) {
    tiempo = tiempo || 1000;
    $coleccion.each(function (indice, elemento) {
      $(elemento).slideToggle(tiempo * (indice + 1));
    });
  }
});
