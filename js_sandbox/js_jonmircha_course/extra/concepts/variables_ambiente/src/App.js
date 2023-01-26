const App = () => {
  const conexion = () => {
    const API_KEY = "asd!@#213_";

    console.log(`API KEY: ${process.env.REACT_APP_API_KEY}`);
    console.log("Petición realizada");
  };

  return (
    <div>
      <h3>Variables de Ambiente</h3>
      <button onClick={() => conexion()}>Conectar</button>
    </div>
  );
};

export default App;
