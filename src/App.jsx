import { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import './App.css'
 
function App() {
  const [nombre, setNombre] = useState("");
  const [cancion, setCancion] = useState("");
  
  function handleInfo(nombre,cancion){
    setNombre(nombre)
    setCancion(cancion)
  }
    return (
      <div className="App">
        <h1 className="Titulo">Música</h1>
        <Form onInfo = {handleInfo} />
        <Card nombre = {nombre} cancion={cancion} />
      </div>
    );
}

export default App;