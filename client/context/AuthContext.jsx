import axios from 'axios'
import React, {createContext, useState, useEffect} from 'react';
import { USER_EXISTS_ERR_CODE, LOGGED_USER_KEY, DEVELOPMENT_HOST } from '../constants';
import { saveToStorage, loadFromStroge } from '../utils';

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {


  useEffect(()=>{setCurrLoggedUser(loadFromStroge(LOGGED_USER_KEY))},[])

  const [currLoggedUser, setCurrLoggedUser] = useState(null)
  
  //Initial signup for new users
  const signup = async user =>{
    let res = await axios.post(`${DEVELOPMENT_HOST}/auth/signup`, user ,{withCredentials:true})
    return res
  

  }

  //Handles verification when user activates user with mail link 
  const verifyUser = async (id) => {
    let res = await axios.get(`${DEVELOPMENT_HOST}/auth/verify/${id}`)
    console.log(res)
    return res.data
  }

  //Final step before entering the app + standard login on use
  const login = async user =>{
    let res = null
    try{
      res = await axios.post(`${DEVELOPMENT_HOST}/auth/login`, user , {withCredentials:true})
    }catch(e){
      console.error("Fuck... an error has occured", e)
    }
    return res || res.data
  } 

  const getUser = async (id) =>{
    let res = null
    try{
      
      res = await axios.get(`${DEVELOPMENT_HOST}/api/users/${id}` , {withCredentials:true})

    }catch(e){
      console.error("Fuck... an error has occured", e)
    }
    return res
} 
  //Send a link to users email
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
      handleEmailActivation,
      //TODO: build a users context
      getUser
    }
    return ( 
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;