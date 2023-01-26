// Esperar que el DOM esté listo
$(document).ready(function () {

    var $input = $('#claim'),
        $h1 = $('.contenido').children('h1');

    // $input.on('keyup', function (e) {
    //     $h1.text($input.val());
    // });

    $input.keyup(function (e) {
        $h1.text($input.val());
    });

});