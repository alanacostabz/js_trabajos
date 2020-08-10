// Esperar que el DOM esté listo
$(document).ready(() => {
    // Cargamos el snippet de navegación lateral
    $.get('social.html')
        .done((respuesta) => {
            $('.lateral').append($(respuesta));
        });

    const $candidatos = $('.adoptar').children('input');

    // Adoptar
    $candidatos
        .on('candidatos', function (e) {
            e.preventDefault();

            // Obteniendo los datos de los candidatos a adopción
            $.getJSON('adopcion.php')
                .then(mostrarCandidatos)
                .fail(error => console.error(Error(error)))
                .always(() => console.info('Request Finalizado'))
            // Componer las fichas de los candidatos
            // e insertarlos en DOM
            function mostrarCandidatos(candidatos) {
                // Eliminar event listener para evento click
                // $('.adoptar').children('input').off('click.candidatos');

                $.each(candidatos, function (indice, candidato) {
                    $(`<div>
            <h4>${candidato.nombre} <i>${candidato.edad}</i></h4>
            <h5>${candidato.info}</h5>
            </div>`)
                        .css('background-image', `url(${candidato.imagen})`)
                        .appendTo($('.candidatos'));
                });
            }


        })
        .on('click.mensaje', function (e) {
            alert('Muchas gracias por el interes de ayudar a los gatos negros :)');
            $candidatos.off('click.mensaje');
            $candidatos.trigger('candidatos');
            $candidatos.off('candidatos');
        })




});
