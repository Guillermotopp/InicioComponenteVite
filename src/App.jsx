import { useState } from 'react'
import LoginFormCard from './Components/LoginFormCard'
import './App.css'

function App() {
  // 1. Usamos el emoji real sonriendo (Unicode)
  const miEmoji = "😊"; 
  const tituloPagina = "Inicio de Sesión";
  
  // 2. Corregimos las variables para que sean etiquetas lógicas
  const labelEmail = "Email";
  const labelPassword = "Password";
  
  // 3. Texto del botón real
  const textoDelBoton = "Iniciar Sesión";

  return (   
    <>
      <LoginFormCard 
        emoji={miEmoji} 
        titulo={tituloPagina}
        labelEmail={labelEmail}
        labelPassword={labelPassword}
        textoBoton={textoDelBoton}
      />
    </>
  );
}

export default App;