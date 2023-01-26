// Esperar que el DOM este listo
$(document).ready(function () {
  $(".lateral").animate(
    {
      "flex-basis": "20%",
      padding: "10px",
    },
    3000,
    function () {
      console.log("Animacion finalizada");
      $("main").animate(
        {
          width: "1100px",
        },
        4000
      );
    }
  );
});
