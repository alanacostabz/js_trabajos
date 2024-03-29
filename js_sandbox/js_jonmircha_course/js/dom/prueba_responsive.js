const d = document;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();

      tester = window.open(
        $form.direccion.value,
        "tester",
        `innetWidth=${$form.ancho.value}, innetHeight=${$form.alto.value}`
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) {
      tester.close();
    }
  });
}
