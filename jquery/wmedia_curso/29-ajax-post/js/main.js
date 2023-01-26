// Esperar que el DOM esté listo
$(document).ready(function () {
  // Cargamos el snippet de navegación lateral
  $.get("social.html").done(function (respuesta) {
    $(".lateral").append($(respuesta));
  });

  // Libro de visitas
  $("form").on("submit", function (e) {
    e.preventDefault();
    console.log("entra");

    // Realizamos la petición
    $.ajax("ajax.php", {
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: {
        nombre: $("#nombre").val(),
        mensaje: $("#mensaje").val(),
      },
    }).then(function (respuesta) {
      console.log(respuesta);
      $("form")
        .children("ol")
        .prepend(
          $(`<li>
            ${respuesta.nombre} - <small>${respuesta.fecha.weekday}</small>
            <br>
            ${respuesta.mensaje}
            </li>`)
        );
    });
  });
});
