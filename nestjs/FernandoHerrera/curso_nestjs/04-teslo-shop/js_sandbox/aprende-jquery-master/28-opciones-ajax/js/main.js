// Esperar que el DOM esté listo
$(document).ready(function () {
    // Petición esensial con Ajax
    // $.ajax('social.html', {
    //     success: function (respuesta, status, request) {
    //         console.log(arguments);
    //         $('.lateral').append($(respuesta));
    //     },
    //     error: function (request, tipoError, mensaje) {
    //         console.log(arguments);
    //     },
    //     complete: function (request, status) {
    //         console.info(arguments);
    //     }, beforeSend: function () {
    //         // Mostrar loading spinner
    //     },
    //     timeout: 1000
    // });

    // jQuery 3.0> = Promise API
    $.ajax('social.html')
        // success()
        .done(function (respuesta) {
            $('.lateral').append($(respuesta));
        })
        // error()
        .fail(function (request, tipoError, mensaje) {
            console.log(arguments);
        })
        // complete
        .always(function (request, status) {
            console.log(arguments);
        })

});
