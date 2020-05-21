import React, {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
const Nav = () => {
  const {currLoggedUser} = useContext(AuthContext)
  const openProfile = () =>{
    
  }
  return ( 
    <div className="nav flex space-evenly">
      <img class="logo" src="../../static/logo.png" alt="logo"/>
      <div className="links">
        <div className="link">
         <img onClick={openProfile} src="https://img.icons8.com/windows/24/000000/user.png"/>
         profile
        </div>
      </div>
      <div className="left-side-nav-container">
        {currLoggedUser ?   <button className={styles.logoutBtn}>Log Out</button> : null}
      </div>
    </div>
   );
}
 
export default Nav;