// Esperar que el DOM este listo
$(document).ready(function () {
  var $main = $("main");

  $main.addClass("animate__animated animate__bounceIn");

  var timeout = setTimeout(() => {
    $main.addClass("animate__animated animate__bounceOut");
    clearTimeout();
  }, 3000);
});
