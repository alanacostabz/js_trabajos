$(document).ready(function () {
  // capturar hover
  $("a")
    .hover(
      function () {
        // Hover IN
        // guardar el atributo title
        var titulo = $(this).attr("title"),
          fondo = $(this).data("background");

        // guardamos el titulo en atributo data- y eliminamos el titulo original
        $(this).data("titulo", titulo).removeAttr("title");

        // anadir nuestro propio tooltio
        $("<p class='tooltip'></p>")
          .text(titulo)
          .css("background-color", fondo)
          .appendTo("body")
          .fadeIn("slow");
      },
      function () {
        // Hover OUT
        // rpeoner el titulo nativo
        $(this).attr("title", $(this).data("titulo"));

        // eliminamos nuestro tooltip
        $(".tooltip").remove();
      }
    )
    .mousemove(function (e) {
      // capturar la posicion x e y del raton sobre el elemento que lanza nuestro tooltip
      var ratonX = e.pageX + 20,
        ratonY = e.pageY + 10;

      // hacer que el tooltip se mueva junto con el puntero
      $(".tooltip").css({
        top: ratonY,
        left: ratonX,
      });
    });
});
