// Esperar que el DOM esté listo
$(document).ready(function () {
    var $main = $('main');

    $main.addClass('animated bounceIn');

    var timeout = setTimeout(() => {
        $main.addClass('bounceOut')
        clearInterval(timeout);
    }, 3000);
});