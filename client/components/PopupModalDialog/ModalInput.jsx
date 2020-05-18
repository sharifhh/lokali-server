import React from 'react';

const ModalInput = ({label}) => {
    return ( 
        <div className="modalInput flex space-between align-center">
            {label ? <label htmlFor="">{label}</label> : null}
            <input type="text"/>
        </div>
     );
}
 
export default ModalInput;