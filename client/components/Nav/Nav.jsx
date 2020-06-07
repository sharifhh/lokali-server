import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import NavContainer from './NavContainer'
import LinkContainer from './LinkContainer'
import NavLink from './NavLink'
import { useRouter } from 'next/router'
const Nav = () => {
  const { currLoggedUser } = useContext(AuthContext)
  const redirectSignup = () => router.push('/')
  let router = useRouter()
  return (
    <NavContainer className='flex'>
      <img width='140' src='../../static/logo-small.png' alt='' />
      <div className='flex align-center'></div>

      <a href='/publish'>
        <button>Create Post</button>
      </a>
      <a href="/posts">Go home</a>
    </NavContainer>
  )
}

export default Nav
