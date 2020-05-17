import React, {useContext} from 'react';
import styles from './Nav.module.css'
import { AuthContext } from '../../context/AuthContext';
const Nav = () => {
  const {currLoggedUser} = useContext(AuthContext)
  
  return ( 
    <div className={styles.nav}>
      <h1 style={{margin:0}}>Hello</h1>
      <div className="left-side-nav-container">
        {currLoggedUser ?   <button className={styles.logoutBtn}>Log Out</button> : null}
        <input className={styles.searchInput} type="text" placeholder="Search Lokali"/>
      </div>
    </div>
   );
}
 
export default Nav;