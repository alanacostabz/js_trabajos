// Esperar que el DOM esté listo
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('I\'m ready...');
// });

$(document).ready(function () {
    // Descendientes directos
    $('aside > img').fadeOut(5000);

    // Busqueda de elementos
    $('a span').css('color', 'red');

    // Selectores multiples
    //$('a, span, p').slideToggle();

    // Pseudo clases
    $('p:odd').css({
        'font-weight': 'bold',
        'color': 'goldenrod'
    });

});

// $(document).on('DOMContentLoaded', function () {
//     console.log('And me too..');
// });