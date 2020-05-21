import React from 'react';

const ModalInput = ({label, handleChange}) => {
    return ( 
        <div className="modalInput flex space-between align-center p-2">
            {label ? <label htmlFor="">{label}</label> : null}
            <input onChange={e=> handleChange(key, e.target.value)} type="text"/>
        </div>
     );
}
 
export default ModalInput;