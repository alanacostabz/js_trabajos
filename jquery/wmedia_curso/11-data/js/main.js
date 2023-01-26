// Esperar que el DOM este listo
$(document).ready(function () {
  // var $enlace = $(".lateral").find("a").last();
  // $enlace.data("rrss", "Nuevo valor"); // setter
  // var valorData = $enlace.data("rrss"); // getter
  // console.log(valorData);
  //
  // filtrar selección
  var $datos = $("*").filter(function () {
    var datos = $(this).data("rrss");
    // return $(this).data("rrss");
    return datos == "snapchat";
  });

  console.log($datos);
});
