const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true, // le decimos al dispositivo que haga la mejor lectura posible
      timeout: 5000, // cuanto tiempo va a estar esperando la respuesta para tomar la lectura
      maximumAge: 0, // para limpiar el caché de las lecturas
    };

  const success = (position) => {
    let coords = position.coords;

    $id.innerHTML = `
      <p>Tu posición actual es:</p>
      <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Presición: <b>${coords.accuracy}</b> metros</li>
        <li></li>
      </ul>
      <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
    // console.log(position);
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;
    // console.log(`Error ${err.code}: ${err.message}`);
  };

  n.geolocation.getCurrentPosition(success, error, options);
}

// watchPosition() nos permite detectar si hay cambios en la posición actual, se activa siempre que detecta alguno
// https://developer.mozilla.org/es/docs/Web/API/Geolocation_API
