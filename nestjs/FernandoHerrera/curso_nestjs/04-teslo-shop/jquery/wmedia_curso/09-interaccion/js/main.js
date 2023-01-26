// Esperar que el DOM este listo
$(document).ready(function () {
  // escuchar un <a>
  $(".lateral")
    .find("a")
    .last()
    .on("click", function () {
      $(".contenido").children("p").css("color", "red");
    });

  // esuchar los <p>
  $(".contenido")
    .children("p")
    .on("click", function (evento) {
      evento.preventDefault();
      console.log(this);
    });
});
