const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    //console.log("entries", entries);

    entries.forEach((entry) => {
      //console.log("entry", entry);
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    //root: hace referencia al elemento base de cual basarme para estar midiendo el scroll, por default es el documento
    //rootMargin: "-250px", aleja o acerca los margenes del observador, reduce o aumenta el area de interacción
    threshold: [0.5, 0.75], // podemos especificar el límite de 0 a 1, ahi le indicamos que activemos el observador cuando el elemento observado esté entre su 50% del contenido y su 75%
  });
  //console.log("observer", observer);

  $sections.forEach((el) => observer.observe(el));
}
