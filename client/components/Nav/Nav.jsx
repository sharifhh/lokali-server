import React, {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import NavContainer from './NavContainer';
import LinkContainer from './LinkContainer';
import NavLink from './NavLink';
import ModalButton from '../PopupModalDialog/ModalButton';
import { useRouter } from 'next/router';
const Nav = () => {
  

  const {currLoggedUser} = useContext(AuthContext)
  console.log(currLoggedUser)
  const redirectSignup = () => router.push('/')
  let router = useRouter()
  return ( 
    <NavContainer className="flex">
      <img src="../../static/logo-small.png" alt=""/>
     {currLoggedUser ?
      <LinkContainer>
        <NavLink path="/home" text="Home"/>
        <NavLink path="/profile" text="Profile"/>
        <NavLink path="/fevorites" text="Favorites"/>
      </LinkContainer> : null}
    <div className="flex align-center">
    <input type="text"/>
      <button>Logout</button>
    </div>
    </NavContainer>
   );
}
 
export default Nav;