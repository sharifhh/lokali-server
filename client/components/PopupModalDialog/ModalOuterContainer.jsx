import React from 'react';


const ModalOuterContainer = ({children}) => {
    return ( 
        <div className={`outerContainer modal space-evenly`}>
            {children}
        </div>
     );
}
 
export default ModalOuterContainer;