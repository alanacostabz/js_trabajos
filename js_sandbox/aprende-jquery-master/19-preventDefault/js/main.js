// Esperar que el DOM esté listo
$(document).ready(function () {
  // Con formularios (recargar la página)
  $('form').on('submit', function (e) {
    e.preventDefault();
    console.log('submit');
  });

  // Con hiperenlaces
  $('a').click(function (e) {
    e.preventDefault();
    console.log('click');
  });
});