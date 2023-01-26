// Esperar que el DOM esté listo
$(document).ready(function () {
    // Event listener directo
    // $('a').on('click', function (e) {
    //     e.preventDefault();

    // });

    // Event listener delegado
    $('main').on('click', 'a', function (e) {
        e.preventDefault();

    });

    var $enlace = $('<a href="http://www.wmedia.es" target="_blank">wmedia.es</a>');
    $('p').last().css('color', 'goldenrod').data('color', 'amarillo').append($enlace);
});