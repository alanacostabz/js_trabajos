// Esperar que el DOM esté listo
$(document).ready(() => {
    // Cargamos el snippet de navegación lateral
    $.get('social.html')
        .done((respuesta) => {
            $('.lateral').append($(respuesta));
        });

    // Adoptar
    $('.adoptar').children('input').on('click', function (e) {
        e.preventDefault();

        // Obteniendo los datos de los candidatos a adopción
        $.getJSON('adopcion.php')
            .then(mostrarCandidatos)
            .fail(error => console.error(Error(error)))
            .always(() => console.info('Request Finalizado'))

        // Componer las fichas de los candidatos
        // e insertarlos en DOM
        function mostrarCandidatos(candidatos) {
            $.each(candidatos, function (indice, candidato) {
                $(`<div>
            <h4>${candidato.nombre} <i>${candidato.edad}</i></h4>
            <h5>${candidato.info}</h5>
            </div>`)
                    .css('background-image', `url(${candidato.imagen})`)
                    .appendTo($('.candidatos'));
            });
        }

    });



});
