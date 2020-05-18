import React, {useContext, useEffect} from 'react';
import ModalMainSection from './PopupModalDialog/ModalMainSection'
import styles from '../pages/styles/Profile.module.css'
import { AuthContext } from '../context/AuthContext';
import { loadFromStroge } from '../utils';
import { LOGGED_USER_KEY } from '../constants';
import ModalInput from './PopupModalDialog/ModalInput';
const CreateProfileForm = () => {
    const {setCurrLoggedUser ,currLoggedUser} = useContext(AuthContext)

    useEffect(()=> setCurrLoggedUser(loadFromStroge(LOGGED_USER_KEY)) ,[])

    return ( 
      <ModalMainSection>

        <div className={styles.formProfileInnerContainer}>
        <span className={styles.formSubtitle}>Personal Details</span>
          <div className={styles.inputContainer}>
            <ModalInput label="Name"/>
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
    </ModalMainSection>
     );
}

export const InputControl = ({label, placeholder, value}) => {
    return ( 
        <div className={`flex space-between align-center ${styles.inputControl}`}>
        <label htmlFor="">{label}</label>
        <input value={value} type="text" placeholder={placeholder}/>
    </div>
     );
}
 
export default CreateProfileForm;