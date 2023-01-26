// Esperar que el DOM esté listo
$(document).ready(() => {

    // Tener un color de reemplazo (fallback)
    $.fn.cambiarColor = function (opciones) {
        const configuracion = $.extend({
            color: 'red'
        }, opciones);

        //  Recorremos cada elemento sobre el que se llama el plugin
        this.each((indice, elemento) => {
            let color = configuracion.color;
            $(elemento).css('color', color);
        });
    };

    $('.contenido').find('p').cambiarColor({ color: 'green' });
});
