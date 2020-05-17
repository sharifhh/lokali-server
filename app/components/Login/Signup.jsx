import React, { useState, useContext } from 'react';
import {Button, TextField} from '@material-ui/core'
import AuthContextProvider, { AuthContext } from '../../context/AuthContext'
import styles from './Login.module.css'
const Login = () => {
    const {user, setUser, login}  = useContext(AuthContext)
    const handleFirstNameChange = e => setUser({...user, firstName:e.target.value})
    const handleSurnameChange = e => setUser({...user, surname:e.target.value})
    const handleEmailChange = e => setUser({...user, email:e.target.value})
    const handleSubmit = async e =>{
        let res = await login()
        console.log(res)
    }
        return ( 
        <AuthContextProvider>
        <div className={styles.form} >
        <section className={styles.mainSection}>
        <h1 className={styles.formTitle}>Create New Lokali Account</h1>
        <p>It's quick and easy</p>
            <input className={styles.inputField}  onChange={handleFirstNameChange} value={user.firstName} type="text" placeholder="First Name"/>
            <input className={styles.inputField}  onChange={handleSurnameChange}  value={user.surname} type="text" placeholder="Surname"/>
            <input className={styles.inputField}  onChange={handleEmailChange} value={user.email} type="email" placeholder="Email Address"/>
        </section>
        <section>
            <p>Birthday</p>
            {/* TODO: add date picker */}
        </section>
        <section>
            <p>Gender</p>
            <select name="" id="">
                <option disabled>Click to Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="rather_not_say">Rather not say</option>
            </select>
        </section>
         <button className={styles.submitBtn} onClick={handleSubmit}>Sign Up</button>
         <div>

         </div>
         <style jsx>{`
           .form{
               border:1px solid rgba(144,144,144,.4);
               display:flex;
               flex-direction:column;
               width:75%;
               height:50vh;
               padding:20px;
               justify-content:space-evenly;
           }
      `}</style>

        </div>
    </AuthContextProvider>
     );
}
 
export default Login;