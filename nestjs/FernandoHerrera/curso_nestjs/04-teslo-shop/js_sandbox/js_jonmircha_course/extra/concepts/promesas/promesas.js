/**
 *  Las PROMESAS en JS son una forma de tratar operaciones asíncronas
 *
 *  NOTAS
 *    - Una operación asíncrona es aquella que se ejecuta por aparte del proceso principal en JS
 * 
 *  Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa
 *  para completar algún tipo de rutina o acción.

Ejemplo:
 */

// EJEMPLO 1
// let x = 10;

// const p = new Promise((resolve, reject) => {
//   if (x == 10) {
//     resolve("La variable es igual a 10");
//   } else {
//     reject("La variable no es igual a 10");
//   }
// });

// p.then((res) => console.log("success: " + res)).catch((err) =>
//   console.log("error: " + err)
// );

/******************************************************************/

// EJEMPLO 2
// console.log("1. proceso iniciado...");

// setTimeout(() => {
//   x = x * 3 + 2;
//   console.log("2. proceso terminado...");
// }, 2000);

// console.log("3. el resultado es: " + x);

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     x = x * 3 + 2;
//     console.log("2. proceso terminado...");
//     resolve(x);
//   }, 2000);
// });
// console.log("1. proceso iniciado...");

// promesa.then((res) => {
//   console.log("3. rel resultado es: " + res);
// });

/******************************************************************/

// EJEMPLO 3
// let usuarios = [
//   {
//     id: 1,
//     nombre: "Alan",
//   },
//   {
//     id: 2,
//     nombre: "Rocío",
//   },
// ];

// let telefonos = [
//   {
//     id: 1,
//     telefono: 19950425,
//   },
//   {
//     id: 2,
//     telefono: 19711202,
//   },
// ];

// const obtenerUsuario = (id) => {
//   return new Promise((resolve, reject) => {
//     if (usuarios.find((usuario) => usuario.id === id)) {
//       console.log("El usuario existe!");
//       resolve(obtenerTelefono(id));
//     } else {
//       reject("El usuario no existe!");
//     }
//   });
// };

// const obtenerTelefono = (id) => {
//   return new Promise((resolve, reject) => {
//     if (telefonos.find((telefono) => telefono.id === id)) {
//       resolve("El telefono existe!");
//     } else {
//       reject("El telefono no existe!");
//     }
//   });
// };

// obtenerUsuario(1)
//   .then((res) => {
//     return res;
//   })
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// obtenerTelefono(2)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

/******************************************************************/

// DIFERENCIAS ENTRE UNA PROMESA Y UN CALLBACK

// EJEMPLO 1
let usuarios = [
  {
    id: 1,
    nombre: "Alan",
  },
  {
    id: 2,
    nombre: "Rocío",
  },
];

let edades = [
  { id: 1, edad: 26 },
  { id: 2, edad: 50 },
];

let telefonos = [
  {
    id: 1,
    telefono: 19950425,
  },
  {
    id: 2,
    telefono: 19711202,
  },
];

const obtenerUsuario = (id) => {
  return new Promise((resolve, reject) => {
    if (usuarios.find((usuario) => usuario.id === id)) {
      console.log("El usuario existe!");
      resolve(obtenerTelefono(id));
    } else {
      reject("El usuario no existe!");
    }
  });
};

const obtenerUsuarioCb = (id, callback, error) => {
  if (usuarios.find((usuario) => usuario.id === id)) {
    console.log("El usuario existe!");
    // claback
    callback(id);
  } else {
    // error
    error("El usuario no existe");
  }
};

const obtenerTelefono = (id) => {
  return new Promise((resolve, reject) => {
    if (telefonos.find((telefono) => telefono.id === id)) {
      console.log("El telefono existe!");
      resolve(obtenerEdad(id));
    } else {
      reject("El telefono no existe!");
    }
  });
};

const obtenerTelefonoCb = (id, callback, error) => {
  if (telefonos.find((telefono) => telefono.id === id)) {
    console.log("El telefono existe!");
    // callback
    callback(id);
  } else {
    // error
    error("El teléfono no existe");
  }
};

const obtenerEdad = (id) => {
  return new Promise((resolve, reject) => {
    const edad = edades.find((edad) => edad.id === id);
    if (edad) {
      resolve("El usuario tiene " + edad.edad + " años");
    } else {
      reject("No se encontró la edad!");
    }
  });
};

const obtenerEdadCb = (id, callback, error) => {
  const edad = edades.find((edad) => edad.id === id);
  if (edad) {
    // callback
    callback("El usuario tiene " + edad.edad + " años");
  } else {
    // error
    error("No se encontró la edad");
  }
};

// obtenerUsuario(2)
//   .then((resUsuario) => {
//     return resUsuario;
//   })
//   .then((resTel) => {
//     return resTel;
//   })
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

obtenerUsuario(
  2,
  (id) => {
    // siguiente función
    obtenerTelefono(
      id,
      (resTelefono) => {
        // seguir mi código
        obtenerEdad(
          resTelefono,
          (resEdad) => {
            console.log(resEdad);
          },
          (errorEdad) => {
            console.log(errorEdad);
          }
        );
      },
      (errorTelefono) => {
        console.error(errorTelefono);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
