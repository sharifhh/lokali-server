import React from 'react';

const ModalInnerSection = ({children}) => {
    return ( 
        <div className="inner-section flex column">
            {children}
        </div>
     );
}
 
export default ModalInnerSection;