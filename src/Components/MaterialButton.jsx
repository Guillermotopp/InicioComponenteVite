import React from "react";

const MaterialButton = ({texto, onClick}) => {
    const miValor="Texto Enviado desde el componente botón";
    return (
        <button className="material-button" onClick={()=>{onClick(miValor)}}> {texto} 
        </button>
    );
};

export default MaterialButton;