//CORE IMPORS
import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
//MODAL IMPORTS
import ModalOuterContainer from '../components/PopupModalDialog/ModalOuterContainer'
import ModalTitle from '../components/PopupModalDialog/ModalTitle'
import ModalButtonContainer from '../components/PopupModalDialog/ModalButtonContainer'
import ModalButton from '../components/PopupModalDialog/ModalButton'
import ModalInput from '../components/PopupModalDialog/ModalInput'
//UTILS
import {
  MONTH_LIST,
  NUM_DAY_IN_MONTH,
  GENDER_OPTIONS,
  ACTIVATION_ROUTE,
  USER_EXISTS_ERR_CODE,
  emailValidator,
  ALL_FIELDS_FILLED,
  ALL_FIELDS_REQUIRED_ERR,
  USER_EXISTS_ERR,
  UNVALID_EMAIL_ERR
} from '../constants'
import { AuthContext } from '../context/AuthContext'
import Massage from '../components/Massage/Massage'

const Signup = () => {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '', //String
    surname: '', //String
    email: '', //String
    day: '',
    month: '',
    year: '',
    gender: '' //String
  })

  const [msg, setMsg] = useState({ text: '', show: true, type: 'err' })

  useEffect(() => {
    setMsg({ ...msg, show: false })
  }, [form])
  useEffect(() => {
    console.log(ALL_FIELDS_FILLED)
  }, [msg])

  const { signup } = useContext(AuthContext)
  const onChange = e => setForm({ ...form, [e.target.id]: e.target.value })

  const handleSubmit = async () => {
    if (!ALL_FIELDS_FILLED(form)) {
      setMsg({ text: ALL_FIELDS_REQUIRED_ERR, show: true })
    } else if (!emailValidator(form.email) && ALL_FIELDS_FILLED(form)) {
      setMsg({ text: UNVALID_EMAIL_ERR, show: true, type: 'err' })
    } else {
      let res = await signup(form)
      console.log(res)
      if (res.code === USER_EXISTS_ERR_CODE) {
        setMsg({ text: USER_EXISTS_ERR, show: true })
      } else {
        router.push({ pathname: ACTIVATION_ROUTE, query: { id: res._id } })
      }
    }
  }

  return (
    <div className='signup'>
      <ModalOuterContainer color='#d9d9d9'>
        <ModalTitle
          color='#3388e3'
          size='22px'
          title='Create a new Lokali Account'
        />
        <p className='subtitle'>It's quick and easy</p>
        <div style={{ margin: '10px' }}>
          <ModalInput
            value={form.name}
            onChange={onChange}
            id='name'
            type='text'
            placeholder='First Name'
          />
          <ModalInput
            onChange={onChange}
            id='surname'
            type='text'
            placeholder='Surname'
          />
          <ModalInput
            isValid={emailValidator(form.email)}
            value={form.email}
            onChange={onChange}
            id='email'
            type='text'
            placeholder='Email Address'
          />
          <p className='subtitle'>Birthday</p>
          <div style={{ marginTop: '10px' }} className='flex'>
            <ModalInput
              value={form.day}
              onChange={onChange}
              id='day'
              options={NUM_DAY_IN_MONTH}
            />
            <ModalInput
              value={form.month}
              onChange={onChange}
              id='month'
              options={MONTH_LIST}
            />
            <ModalInput
              value={form.year}
              onChange={onChange}
              id='year'
              options={[2001, 2002]}
            />
          </div>
          <p className='subtitle'>Gender</p>
          <div style={{ marginTop: '10px' }}>
            <ModalInput
              value={form.gender}
              onChange={onChange}
              id='gender'
              options={GENDER_OPTIONS}
            />
          </div>
        </div>
        <ModalButtonContainer justify='space-between'>
          <ModalButton
            size='small'
            onClick={() => {
              router.push('/login')
            }}
            text='Log in'
          />
          <ModalButton size='lg' onClick={handleSubmit} text='Sign Up' />
        </ModalButtonContainer>
        <Massage text={msg.text} type={msg.type} show={!msg.show} />
      </ModalOuterContainer>
    </div>
  )
}

export default Signup
