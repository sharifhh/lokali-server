<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import {Button, TextField} from '@material-ui/core'
import AuthContextProvider, { AuthContext } from '../context/AuthContext'

const Login = () => {
    const {user, setUser, login}  = useContext(AuthContext)
    const handleNameChange = e => setUser({...user, name:e.target.value})
    const handlePasswordChange = e => setUser({...user, password:e.target.value})
    const handleSubmit = async e =>{
        let res = await login()
        console.log(res)
    }
        return ( 
        <AuthContextProvider>
        <div className="form">
        <h2>Login</h2>
        <TextField onChange={handleNameChange} defaultValue={user.name}  label="Username"/>
        <TextField onChange={handlePasswordChange} defaultValue={user.password}  label="Password"/>
         <Button onClick={handleSubmit}  variant="contained" color="primary">Submit</Button>
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
=======
import React, { useState, useEffect, useContext } from 'react';
import ModalOuterContainer from '../components/PopupModalDialog/ModalOuterContainer';
import ModalTitle from '../components/PopupModalDialog/ModalTitle';
import ModalInput from '../components/PopupModalDialog/ModalInput';
import ModalButtonContainer from '../components/PopupModalDialog/ModalButtonContainer'
import ModalButton from '../components/PopupModalDialog/ModalButton'
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';
import { PASSWORD_DONT_MATCH_ERR } from '../constants';

const Login = () => {
    const router = useRouter()
    const {verifyUser, login} = useContext(AuthContext) 
    useEffect(()=>{verifyEffect()},[router.query])

    const  verifyEffect = async () => {
        let userId = router.query
        let res = await verifyUser(userId)
        if(res) setForm({...form, email:res.email}) 
    }
    let [form, setForm] = useState({email:'',pass:'',passConf:''})
    let [errMsg, setErrMsg] = useState({show:false,msg:''})
    
    const handleChange  = e => setForm({...form, [e.target.id]:e.target.value })    
    
    const handleSubmit = async () =>{
        if(form.pass === form.passConf && form.pass){
           let res =  await login(form) 
           router.push(`/profile/${res._id}`)
        }else{
            setErrMsg({show:true, msg:PASSWORD_DONT_MATCH_ERR})
        }  

    }
    return ( 
        <div className="login">
            <ModalOuterContainer height="350px">
                  <ModalTitle color="#3388e3" size="22px" title="Welcome to Lokali - Create a Password"/>
                  <p className="subtitle">Enter your email address and create a password</p>
                  <div style={{marginTop:'20px'}}>
                    <ModalInput id="email" onChange={handleChange} value={form.email} type="text" placeholder="Enter you email address"/>
                    <ModalInput id="pass" onChange={handleChange} value={form.pas} type="text" placeholder="Create a Password"/>
                    <ModalInput id="passConf" onChange={handleChange} value={form.passConf} type="text" placeholder="Confirm Password"/>
                  </div>
                  <span  className="errMsg">{errMsg.msg}</span>
                  <ModalButtonContainer>
                        <ModalButton onClick={handleSubmit} text="Login"/>
                    </ModalButtonContainer>
            </ModalOuterContainer>
        </div>
>>>>>>> master
     );
}
 
export default Login;