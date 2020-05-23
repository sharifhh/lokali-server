import React from 'react';


const Massage = ({type, text, show}) => {
    return ( 
        <div className={`msg ${type} ${show ? 'show' : null}`}>
            <span>{text}</span>
        </div>
     );
}
 
export default Massage;