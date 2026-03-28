import React, { useCallback } from "react";
import MaterialInputGroup from './MaterialInputGroup';
import MaterialButton from './MaterialButton';

const LoginFormCard = ({emoji, titulo, labelEmail, labelPassword, textoBoton, onClick}) => {
    
    // El useCallback SIEMPRE debe ir dentro de la función del componente.
    // Usamos "onClick" (que es la función del padre) para mandarle un mensaje.
    const callback = useCallback(function() {
        onClick("¡LoginFormCard!");
    }, [onClick]);

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

            {/* Contenedor para poner los dos botones uno al lado del otro */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                
                {/* Botón 1: El original que cambia el título a "Hizo Click" */}
                <MaterialButton 
                    texto={textoBoton} 
                    onClick={onClick} 
                />

                {/* Botón 2: El nuevo que envía un mensaje específico al padre */}
                <MaterialButton 
                    texto="Callback" 
                    onClick={callback} 
                />
            </div>
        </div>
    );
};

export default LoginFormCard;