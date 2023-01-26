// Esperar que el DOM esté listo
$(document).ready(function () {
    var $input = $('#claim'),
        $h1 = $('.contenido').children('h1');

    $input.keyup(function (e) {
        // https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
        // mousetrap
        var codigo = e.which;
        if (codigo === 13) {
            $h1.text($input.val());
        }
    });
});