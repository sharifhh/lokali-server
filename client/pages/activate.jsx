import React, { useContext } from 'react';
import ModalOuterContainer from '../components/PopupModalDialog/ModalOuterContainer';
import ModalButton from '../components/PopupModalDialog/ModalButton';
import ModalButtonContainer from '../components/PopupModalDialog/ModalButtonContainer';
import { AuthContext } from '../context/AuthContext';

const activate = () => {
   
     const {handleEmailActivation} = useContext(AuthContext) 
     const  handleActivate = () =>{
               handleEmailActivation()
     }
    return ( 
        <div className="activate">
            <ModalOuterContainer color="white" border="2px solid gray">
               <div className="flex column align-center">
                    <img className="logo"  src='../static/logo.png' alt=""/>
                    <h3 className="par primary-par">Welcome to the Lokali community platform providing you an interactive framework to connect with people, initiatives and event to better our world and community. </h3>
                    <p  className="par">This interaction is made by members that create initiatives, sponsor events offer gifts to one and other and as each other for help.</p>
                    <p  className="par">To join the community and get started click on the activate button below, and start to make this word a better place, one step at a time.</p>
               </div>
               <ModalButtonContainer>
                    <ModalButton onClick={handleActivate}  color="#3388e3" size="22px" text="Activate Account"/>
               </ModalButtonContainer>
               
            </ModalOuterContainer>
        </div>
     );
}
 
export default activate;