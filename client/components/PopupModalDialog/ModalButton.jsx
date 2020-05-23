import React from 'react';

const ModalButton = ({text, onClick, bg="", color="white",size="lg"}) => {
    
    return <button 
    style={{background:bg, color:color}} 
    className={`button ${size}-btn`}
    onClick={onClick}>
        {text}</button>
    }

export default ModalButton;