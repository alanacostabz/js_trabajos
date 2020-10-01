const d = document;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      // console.log(e.target, $form);
      // alert("formulario enviado");
      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
      );
    }
  });

  d.addEventListener("click", (e) => {
    console.log("aggh");
    if (e.target === $form.cerrar) {
      tester.close();
    }
  });
}
