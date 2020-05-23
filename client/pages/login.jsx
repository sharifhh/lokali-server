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
    const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(true)
    const {verifyUser, login} = useContext(AuthContext) 
    useEffect(()=>{
        console.log(router.query)
    if(router.query.id) verifyEffect()
    else setIsFirstTimeLogin(false)
    },[router.query])

    const  verifyEffect = async () => {
        let userId = router.query.id
        let res = await verifyUser(userId)
        if(res) setForm({...form, email:res.email}) 
    }
    let [form, setForm] = useState({email:'',pass:'',passConf:''})
    let [errMsg, setErrMsg] = useState({show:false,msg:''})
    
    const handleChange  = e => setForm({...form, [e.target.id]:e.target.value })    
    
    const handleSubmit = async () =>{
        if(form.pass === form.passConf && form.pass){
           let res =  await login(form) 
           console.log(res)
            try{
                router.push(`/profile/${res.data._id}`)
            }catch(e){
                console.log('Something went wrong!')
            }
        }else{
            setErrMsg({show:true, msg:PASSWORD_DONT_MATCH_ERR})
        }  

    }
    return ( 
        <div className="login">
            <ModalOuterContainer height="350px">
                  <ModalTitle color="#3388e3" size="22px" title={isFirstTimeLogin ? 'Welcome to Lokali - Create a Password' : 'Login to Lokali'}/>
                  <p className="subtitle">{`Enter your email address ${isFirstTimeLogin ? 'and create a password' : 'and password'}`}</p>
                  <div style={{marginTop:'20px'}}>
                    <ModalInput id="email" onChange={handleChange} value={form.email} type="text" placeholder="Enter your email address"/>
                    <ModalInput id="pass" onChange={handleChange} value={form.pas} type="text" placeholder={` ${isFirstTimeLogin ? 'Create' : 'Enter'} a Password`}/>
                    {isFirstTimeLogin ? <ModalInput id="passConf" onChange={handleChange} value={form.passConf} type="text" placeholder="Confirm Password"/> : null}
                  </div>
                  <span  className="errMsg">{errMsg.msg}</span>
                  <ModalButtonContainer justify={ isFirstTimeLogin ? "justify-right" : 'space-between'}>
                        {!isFirstTimeLogin ? <ModalButton size="lg" bg="green" onClick={()=>{router.push('/')}} text="Create a new account"/> : null }
                        <ModalButton size="lg" onClick={handleSubmit} text="Login"/>
                  </ModalButtonContainer>
            </ModalOuterContainer>
        </div>
     );
}
 
export default Login;