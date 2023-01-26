/**
 * ITERANDO EL ARREGLO SOLO UNA VEZ, ESCRIBIR UNA FUNCIÓN QUE ELIMINE LOS UNDEIFNED, CEROS Y NULL
 */
const clean = (arr) =>
  arr.reduce((acc, el) => {
    if (el) {
      acc.push(el);
    }

    return acc;
  }, []);

const c = clean([1, undefined, null, 0, 2, 3]);
console.log(c);
