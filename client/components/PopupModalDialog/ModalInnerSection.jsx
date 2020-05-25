import React from 'react';

const ModalInnerSection = ({children, enableScroll=false, align}) => {
    return ( 
        <div className={`inner-section flex column ${enableScroll ? 'scroll' : ''} ${align}`}>
            {children}
        </div>
     );
}
 
export default ModalInnerSection;