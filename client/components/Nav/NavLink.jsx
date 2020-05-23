import React from 'react';
import Link from 'next/link'
const NavLink = ({path, text}) => {
    return ( 
        <div className="nav-link flex align-center">
             <img src={`../../static/${text.toLowerCase()}-24.png`} alt={text}/>
             <a href={path} style={{marginLeft:'6px'}}>{text}</a>
        </div>
     );
}
 
export default NavLink;