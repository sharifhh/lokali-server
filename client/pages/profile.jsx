import React from 'react';
import styles from './styles/Profile.module.css'
import {Modal} from '@material-ui/core'

const Profile = () => {
    return ( 
                <div className={`${styles.profileModalContainer} modal space-evenly`}>
                    <span className={`${styles.title} modal`}>My Profile</span>
                    <div className={`${styles.innerContainer} flex `}>
                        <div className={`${styles.sidebar} flex column space-around`}>
                            <div className={styles.sidebarItem}><h1>ITEM</h1></div>
                            <div className={styles.sidebarItem}><h1>ITEM</h1></div>
                        </div>
                        <div className={styles.profileForm}><h1>fds</h1></div>
                    </div>
                    <div className={`flex self-right ${styles.btnContainer}`} >
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </div>
     );
}


export default Profile;