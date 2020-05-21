import React, { useContext, useEffect, useState } from 'react';
import ModalOuterContainer from '../components/PopupModalDialog/ModalOuterContainer';
import ModalButton from '../components/PopupModalDialog/ModalButton';
import ModalButtonContainer from '../components/PopupModalDialog/ModalButtonContainer';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router'

const activate = () => {
     let router = useRouter()
     let userId = router.query
     const {handleEmailActivation} = useContext(AuthContext) 
     const [loading, setLoading] = useState(false)
     const [done, setDone] = useState(false)
    
     const  handleActivate = async() => {
          setLoading(true)
          let res = await handleEmailActivation(userId)
          res ? setDone(true) : setTimeout(() => {
               setLoading(false)
          }, 1000);
          

     }
             
    return !done ?  ( 
        <div className="activate">
            <ModalOuterContainer color="white" border="2px solid gray">
               {loading ? 
               <img className="fixed-center" src="../../static/loading.gif" alt="loading"/> :    
               <React.Fragment>
                    <div className="flex column align-center">
                         <img className="logo"  src='../static/logo.png' alt=""/>
                         <h3 className="par primary-par">Welcome to the Lokali community platform providing you an interactive framework to connect with people, initiatives and event to better our world and community. </h3>
                         <p  className="par">This interaction is made by members that create initiatives, sponsor events offer gifts to one and other and as each other for help.</p>
                         <p  className="par">To join the community and get started click on the activate button below, and start to make this word a better place, one step at a time.</p>
                     </div>
                    <ModalButtonContainer>
                         <ModalButton onClick={handleActivate} color="#3388e3"size="22px" text="Activate Account"/>
                    </ModalButtonContainer>
               </React.Fragment>
             }
          </ModalOuterContainer>
        </div>
     ) : 
     <ModalOuterContainer color="none" border="3px solid orange">
          <h1 className="fixed-center">Mail Sent</h1>
     </ModalOuterContainer>
}
 
export default activate;