import React from "react";

// Recibe la etiqueta, el tipo (email/password) y el placeholder
const MaterialInputGroup = ({ label, type = "text", placeholder }) => {
    return (
        <div className="input-group">
            {/* Label a la izquierda */}
            <label className="material-label">{label}</label>
            
            {/* Input real a la derecha (este es el componente nuevo de escritura) */}
            <input 
                type={type} 
                className="material-input" 
                placeholder={placeholder}
            />
        </div>
    );
};

export default MaterialInputGroup;