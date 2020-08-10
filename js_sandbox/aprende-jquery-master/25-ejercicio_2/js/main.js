$(document).ready(function () {
    // Mostramos el contenido del primer panel
    $('.panel__contenido').first().slideDown();

    // Event Listeners
    $('.panel__cabecera').on('click', function (e) {
        e.preventDefault();
        $('.panel__contenido').not(this).each(function () {
            $(this).slideUp();
        });
        $(this).siblings('.panel__contenido').slideToggle();
    });
});