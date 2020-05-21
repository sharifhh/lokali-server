import React from 'react';

const ModalButtonContainer = ({children,}) => {
    return ( 
    <div  className={`flex align-center btn-container`} >
        {children}
    </div>
     );
}
 
export default ModalButtonContainer;