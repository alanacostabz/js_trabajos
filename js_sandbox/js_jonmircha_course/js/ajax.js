/**
 * XMLHttpRequest
 */
(() => {
  // 1. se instancia el objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  // 2. asignarle el o los eventos que vamos a estar manipulando de la petición
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    // console.log($xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      // console.log("éxito");
      // console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText);
      // console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      // console.log("error");
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

    // console.log("Este mensaje cargará de cualquier forma");
  });

  // 3. abrir la petición, establecer el método en el que lo vamos hacer y el recurso o la url (endpooint) que vamos a acceder
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); // externa
  // xhr.open("GET", "../assets/users.json"); local

  // 4. enviar la petición con el método send
  xhr.send();
})();

/**
 * API FETCH
 */
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => {
    //   console.log(res);
    //   return res.ok ? res.json() : Promise.reject(res);
    // })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // console.log(json);
      // $fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      // console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() =>
      console.log(
        "Esto se ejecutará independientemente del resultado de la promesa fetch"
      )
    );
})();

/**
 * API FETCH + ASYNC-AWAIT
 */
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      // console.log(res, json);

      // if (!res.ok) throw new Error("Ocurrió un error al solicitar los datos"); -  solo recibe mensajes no puede recibie objetos
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.log("Esto se ejecuta independientemente del trycatch...");
    }
  }

  getData();
})();

/**
 * AXIOS
 */
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.log(res);
      let json = res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      // console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() =>
      console.log("Esto se ejecuta independientemente del resultado de axios")
    );
})();

/**
 * AXIOS + ASYNC-AWAIT
 */
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      console.log(res, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      // console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      // console.log("Esto se ejecutará independientemente del try...catch");
    }
  }

  getData();
})();

/**
 * XMLHttpRequest: es el objeto con el que nació ajax
 * fetch: es un API más moderna y más amigable
 * fetch con funciones asíncronas: para mejorar la legibilidad del código
 * axios: es una API que trabaja basadas en promesas
 * axios con promesas y funciones asíncronas: para mejorar la legibilidad del código
 */
