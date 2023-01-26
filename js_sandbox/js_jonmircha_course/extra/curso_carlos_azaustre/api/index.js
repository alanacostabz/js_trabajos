/**
 *  Formas de hacer una petición AJAX y/0 consumir una API desde JS de forma nativa
 */

const API_URL = "https://jsonplaceholder.typicode.com";

const htmlResponse = document.querySelector("#app");
const ul = document.createElement("ul");

fetch(`${API_URL}/users`)
  .then((response) => response.json())
  .then((users) => {
    // const tp1 = users.map((user) => `<li>${user.name} @ ${user.email}</li>`);
    // htmlResponse.innerHTML = `<ul>${tp1}</ul>`;
    users.forEach((user) => {
      let elem = document.createElement("li");
      elem.appendChild(document.createTextNode(`${user.name} @ ${user.email}`));
      ul.appendChild(elem);
    });
  });

htmlResponse.appendChild(ul);

// XMLHTTPREQUEST

// const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//   if (this.readyState === 4 && this.status === 200) {
//     // 0 = UNSET, no se ha llamado el método open
//     // 1 = OPENED, se ha llamado al método open
//     // 2 = HEADERS_RECEIVED, es decir, está recibiendo la respuesta
//     // 3 = LOADING, está cargando, es decir, está recibiendo la respuesta
//     // 4 = DONE, se ha completado la operación
//     const data = JSON.parse(this.response);
//     const htmlResponse = document.querySelector("#app");

//     const tp1 = data.map((user) => `<li>${user.name} @ ${user.email}</li>`);
//     htmlResponse.innerHTML = `<ul>${tp1}</ul>`;
//   }
// }

// xhr.addEventListener("load", onRequestHandler);
// xhr.open("GET", `${API_URL}/users`);
// xhr.send();
