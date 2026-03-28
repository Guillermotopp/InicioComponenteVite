import React from "react";
import MaterialInputGroup from './MaterialInputGroup';
import MaterialButton from './MaterialButton';

// 1. Agrega onClick aquí arriba para que el componente lo reciba
const LoginFormCard = ({emoji, titulo, labelEmail, labelPassword, textoBoton, onClick}) => {
    return (
        <div className='login-card'>
            
            <div className="login-header">
                <span className="login-emoji">{emoji}</span>
                <h1 className="login-title">{titulo}</h1>
            </div>

            <MaterialInputGroup 
                label={labelEmail} 
                type="email" 
                placeholder="ejemplo@correo.com" 
            />

            <MaterialInputGroup 
                label={labelPassword} 
                type="password" 
                placeholder="••••••••"
            />

            {/* 2. Pásale el onClick al MaterialButton */}
            <MaterialButton 
                texto={textoBoton} 
                onClick={onClick} 
            />
            
        </div>
    );
};

export default LoginFormCard;