import axios from 'axios'
import React, {createContext, useState, useEffect} from 'react';
import { USER_EXISTS_ERR_CODE, LOGGED_USER_KEY, DEVELOPMENT_HOST } from '../constants';
import { saveToStorage } from '../utils';

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

  const [currLoggedUser, setCurrLoggedUser] = useState(null)

    const login = async user =>{
      let res = null
      try{
        let res = await axios.post(`${DEVELOPMENT_HOST}/auth/login`, user , {withCredentials:true})  
      }catch(e){
        console.error("Fuck... an error has occured", e)
      }
      return res
    } 
    const signup = async user =>{
      let res = await axios.post(`${DEVELOPMENT_HOST}/auth/signup`, user ,{withCredentials:true})
      if(res.data.code === USER_EXISTS_ERR_CODE) res.data.errmsg = 'User exists'
      if(res.data.email === user.email) saveToStorage(LOGGED_USER_KEY, res.data)
      return res.data

    }
    const verifyUser = async ({id}) => {
      if(typeof id === 'undefined' ) return
      let res = await axios.get(`${DEVELOPMENT_HOST}/auth/verify/${id}`)
      console.log(res)
      return res.data
    }
    const handleEmailActivation = async (userId) =>{
      let res = null //Assume that fails
      try{
          res = await axios.post(`${DEVELOPMENT_HOST}/auth/mail-activation`, userId)
        }catch(e){
          console.error(e)
        }finally{
          return res
        }
    }
    const values = {
      login,
      signup, 
      currLoggedUser,
      verifyUser,
      setCurrLoggedUser,
      handleEmailActivation
    }
    return ( 
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;