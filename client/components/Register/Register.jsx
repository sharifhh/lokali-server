import React, { useState, useContext, useEffect } from 'react';
import styles from './Register.module.css'
import { LOGIN_TYPE, SIGNUP_TYPE, USER_EXISTS_ERR_CODE, FORM_LOGIN_INFO, FORM_SIGNUP_INFO, ALL_FIELDS_REQUIRED_ERR, WRONG_INFO_ERR, USER_EXISTS_ERR} from '../../constants';
import { capitalize } from '../../utils';
import { AuthContext } from '../../context/AuthContext';
import Router from 'next/router';

const Register = () => {
    //Auth Context
    const {login, signup, setCurrLoggedUser} = useContext(AuthContext)
    //Register State
    const [form,setForm] = useState({name:'',password:'', email:'', createSession:false})
    const [formInfo, setformInfo] = useState(FORM_SIGNUP_INFO)
    const [showErrMsg,setShowErrMsg] = useState({msg:ALL_FIELDS_REQUIRED_ERR , show:false, loading:false})
   
    useEffect(()=> setShowErrMsg(false),[form]) //useEffect reset err msg when switch between forms or when user types
    //On type switch (LOGIN --> SIGNUP and vice versa) TODO: Consider using reducerer
    const handleFormType = () =>{
        let nextFormInfo = formInfo.type === SIGNUP_TYPE ? {...FORM_LOGIN_INFO} : {...FORM_SIGNUP_INFO}
        setformInfo(nextFormInfo)
    }

    const handleChange  = e => setForm({...form, [e.target.id]:e.target.value })    
    const handleSubmit = async () =>{
        //Front end validation 
       let isValid = validateForm()
       if(!isValid) setShowErrMsg({show:true, msg:ALL_FIELDS_REQUIRED_ERR})

       else{
           let res =  formInfo.type === LOGIN_TYPE ? await login(form) : await signup(form)
           if(!res) {
            setShowErrMsg({show:true,msg:WRONG_INFO_ERR})
            return
           }
           if(res.code === USER_EXISTS_ERR_CODE) {
                setShowErrMsg({show:true,msg:USER_EXISTS_ERR})
                return
           }
           console.log(res)
           setCurrLoggedUser('dude')
           Router.push('/profile')
       }
    }

    const validateForm = () =>{
        let formToValidation = Object.assign({}, {...form})        
        if(formInfo.type === LOGIN_TYPE) delete formToValidation.name
        delete formToValidation.createSession
        let isValid = Object.values(formToValidation).every(field=>field)
        return isValid

    }
    const renderInputs = () =>{
        let formToRender = Object.assign({},{...form})
        delete formToRender.createSession
        if(formInfo.type === LOGIN_TYPE) delete formToRender.name
        return  Object.keys(formToRender).map(field=>{  

            return (
                <input 
                type="text"
                id={field}
                value={form[field]} 
                placeholder={`Enter ${capitalize(field)}`}
                onChange={handleChange}/>
            )
        })
    
    }
    return ( 
        <div className={styles.container}>
            <div className={styles.register}>
            <Header title={formInfo.title} subtitle={formInfo.subtitle}/>
            {renderInputs()}
            <div className={styles.lowerSect}>
                <div className={styles.remAuth}>
                <input onChange={handleChange} checked={form.createSession} type="checkbox"/>
                <label>Remember Me</label>
                </div>
                <button onClick={handleSubmit}>{capitalize(formInfo.type)}</button>
            </div>
                {showErrMsg.show ?  <span className={styles.errMsg}>{showErrMsg.msg}</span> : null}
                <span  onClick={handleFormType} className={styles.redirectSpan}>
                    {formInfo.type === SIGNUP_TYPE ? 'Already have an account? Login!' : 'New? Signup'}
                </span>
            </div>
        </div>
        
     );
}
export const Header = ({title,subtitle}) => {
    return ( 
        <div className="header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
     );
}
 
export default Register;