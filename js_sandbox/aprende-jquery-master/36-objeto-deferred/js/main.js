// Esperar que el DOM esté listo
$(document).ready(() => {
    function consultarApi() {
        const deferred = $.Deferred();
        setTimeout(function () {

            // Promesa satisfecha
            // var respuesta = [
            //     { titulo: 'Halo Infinite' },
            //     { titulo: 'Gears 5' },
            //     { titulo: 'Fable' },
            // ];

            // deferred.resolve(respuesta);

            // Promesa rechazada
            deferred.reject(Error('No pudo conectar'));
        }, 2000);

        return deferred.promise();
    }

    consultarApi()
        .then((respuesta) => {
            console.log(respuesta);
        })
        .fail((error) => console.error(error))
        .always(() => console.info('Request finalizado'));
});
