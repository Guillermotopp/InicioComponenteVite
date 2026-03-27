import React from "react";
import MaterialInputGroup from './MaterialInputGroup';
import MaterialButton from './MaterialButton';

const LoginFormCard = ({emoji, titulo, labelEmail, labelPassword, textoBoton}) => {
    return (
        // Aplicamos la clase que definimos en CSS para la tarjeta
        <div className='login-card'>
            
            <div className="login-header">
                <span className="login-emoji">{emoji}</span>
                <h1 className="login-title">{titulo}</h1>
            </div>

            {/* Agregamos el campo para Email */}
            <MaterialInputGroup 
                label={labelEmail} 
                type="email" 
                placeholder="ejemplo@correo.com" 
            />

            {/* Agregamos el campo para Password (con type="password" para ocultar texto) */}
            <MaterialInputGroup 
                label={labelPassword} 
                type="password" 
                placeholder="••••••••"
            />

            {/* El botón al final */}
            <MaterialButton texto={textoBoton} />
            
        </div>
    );
};

export default LoginFormCard;