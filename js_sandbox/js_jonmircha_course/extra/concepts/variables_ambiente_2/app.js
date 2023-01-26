require("dotenv").config();

const conexion = () => {
  const servidor = process.env.SERVIDOR;
  const usuario = process.env.USUARIO;
  const password = process.env.PASSWORD;

  console.log(
    `Conexion establecida en el servidor ${servidor} con el usuario ${usuario} y la conteseña ${password}`
  );
};

conexion();
