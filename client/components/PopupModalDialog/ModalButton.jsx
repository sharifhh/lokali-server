import React from 'react';

const ModalButton = ({  text, onClick, bg="", color=""}) => {
    
    return <button style={{background:bg, color:color}} className="button" onClick={onClick}>{text}</button>
    }

export default ModalButton;