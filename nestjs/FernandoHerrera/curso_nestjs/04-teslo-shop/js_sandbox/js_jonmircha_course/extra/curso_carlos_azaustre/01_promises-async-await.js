const datos = [
  {
    id: 1,
    title: "ZELDA BREATH OF THE WILD",
    year: 2007,
  },
  {
    id: 2,
    title: "RESIDENT EVIL VILLAGE",
    year: 2021,
  },
  {
    id: 1,
    title: "MARIO KART 8",
    year: 2014,
  },
];

// const getDatos = () => {
//   return datos;
// };

const getDatos = () => {
  return new Promise((resolve, reject) => {
    if (datos.length === 0) {
      reject(new Error("No existen datos"));
    }

    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};

/**
 * PROMISES: son un objeto especial de javascript que nos permite ejecutar un trozo de código y cuando esté listo se devuelve, siempre
 * devuelve algo ya sea la respuesta esperada o un error que haya ocurrido
 */

// getDatos()
//   .then((datos) => console.log(datos))
//   .catch((err) => console.log(err));

/**
 * ASYNC/AWAIT: es una manera de escribir promesas, pero en lugar de .then() sería una forma más síncrona a la hora de escribirlo (más
 * secuencial) pero por debajo sigue siendo asíncrono (sigue habiendo promesas).
 */

async function fetchingData() {
  try {
    const datosFetched = await getDatos();
    console.log(datosFetched);
  } catch (error) {
    console.log(error);
  }
}

fetchingData();
