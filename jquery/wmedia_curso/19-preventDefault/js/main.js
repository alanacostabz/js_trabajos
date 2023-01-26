// Esperar que el DOM este listo
$(document).ready(function () {
  // con formularios (recargar la página)
  $("form").on("submit", function (evt) {
    evt.preventDefault();
    console.log("submit!");
  });

  // con hiperenlaces
  $("a").click(function (evt) {
    evt.preventDefault();
    console.log("click!");
  });
});
