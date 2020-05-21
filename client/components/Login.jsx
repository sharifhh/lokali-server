import React from 'react';
import ModalOuterContainer from './PopupModalDialog/ModalOuterContainer';
import ModalTitle from './PopupModalDialog/ModalTitle';
import ModalInput from './PopupModalDialog/ModalInput';
import ModalButtonContainer from './PopupModalDialog/ModalButtonContainer'
import ModalButton from './PopupModalDialog/ModalButton'

const Login = () => {
    const handleSubmit = () =>{
        console.log('hey')
    }
    return ( 
        <div className="login">
            <ModalOuterContainer height="350px">
                  <ModalTitle color="#3388e3" size="22px" title="Welcome to Lokali - Create a Password"/>
                  <p className="subtitle">Enter your email address and create a password</p>
                  <div style={{marginTop:'20px'}}>
                    <ModalInput type="text" placeholder="Enter you email address"/>
                    <ModalInput type="text" placeholder="Create a Password"/>
                    <ModalInput type="text" placeholder="Confirm Password"/>
                  </div>
                  <ModalButtonContainer>
                        <ModalButton onClick={handleSubmit} text="Login"/>
                    </ModalButtonContainer>
            </ModalOuterContainer>
        </div>
     );
}
 
export default Login;