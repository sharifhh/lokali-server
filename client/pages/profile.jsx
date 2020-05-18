import React, { useContext, useEffect } from 'react';
import CreateProfileForm from '../components/CreateProfileForm'
import ModalButton from '../components/PopupModalDialog/ModalButton'
import SidebarItem from '../components/PopupModalDialog/SidebarItem'
import ModalOuterContainer from '../components/PopupModalDialog/ModalOuterContainer'
import ModalInnerContainer from '../components/PopupModalDialog/ModalInnerContainer'
import {AuthContext} from '../context/AuthContext'
import styles from './styles/Profile.module.css'
import {Modal} from '@material-ui/core'
import { loadFromStroge } from '../utils';
import { LOGGED_USER_KEY } from '../constants';
import ModalTitle from '../components/PopupModalDialog/ModalTitle';
import ModalButtonContainer from '../components/PopupModalDialog/ModalButtonContainer';
const PopupModal = () => {
    const {setCurrLoggedUser ,currLoggedUser} = useContext(AuthContext)
    useEffect(()=> setCurrLoggedUser(loadFromStroge(LOGGED_USER_KEY)) ,[])
    return currLoggedUser ?  ( 
         <ModalOuterContainer>
           <ModalTitle title="My Profile"/>
                  <ModalInnerContainer>
                  <div className={`${styles.sidebar} flex column space-around`}>
                           <SidebarItem>
                                <img className={styles.profileImg} src={currLoggedUser.profileImg} alt=""/>
                           </SidebarItem>
                            <SidebarItem>
                                <span>My budges</span>
                            </SidebarItem>
                        </div>
                        <CreateProfileForm/>
                  </ModalInnerContainer>
                    <ModalButtonContainer>
                        <ModalButton text="Save"/>
                        <ModalButton text="Cancel"/>
                    </ModalButtonContainer>
            
         </ModalOuterContainer>
     ) : null //TODO: LOADING GIF!;
}


 

export default PopupModal;