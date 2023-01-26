// Esperar que el DOM esté listo
$(document).ready(() => {
  $.fn.cambiarColor = function (opciones) {
    // console.log(this);

    // TENER UN COLOR DE REEMPLAZO (fallback)
    const configuracion = $.extend(
      {
        color: "red",
      },
      opciones
    );

    // RECORREMOS CADA ELEMENTO SOBRE EL QUE SE LLAMA EL PLUGIN
    this.each((indice, elemento) => {
      let color = configuracion.color;
      $(elemento).css("color", color);
    });
  };

  $(".contenido").find("p").cambiarColor({
    color: "green",
  });
});
