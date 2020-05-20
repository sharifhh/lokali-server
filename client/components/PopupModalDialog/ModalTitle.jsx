import React from 'react';

const ModalTitle = ({title, size, color}) => {
    return (  
        <div className={`title`}>
            <span style={{fontSize:size, color:color}} >{title}</span>
        </div>
    );
}
 
export default ModalTitle;