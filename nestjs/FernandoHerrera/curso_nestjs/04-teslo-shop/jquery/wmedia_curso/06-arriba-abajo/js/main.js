// Esperar que el DOM este listo
$(document).ready(function () {
  // parent - parents
  // var $parent = $(".lateral").find("span").last();
  // $parent.css("border", "1px solid red");
  //
  // children - find
  var $children = $("main").find("*");
  $children.css({
    tansition: "all 2s",
    transform: "rotate(180deg)",
  });
});
