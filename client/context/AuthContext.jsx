import axios from 'axios'
import React, {createContext, useState} from 'react';
import { USER_EXISTS_ERR_CODE } from '../constants';

export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {

    const login = async user =>{
      let res = await axios.post('http://localhost:4000/auth/login',user)  

    } 
    const signup = async user =>{
      let res = await axios.post('http://localhost:4000/auth/signup', user)
      if(res.data.code === USER_EXISTS_ERR_CODE) res.data.errmsg = 'User exists'
      return res.data

    }

    return ( 
        <AuthContext.Provider value={{login,signup}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;