import React from 'react';

const ModalInnerSection = ({children, enableScroll=false}) => {
    return ( 
        <div className={`inner-section flex column ${enableScroll ? 'scroll' : ''}`}>
            {children}
        </div>
     );
}
 
export default ModalInnerSection;