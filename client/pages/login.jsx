import React, { useState, useEffect, useContext } from 'react'
import ModalOuterContainer from '../components/PopupModalDialog/ModalOuterContainer'
import ModalTitle from '../components/PopupModalDialog/ModalTitle'
import ModalInput from '../components/PopupModalDialog/ModalInput'
import ModalButtonContainer from '../components/PopupModalDialog/ModalButtonContainer'
import ModalButton from '../components/PopupModalDialog/ModalButton'
import { useRouter } from 'next/router'
import { AuthContext } from '../context/AuthContext'
import {
  PASSWORD_DONT_MATCH_ERR,
  LOGGED_USER_KEY,
  UNVALID_EMAIL_ERR,
  emailValidator
} from '../constants'
import { saveToStorage, saveToSessionStorage } from '../utils'

const Login = () => {
  const router = useRouter()
  let [form, setForm] = useState({ email: '', pass: '', passConf: '' })
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(true)
  const { verifyUser, login } = useContext(AuthContext)
  useEffect(() => {
    const verifyUserOnLogin = async () => {
      let userId = router.query.id
      let res = await verifyUser(userId)
      if (res) setForm({ ...form, email: res.email })
      else router.push('/signup')
    }

    if (router.query.id) {
      setIsFirstTimeLogin(true)
      verifyUserOnLogin(router.query)
    } else setIsFirstTimeLogin(false)
  }, [router.query])

  let [errMsg, setErrMsg] = useState({ show: false, msg: '' })
  useEffect(()=>{setErrMsg({...errMsg,msg:''})},[form])
  const handleChange = e => setForm({ ...form, [e.target.id]: e.target.value })

  const handleSubmit = async () => {
    if (!emailValidator(form.email) || !form.pass) {
      setErrMsg({ show: true, msg: 'Wrong Cardentials, Please try again' })
      return
    } else if (isFirstTimeLogin && form.pass !== form.passConf) {
      setErrMsg({ show: true, msg: PASSWORD_DONT_MATCH_ERR })
    } else {
      let res = await login(form)
      console.log(res)
      if(res) router.push({pathname:`/posts`})
    }
  }
  return (
    <div className='login'>
      <ModalOuterContainer height='350px'>
        <ModalTitle
          color='#3388e3'
          size='22px'
          title={
            isFirstTimeLogin
              ? 'Welcome to Lokali - Create a Password'
              : 'Login to Lokali'
          }
        />
        <p className='subtitle'>{`Enter your email address ${
          isFirstTimeLogin ? 'and create a password' : 'and password'
        }`}</p>
        <div style={{ marginTop: '20px' }}>
          <ModalInput
            id='email'
            onChange={handleChange}
            value={form.email}
            type='text'
            placeholder='Enter your email address'
          />
          <ModalInput
            id='pass'
            onChange={handleChange}
            value={form.pas}
            type='text'
            placeholder={`${isFirstTimeLogin ? 'Create' : 'Enter'} a Password`}
          />
          {isFirstTimeLogin ? (
            <ModalInput
              id='passConf'
              onChange={handleChange}
              value={form.passConf}
              type='text'
              placeholder='Confirm Password'
            />
          ) : null}
        </div>
        <span className='errMsg'>{errMsg.msg}</span>
        <ModalButtonContainer
          justify={isFirstTimeLogin ? 'justify-right' : 'space-between'}
        >
          {!isFirstTimeLogin ? (
            <ModalButton
              size='lg'
              bg='green'
              onClick={() => {
                router.push('/signup')
              }}
              text='Create a new account'
            />
          ) : null}
          <ModalButton size='lg' onClick={handleSubmit} text='Login' />
        </ModalButtonContainer>
      </ModalOuterContainer>
    </div>
  )
}

export default Login
