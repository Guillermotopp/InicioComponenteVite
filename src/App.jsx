import { useState } from 'react'
import LoginFormCard from './Components/LoginFormCard'
import './App.css'

function App() {
  const miEmoji = "😊"; 
  const tituloPagina = "Inicio de Sesión";
  const labelEmail = "Email";
  const labelPassword = "Password";
  const textoDelBoton = "Iniciar Sesión";

  // El estado donde guardamos el mensaje que se muestra en el título
  const [mensaje, setMensaje] = useState("Inicio");

  // Esta función ahora acepta un parámetro (valorRecibido)
  const manejarClick = (valorRecibido) => {
      // Verificamos si lo que recibimos es un texto (String)
      if (typeof valorRecibido === "string") {
        setMensaje(valorRecibido);
      } else {
        // Si el click no trae texto, ponemos el mensaje estándar
        setMensaje(" Hizo Click ");
      }
  }

  return (   
    <>
      <LoginFormCard 
        emoji={miEmoji} 
        titulo={mensaje}
        labelEmail={labelEmail}
        labelPassword={labelPassword}
        textoBoton={textoDelBoton}
        onClick={manejarClick}
      />
    </>
  );
}

export default App;