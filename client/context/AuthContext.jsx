import axios from 'axios'
import React, {createContext, useState, useEffect} from 'react';
import { USER_EXISTS_ERR_CODE, LOGGED_USER_KEY } from '../constants';
import { saveToStorage } from '../utils';

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
  const [currLoggedUser, setCurrLoggedUser] = useState(null)

    const login = async user =>{
      let res = await axios.post('http://localhost:4000/auth/login',user , {withCredentials:true})  
      return res.data
    } 
    const signup = async user =>{
      let res = await axios.post('http://localhost:4000/auth/signup', user ,{withCredentials:true})
      if(res.data.code === USER_EXISTS_ERR_CODE) res.data.errmsg = 'User exists'
      if(res.data.email === user.email) {
        setCurrLoggedUser(res.data)
        saveToStorage(LOGGED_USER_KEY, res.data)
      }
      return res.data

    }
    const values = {
      login,
      signup, 
      currLoggedUser,
      setCurrLoggedUser
    }
    return ( 
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;