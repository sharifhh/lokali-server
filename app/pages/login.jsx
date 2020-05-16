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
     );
}
 
export default Login;