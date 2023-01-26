async function showData() {
  try {
    const json = await getData();

    console.log("Nombre del canal: " + json.nombre);
    console.log("Tipo de canal: " + json.category);
  } catch (error) {
    console.error(error);
  }
}

function getData() {
  return fetch("http://localhost:3000/api")
    .then((response) => response.json())
    .then((json) => json);
}

showData();
