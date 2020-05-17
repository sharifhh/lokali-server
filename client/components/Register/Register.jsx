import React, { useState, useReducer, useContext, useEffect } from 'react';
import styles from './Register.module.css'
import { LOGIN_TYPE, SIGNUP_TYPE, FORM_SIGNUP_TITLE, FORM_LOGIN_TITLE, FORM_SIGNUP_SUBTITLE, FORM_LOGIN_SUBTITLE, USER_EXISTS_ERR_CODE } from '../../constants';
import { capitalize } from '../../utils';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
    //Auth Context
    const {login, signup} = useContext(AuthContext)
    //Register State
    const [form,setForm] = useState({name:'',password:'', email:'', createSession:false})
    const [formType, setFormType] = useState(SIGNUP_TYPE)
    const [title, setTitle] = useState(FORM_SIGNUP_TITLE)
    const [subTitle, setSubTitle] = useState(FORM_SIGNUP_SUBTITLE)
    const [showErrMsg,setShowErrMsg] = useState({msg:'All Fields are required', show:false, loading:false})
    //useEffect errmsg
    useEffect(()=> setShowErrMsg(false),[formType])
    //On type switch (LOGIN --> SIGNUP and vice versa) TODO: Consider using reducerer
    const handleFormType = () =>{
        let switchFormType = formType === SIGNUP_TYPE ? LOGIN_TYPE : SIGNUP_TYPE
        let switchTitle = formType === SIGNUP_TYPE ? FORM_LOGIN_TITLE : FORM_SIGNUP_TITLE
        let switchSubTitle = formType === SIGNUP_TYPE ? FORM_LOGIN_SUBTITLE : FORM_SIGNUP_SUBTITLE
        setFormType(switchFormType)
        setTitle(switchTitle)
        setSubTitle(switchSubTitle)
    }
    //Handle input change and submit
    const handleNameChange = e => setForm({...form, name:e.target.value})
    const handleEmailChange = e => setForm({...form, email:e.target.value})
    const handlePasswordChange = e => setForm({...form, password:e.target.value})
    const handleCreateSession = e =>{ setForm({...form, createSession:e.target.checked})}
    
    //SUBMIT
    const handleSubmit = async () =>{
       let isValid = validateForm()
       if(!isValid) setShowErrMsg({show:true, msg:'All Fields are required'})
       else{
           let res =  formType === LOGIN_TYPE ? await login(form) : await signup(form)
           if(res.code === USER_EXISTS_ERR_CODE) setShowErrMsg({show:true,msg:'User Exists'})

       }
    }

    const validateForm = () =>{
        let formToValidation = Object.assign({}, {...form})        
        delete formToValidation.createSession
        let isValid = Object.values(formToValidation).every(field=>field)
        return isValid

    }

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
                <input onChange={handleCreateSession} checked={form.createSession} type="checkbox"/>
                <label>Remember Me</label>
                </div>
                <button onClick={handleSubmit}>{capitalize(formType)}</button>
            </div>
                {showErrMsg.show ?  <span className={styles.errMsg}>{showErrMsg.msg}</span> : null}
                <span  onClick={handleFormType} className={styles.redirectSpan}>
                    {formType === SIGNUP_TYPE ? 'Already have an account? Login!' : 'New? Signup'}
                </span>
            </div>
        </div>
        
     );
}
 
export default Register;