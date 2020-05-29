import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
const Confirm = () => {
    const router = useRouter()
    useEffect(()=>{
        let confirmBid  = async () =>{
            console.log(router.query)
            axios.post(`http://localhost:4000/api/posts/items/bid/confirm`, router.query)
        }   
        confirmBid()        
    },[router.query])
    return ( 
        <div className="confirm">

        </div>
     );
}
 
export default Confirm;