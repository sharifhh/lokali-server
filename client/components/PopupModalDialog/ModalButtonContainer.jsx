import React from 'react';

const ModalButtonContainer = ({children, justify="justify-right"}) => {
    return ( 
    <div  className={`flex align-center btn-container ${justify}`} >
        {children}
    </div>
     );
}
 
export default ModalButtonContainer;