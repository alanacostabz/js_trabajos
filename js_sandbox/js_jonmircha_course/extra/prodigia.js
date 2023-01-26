/*
 Dado un String arbitrario que puede contener caracteres alfanuméricos y el “espacio”, escribe un programa que determine la longitud de la última palabra. Las palabras son un grupo de caracteres separados por espacios. Ejm
    - String: “La hora exacta es inexacta”, Resultado: 8
    - String “”, Resultado: 0
 */
const lastWordSize = (str) => {
  if (typeof str !== "string") return "Cadena no válida";

  let ultima = str.split(" ");
  let resultado = ultima[ultima.length - 1].length;
  return `Resultado: ${resultado}`;
};

// console.log(lastWordSize("La hora exacta es inexacta"));
// console.log(lastWordSize(""));

/*
  Implementar un método que tome como argumento un mazo de cartas, el cual estará incompleto porque le faltará una carta. El método debe determinar cuál es la carta que hace falta.

  La baraja inglesa es muy similar a la baraja de póker, tanto en apariencia como en cantidad. Esta baraja cuenta con los 4 palos de la baraja de póker: Diamantes, Picas, Tréboles y Corazones, pero a diferencia de la anterior, la baraja inglesa está compuesta por 52 cartas.

  Esto se debe a que cada uno de los palos está formado por 13 cartas, en lugar de 12. Entre ellas encontramos 9 cartas con números: 2, 3, 4, 5, 6, 7, 8, 9, 10 y 4 cartas con letras: A, J, Q y K.
*/

let cartas = [
  { palo: "diamante", valor: "2" },
  { palo: "diamante", valor: "3" },
  { palo: "diamante", valor: "4" },
  { palo: "diamante", valor: "5" },
  { palo: "diamante", valor: "6" },
  { palo: "diamante", valor: "7" },
  { palo: "diamante", valor: "8" },
  { palo: "diamante", valor: "9" },
  { palo: "diamante", valor: "10" },
  { palo: "diamante", valor: "a" },
  { palo: "diamante", valor: "j" },
  { palo: "diamante", valor: "q" },
  { palo: "diamante", valor: "k" },
  { palo: "pica", valor: "2" },
  { palo: "pica", valor: "3" },
  { palo: "pica", valor: "4" },
  { palo: "pica", valor: "5" },
  { palo: "pica", valor: "6" },
  { palo: "pica", valor: "7" },
  { palo: "pica", valor: "8" },
  { palo: "pica", valor: "9" },
  { palo: "pica", valor: "10" },
  { palo: "pica", valor: "a" },
  { palo: "pica", valor: "j" },
  { palo: "pica", valor: "q" },
  { palo: "pica", valor: "k" },
  { palo: "trebol", valor: "2" },
  { palo: "trebol", valor: "3" },
  { palo: "trebol", valor: "4" },
  { palo: "trebol", valor: "5" },
  { palo: "trebol", valor: "6" },
  { palo: "trebol", valor: "7" },
  { palo: "trebol", valor: "8" },
  { palo: "trebol", valor: "9" },
  { palo: "trebol", valor: "10" },
  { palo: "trebol", valor: "a" },
  { palo: "trebol", valor: "j" },
  { palo: "trebol", valor: "q" },
  { palo: "trebol", valor: "k" },
  { palo: "corazon", valor: "2" },
  { palo: "corazon", valor: "3" },
  { palo: "corazon", valor: "4" },
  { palo: "corazon", valor: "5" },
  { palo: "corazon", valor: "6" },
  { palo: "corazon", valor: "7" },
  { palo: "corazon", valor: "8" },
  { palo: "corazon", valor: "9" },
  { palo: "corazon", valor: "10" },
  { palo: "corazon", valor: "a" },
  { palo: "corazon", valor: "j" },
  { palo: "corazon", valor: "q" },
  { palo: "corazon", valor: "k" },
];
let cartasPrueba = [
  {
    palo: "diamante",
    valor: "a",
  },
  {
    palo: "pica",
    valor: "a",
  },
  {
    palo: "trebol",
    valor: "a",
  },
  {
    palo: "corazon",
    valor: "a",
  },
  {
    palo: "corazon",
    valor: "10",
  },
  {
    palo: "corazon",
    valor: "9",
  },
  {
    palo: "corazon",
    valor: "j",
  },
];

const mazo = (mazo) => {
  let faltantes = [];
  cartas.forEach((carta) => {
    let busqueda = mazo.some(
      (item) => carta.palo === item.palo && carta.valor === item.valor
    );

    if (!busqueda) {
      faltantes.push(carta);
    }
  });

  return faltantes;
};

console.log(mazo(cartasPrueba));
