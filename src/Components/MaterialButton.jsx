import React from "react";

const MaterialButton = ({texto, onClick}) => {
    
    return (
        <button className="material-button" onClick={onClick}> 
            {texto} 
        </button>
    );
};

export default MaterialButton;