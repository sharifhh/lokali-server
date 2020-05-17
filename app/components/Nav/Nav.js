import React from 'react';
import styles from './Nav.module.css'
const Nav = () => {
  return ( 
    <div className={styles.nav}>
      <h1 style={{margin:0}}>Hello</h1>
      <div className="left-side-nav-container">
        <button className={styles.logoutBtn}>Log Out</button>
        <input className={styles.searchInput} type="text" placeholder="Search Lokali"/>
      </div>
    </div>
   );
}
 
export default Nav;