import React from 'react';

const ModalButtonContainer = ({children}) => {
    return ( 
    <div className={`flex self-right btnContainer`} >
        {children}
    </div>
     );
}
 
export default ModalButtonContainer;