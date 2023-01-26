$(document).ready(function () {
  // mostramos el contenido del primer panel
  $(".panel__contenido").first().slideDown();

  // event listeners
  $(".panel__cabecera").on("click", function (e) {
    e.preventDefault();
    $(".panel__contenido")
      .not(this)
      .each(function () {
        $(this).slideUp();
      });
    $(this).siblings(".panel__contenido").slideToggle();
  });
});
