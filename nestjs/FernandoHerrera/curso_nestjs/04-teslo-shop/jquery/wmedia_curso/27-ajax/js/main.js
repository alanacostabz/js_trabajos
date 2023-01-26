// Esperar que el DOM este listo
$(document).ready(function () {
  // PETICION SIMPLE CON AJAX
  // $.ajax("social.html", {
  //   success: function (respuesta) {
  //     $(".lateral").append($(respuesta));
  //   },
  // })
  //
  //
  // METODO ATAJO: GET
  $.get("social.html", function (respuesta) {
    $(".lateral").append($(respuesta));
  });

  // CARGAR JSON DESDE EL SERVIDOR
  $.getJSON("https://randomuser.me/api/?results=500").then(function (
    respuesta
  ) {
    // console.log(respuesta);
    // Insertar cada avatar del usuario ficticio en el dom
    respuesta.results.forEach(function (persona) {
      // console.log(persona);
      $("<img>").attr("src", persona.picture.thumbnail).appendTo(".contenido");
    });
  });
});
