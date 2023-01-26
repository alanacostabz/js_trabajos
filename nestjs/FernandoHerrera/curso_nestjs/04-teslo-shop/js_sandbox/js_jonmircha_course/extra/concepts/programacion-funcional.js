// PROGRAMACIÓN FUNCIONAL

//   - Es un paradigma de la progrmación, es decir la forma en la cual podemos resolver diferentes problematicas
//   - Cuando nos encontramos desarrollando software con este paradigma estaremos trabajando principalmente con funciones, evitaremos los datos mutables, así como el hecho de compartir estados entre funciones
//   - Con este paradigma las funciones serán tratadas como ciudadanos de primera clase
//   - Las funciones podrán ser asignadas a funciones y ademas podrán ser utilizadas como entradas y salidas de otras funciones
//   - Es un paradigma declarativo nos enfocaremos en que estamos haciendo y no como lo estamos haciendo (enfoque imperativo), es decir nosotros expresameros nuestra lógica sin describir flujos, no usaremos ciclos ni funciones

const numeros = [18, 6, 4, 15, 55, 78, 12, 9, 8];

// Imperativa
let contador = 0;
numeros.forEach((numero) => {
  if (numero > 10) {
    contador++;
  }
});
console.log(contador);

// Declarativo
const resultado = numeros.filter((n) => n > 0).length;
console.log(resultado);

// es funcional ya que se delega el control de flujos a funciones
// al trabajar con programación funcional nos toparemos con conceptos tales como: funciones puras, composicion de funciones, estados compartidos, mutabilidad y efecto secundarios
// permite desarrollar software mucho mas legible y funcional, nos enfocaremos en que estamos haciendo y no como estamos haciendo

// FUNCIONES PURAS: no son mas que funciones, las cuales dando el mismo input, siempre retornan el mismo output además de no tener efectos secundarios.
// resultado = factorial(5);
// resultado = 125;

// COMPOSICIÓN DE FUNCIONES: es el proceso de combinar dos o más funciones, teniendo como finalidad ejecutar cada una de estas funciones en secuencia para obtener un resultado en concreto
// f(x)
// g(x)
// f(g(x))

// ESTADO COMPARTIDO: es cualquier variable, objeto o espacio de memoria que exista en un ámbito compartido. este puede incluir un ámbito globlal o un ambito de cirrer
// Materia materia = new Materia();
// Usuario usuario = new Usuario();
// usuario.materia = materia;

// OBJETO INMUTABLE: es aquel que no puede ser modificado una vez que haya sido creado. (como por ejemplo las constantes)

// EFECTO SECUNDARIO: es cualquier cambio de estado en la aplicación que sea observable fuera de la función llamada, esto se evita en la programación funcional, para tener programas más faciles de comprender y de probar
/**
 *  int variable global = 0;
 *
 *  public static int funcion(int x) {
 *    variable_global = 10; // cambio de valor
 *    return x + 10;
 *  }
 */
