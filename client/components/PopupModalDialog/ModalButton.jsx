import React from 'react';

const ModalButton = ({  children, onClick, bg="", color=""}) => {
    
    return <button style={{background:bg, color:color}} className="button" onClick={onClick}>{children}</button>
    }

export default ModalButton;