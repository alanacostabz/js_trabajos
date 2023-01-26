// Esperar que el DOM esté listo
$(document).ready(function () {
  // $('section.contenido p:first-of-type')
  $('.contenido').find('p').first().css('background-color', 'red');
  $('.contenido').find('p').eq(2).css('background-color', 'blue');
});