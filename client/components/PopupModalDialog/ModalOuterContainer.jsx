import React from 'react';


const ModalOuterContainer = ({children, color="" ,border="none", height=""}) => {
    return ( 
        <div style={{ height:height, background:color, border:border}} className={`outer-container fixed-center flex column`}>
            {children}
        </div>
     );
}
 
export default ModalOuterContainer;