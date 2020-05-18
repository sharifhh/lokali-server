import React, { useContext, useEffect } from 'react';
import {AuthContext} from '../context/AuthContext'
import styles from './styles/Profile.module.css'
import {Modal} from '@material-ui/core'
import { loadFromStroge } from '../utils';
import { LOGGED_USER_KEY } from '../constants';
const PopupModal = () => {
    const {setCurrLoggedUser ,currLoggedUser} = useContext(AuthContext)
    useEffect(()=> setCurrLoggedUser(loadFromStroge(LOGGED_USER_KEY)) ,[])
    return currLoggedUser ?  ( 
                <div className={`${styles.profileModalContainer} modal space-evenly`}>
                    <span className={`${styles.title} modal`}>My Profile</span>
                    <div className={`${styles.innerContainer} flex `}>
                        <div className={`${styles.sidebar} flex column space-around`}>
                            <div className={styles.sidebarItem}>
                                <img className={styles.profileImg} src={currLoggedUser.profileImg} alt=""/>
                                <button className={styles.imgEditBtn}>Edit</button>
                            </div>
                            <div className={`${styles.sidebarItem} flex column`}>
                                <span style={{textAlign:'center', marginTop:'10px'}}>Your Score and Budges</span>
                            </div>
                        </div>
                        <div className={styles.profileForm}>
                          <div className={styles.formProfileInnerContainer}>
                          <span className={styles.formSubtitle}>Personal Details</span>
                            <div className={styles.inputContainer}>
                                <InputControl value={currLoggedUser.name} placeholder="Enter your Name" label="Name"/>
                                <InputControl placeholder="Enter your Surname" label="Surname"/>
                                <InputControl placeholder="Enter your phone number" label="Contact"/>
                                <InputControl placeholder="Enter your city/country" label="Location"/>
                            </div>
                          <span className={styles.formSubtitle}>More Details</span>
                            <div className={styles.inputContainer}>
                                <InputControl placeholder="Select a Profession" label="Proffession"/>
                                <InputControl placeholder="Select Skills (MultiChoice)" label="Skills"/>
                                <InputControl placeholder="Select Hobbies (MultiChoice)" label="Hobbies"/>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className={`flex self-right ${styles.btnContainer}`} >
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </div>
     ) : null //TODO: LOADING GIF!;
}

export const InputControl = ({label, placeholder, value}) => {
    return ( 
        <div className={`flex space-between align-center ${styles.inputControl}`}>
        <label htmlFor="">{label}</label>
        <input value={value} type="text" placeholder={placeholder}/>
    </div>
     );
}
 

export default PopupModal;