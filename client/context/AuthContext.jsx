import axios from 'axios'
import React, {createContext, useState} from 'react';

export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {
    let [user, setUser] = useState({name:'',email:'', password:'', createSession:false})

    const login = async () =>{
      console.log('logging in')
      // let res = await axios.post('http://localhost:4000/auth/login', user ,{withCardentials:true})  
    } 
    const signup = async () =>{
      console.log('singningisnk')
      // let res = await axios.post('http://localhost:4000/auth/signup', user, {withCredentials:true})
    }

    return ( 
        <AuthContext.Provider value={{user,setUser, login,signup}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;