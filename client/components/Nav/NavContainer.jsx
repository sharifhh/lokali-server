import React  from 'react';

const NavContainer = ({children}) => {
    return ( 
        <div className="nav-container flex align-center space-around">
            {children}
        </div>
     );
}
 
export default NavContainer;