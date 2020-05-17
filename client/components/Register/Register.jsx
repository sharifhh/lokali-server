import React, { useState, useReducer } from 'react';
import styles from './Register.module.css'
import { LOGIN_TYPE, SIGNUP_TYPE, FORM_SIGNUP_TITLE, FORM_LOGIN_TITLE, FORM_SIGNUP_SUBTITLE, FORM_LOGIN_SUBTITLE } from '../../constants';
import { capitalize } from '../../utils';

const Register = () => {
    const [form,setForm] = useState({name:'',password:'', email:'', createSession:false})
    const [formType, setFormType] = useState(SIGNUP_TYPE)
    const [title, setTitle] = useState(FORM_SIGNUP_TITLE)
    const [subTitle, setSubTitle] = useState(FORM_SIGNUP_SUBTITLE)
    const handleFormType = () =>{
        let switchFormType = formType === SIGNUP_TYPE ? LOGIN_TYPE : SIGNUP_TYPE
        let switchTitle = formType === SIGNUP_TYPE ? FORM_LOGIN_TITLE : FORM_SIGNUP_TITLE
        let switchSubTitle = formType === SIGNUP_TYPE ? FORM_LOGIN_SUBTITLE : FORM_SIGNUP_SUBTITLE
        setFormType(switchFormType)
        setTitle(switchTitle)
        setSubTitle(switchSubTitle)
        
    }
    const handleNameChange = e => setForm({...form, name:e.target.value})
    const handleEmailChange = e => setForm({...form, email:e.target.value})
    const handlePasswordChange = e => setForm({...form, password:e.target.value})

    return ( 
        <div className={styles.container}>
            <div className={styles.register}>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            { formType === SIGNUP_TYPE ? <input onChange={handleNameChange} value={form.name} placeholder="Enter Name" type="text"/> : null}
            <input onChange={handleEmailChange} value={form.email} placeholder="Enter Email" type="text"/>
            <input onChange={handlePasswordChange} value={form.password} placeholder="Enter Password" type="text"/>
            <div className={styles.lowerSect}>
                <div className={styles.remAuth}>
                <input value={form.createSession} type="checkbox"/>
                <label>Remember Me</label>
                </div>
                <button>{capitalize(formType)}</button>
            </div>
            <span  onClick={handleFormType} className={styles.redirectSpan}>
                {formType === SIGNUP_TYPE ? 'Already have an account? Login!' : 'New? Signup'}
            </span>
            <pre>
                {form.email}
                {form.name}
                {form.password}
            </pre>
        </div>
        </div>
        
     );
}
 
export default Register;