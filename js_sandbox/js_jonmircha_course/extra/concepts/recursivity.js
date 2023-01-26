// RECURSIVIDAD: se basa en una función que se llama así misma una y otra vez hasta que se cumple una condición de salida
// se pueden iterar elementos de un arreglo sin necesidad de utilizar loops for o while
// es una herramienta bastante útil que nos permite obviar todos esos loops que nos pueden inducir a hacer código confuso o enrededado
// el problema de la recursividad es que no está optimizada por lo que arrojará un error

const conteoRegresivo = (a) => {
  if (a < 0) return;
  console.log(a);
  return conteoRegresivo(a - 1);
};

// conteoRegresivo(10);

// importamos axios
const axios = require("axios");

const llamarApi = async (url, llamados = 0) => {
  try {
    const data = await axios.get(url);

    console.log(data);
    return data;
  } catch (e) {
    if (llamados > 5) {
      return "";
    }

    console.log(e);
    return llamarApi(url, llamados + 1);
  }
};

llamarApi("https://jsonplaceholder.typicode.com/users");
