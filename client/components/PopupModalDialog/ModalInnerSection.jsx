import React from 'react';

const ModalInnerSection = ({children}) => {
    return ( 
        <div className="innerSection flex column">
            {children}
        </div>
     );
}
 
export default ModalInnerSection;