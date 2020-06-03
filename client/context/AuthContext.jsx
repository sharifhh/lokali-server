import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'
import {
  USER_EXISTS_ERR_CODE,
  LOGGED_USER_KEY,
  DEVELOPMENT_HOST
} from '../constants'
import { loadFromSessionStroge, saveToSessionStorage } from '../utils'
import { useRouter } from 'next/router'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [currLoggedUser, setCurrLoggedUser] = useState(null)
  const router = useRouter()
  useEffect(() => {
    const checkForSession = async () => {
      let res = await axios.get(`${DEVELOPMENT_HOST}/auth/check-session`, {
        withCredentials: true
      })
      console.log('session', res)
      if (res.data) {
        let user = await axios.get(`${DEVELOPMENT_HOST}/api/users/${res.data}`)
        saveToSessionStorage(LOGGED_USER_KEY, user.data)
        setCurrLoggedUser(user.data)
        //
      }
      //
      else {
        router.push('/signup')
      }
    }
    checkForSession()
  }, [router.pathname])
  /// Redirect back to signup if no session found.
  // else {
  //   router.push("/signup");
  // }

  //Initial signup for new users
  const signup = async user => {
    let res = await axios.post(`${DEVELOPMENT_HOST}/auth/signup`, user, {
      withCredentials: true
    })
    return res.data
  }

  //Update profile
  const updateUserProfileImage = url => {}

  //Handles verification when user activates user with mail link
  const verifyUser = async id => {
    let res = await axios.get(`${DEVELOPMENT_HOST}/auth/verify/${id}`)
    return res.data
  }

  //Final step before entering the app + standard login on use
  const login = async user => {
    let res = await axios.post(`${DEVELOPMENT_HOST}/auth/login`, user, {
      withCredentials: true
    })
    if (!res.data) return null
    else {
      saveToSessionStorage(LOGGED_USER_KEY, res.data)
      return res.data
    }

    // saveToSessionStorage(LOGGED_USER_KEY, res.data)
  }

  const getUser = async id => {
    let res = null
    try {
      res = await axios.get(`${DEVELOPMENT_HOST}/api/users/${id}`, {
        withCredentials: true
      })
    } catch (e) {
      console.error('Fuck... an error has occured', e)
    }
    return res
  }
  //Send a link to users email
  const handleEmailActivation = async userId => {
    console.log(userId)
    let res = await axios.post(
      `${DEVELOPMENT_HOST}/auth/mail-activation`,
      userId
    )
    return res.data
  }
  const values = {
    login,
    signup,
    currLoggedUser,
    verifyUser,
    setCurrLoggedUser,
    handleEmailActivation,
    //TODO: build a users context
    getUser
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
