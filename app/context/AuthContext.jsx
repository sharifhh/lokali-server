import axios from 'axios'
import React, {createContext, useState} from 'react';

export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {
    let [user, setUser] = useState({
     firstName:'',
     surname:'',
     email:'',
     birthDay:'',
     gender:''
    })

    const login = async () =>{
      let res = await axios.post('http://localhost:4000/auth/login', user ,{withCardentials:true})  
    } 
    const signup = async () =>{
      let res = await axios.post('http://localhost:4000/auth/signup', user, {withCredentials:true})
    }

    return ( 
        <AuthContext.Provider value={{user,setUser, login}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;