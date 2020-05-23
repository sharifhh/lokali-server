import React from 'react';
import {Modal} from '@material-ui/core'

const ModalOuterContainer = ({children, open=true, color="" ,border="none", height=""}) => {
    return ( 
    <Modal open={open}>
        <div
        style={{ height:height, background:color, border:border}} 
        className={`outer-container fixed-center flex column`}>
            {children}
        </div>
    </Modal>
     );
}
 
export default ModalOuterContainer;