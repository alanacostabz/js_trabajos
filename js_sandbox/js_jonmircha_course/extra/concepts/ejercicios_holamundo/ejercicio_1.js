/**
 * COMO PODER MULTIPLICAR 2 NÚMEROS SIN USAR EL SIGNO DE MULTIPLICACIÓN
 */
const multiply = (a, b) => {
  let resultado = 0;
  const positivo = Math.abs(b) === b;
  for (let i = 0; i < Math.abs(b); i++) {
    resultado = positivo ? resultado + a : resultado - a;
  }

  return resultado;
};

console.log(multiply(-5, 5));
