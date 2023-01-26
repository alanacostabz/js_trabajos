// Esperar que el DOM este listo
$(document).ready(function () {
  var $enlaces = $("a");

  // GETTER
  console.log($(".lateral").css("font-size"));

  // GETTER MÚLTIPLE
  console.log($(".lateral").css(["font-size", "color", "margin"]));

  // SETTER
  $("p").css("color", "goldenrod");

  // SETTER MÚLTIPLE
  $enlaces.css({
    color: "pink",
    "font-size": "40px",
    margin: "100px",
  });
});
