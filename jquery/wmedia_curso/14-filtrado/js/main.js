// Esperar que el DOM este listo
$(document).ready(function () {
  // SELECTOR
  var $enlaces = $(".lateral").find("a").filter(":even");
  // console.log($enlaces);
  // $enlaces.css("transform", "scale(2)");

  // FUNCION - TEST
  var $enlaceSnapchat = $(".lateral")
    .find("a")
    .filter(function (indice, elemento) {
      // console.log(indice, elemento);
      // console.log(elemento === this); // ES THIS
      return $(elemento).find("span").text() === "Snapchat";
    });

  console.log($enlaceSnapchat.css("transform", "rotate(45deg)"));
});
