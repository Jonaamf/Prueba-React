import { useState } from "react";

function Form(props) {
  const [nombre, setNombre] = useState("");
  const [cancion, setCancion] = useState("");
  const [nombreError, setNombreError] = useState("");
  const [cancionError, setCancionError] = useState("");

  const handleNombre = (e) => {
    const value = e.target.value;
    setNombre(value);

    if (value.length >= 3 && !value.startsWith(" ")) {
      setNombreError("");
    } else {
      setNombreError("Por favor chequea que la información sea correcta");
    }
  };

  const handleCancion = (e) => {
    const value = e.target.value;
    setCancion(value);

    if (value.length >= 3 && !value.startsWith(" ")) {
      setCancionError("");
    } else {
      setCancionError("Por favor chequea que la información sea correcta");
    }
  };

  function registrar(e) {
    e.preventDefault();
    props.onInfo(nombre,cancion)
  }

  return (
    <div>
      <h2>Elige tu canción favorita</h2>
      <form onSubmit={registrar}>
        <div>
          <label className="form-label-nombre">Nombre: </label>
          <input type="text" placeholder="Ingrese su nombre"onChange={handleNombre}value={nombre}/>
          <div className="alert">{nombreError}</div>
        </div>
        <div>
          <label className="form-label-cancion">Canción: </label>
          <input
            type="text" placeholder="Ingrese canción favorita" onChange={handleCancion} value={cancion}/>
          <div className="alert">{cancionError}</div>
        </div>
        <input className="Boton" type="submit" value="Confirmar" />
        </form>
    </div>
  );
}

export default Form;