import React from 'react';

const ModalInput = ({label, placeholder,type, options, id, onChange, value, contain=false}) => {
    return type === 'text' ? ( 
        <div className={` flex  align-center space-between ${contain? 'input-container' : null}`}>
            {label ? <label htmlFor="">{label}</label> : null}
            <input value={value} onChange={onChange} id={id} placeholder={placeholder} className="modal-input" type="text"/>
        </div>
     ) : (
         <div className={`${contain ? 'input-container' : null}`}>
             <label htmlFor="">{label}</label>
             <select value={value} onChange={onChange} id={id} className="modal-select" name={value}>
                {options.map(opt=><option value={opt} key={opt}>{opt}</option>)}
             </select>
         </div>
     )
}
 
export default ModalInput;