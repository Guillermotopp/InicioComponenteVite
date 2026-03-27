import React from "react";

const MaterialButton = ({texto}) => {
    const manejarClick = () => {
        alert(" Click !!! ")
    }
    return (
        <button className="material-button" onClick={manejarClick}> 
            {texto} 
        </button>
    );
};

export default MaterialButton;