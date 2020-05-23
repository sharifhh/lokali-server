import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const ProtectedRoute = ({children}) => {
    const {currLoggedUser} = useContext(AuthContext)
    const router = useRouter()
    useEffect(()=>{
        console.log('PROTECTED ROUTE' , currLoggedUser)
        setTimeout(() => {
            
            if(!currLoggedUser) router.push({pathname:'/signup',})
        }, 5000);
    },[])
    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default ProtectedRoute;