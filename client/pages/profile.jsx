import React from 'react';
import {Modal} from '@material-ui/core'
import styles from './styles/Profile.module.css'
const Profile = () => {
    return ( 
            <Modal open={true}>
                <div className={`${styles.container} flex`}>
                  <div className={`${styles.innerContainer} `}>
                    <div className={`flex column ${styles.sidebar}`}>
                            <SideBarItem text="Click to add your photo"/>
                            <SideBarItem text="Your score and Budges"/>
                        </div>
                        <div className="details">
                            <Input label="Name"/>
                            <Input label="Name"/>
                            <Input label="Name"/>
                            <Input label="Name"/>
                        </div>
                  </div>
                </div>
            </Modal>
     );
}

export const Input = ({label}) => {
    return ( 
        <div class={styles.input}>
            <label>{label}</label>
            <input type="text"/>
        </div>
     );
}

export const SideBarItem = ({text}) => {
    return ( 
        <div className={styles.sidebaritem}>
            <span>{text}</span>
        </div>
     );
}
 
 
export default Profile;