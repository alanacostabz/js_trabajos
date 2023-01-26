import scrollTopButton from "./dom/boton-scroll.js";
import slider from "./dom/carrusel.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import searchFilters from "./dom/filtro_busquedas.js";
import getGeolocation from "./dom/geolocalizacion.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import scrollSpy from "./dom/scroll_espia.js";
import draw from "./dom/sorteo.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema-oscuro.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import smartVideo from "./dom/video_inteligente.js";
import speechReader from "./narrador.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("../assets/zelda.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Apr 25,2021 15:23:19", "Feliz cumpleaños Alan");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    "<a href='https://www.youtube.com/watch?v=HoLJyCzBsyY&list=RDHoLJyCzBsyY&index=1&ab_channel=WWESongUploader'>Ver Vídeo</a>",
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/HoLJyCzBsyY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    "<a href='https://goo.gl/maps/n9m4sjB2ZhkiWs4KA'>Ver Mapa</a>",
    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13941.910404225995!2d-110.98854997619631!3d29.12110027170239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2dff85522f25990!2sEscuela%20Secundaria%20General%20%236%20Luis%20Donaldo%20Colosio%20Murrieta!5e0!3m2!1ses-419!2smx!4v1601520368283!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
