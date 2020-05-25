import React, { useState } from 'react'
import ModalOuterContainer from '../PopupModalDialog/ModalOuterContainer'
import ModalInnerContainer from '../PopupModalDialog/ModalInnerContainer'
import ModalInput from '../PopupModalDialog/ModalInput'
import ModalTitle from '../PopupModalDialog/ModalTitle'
import ModalMainSection from '../PopupModalDialog/ModalMainSection'
import ModalInnerSection from '../PopupModalDialog/ModalInnerSection'
import ModalButtonContainer from '../PopupModalDialog/ModalButtonContainer'
import ModalButton from '../PopupModalDialog/ModalButton'
import { Modal } from '@material-ui/core'

const PostForm = props => {
  const options = ['event', 'offer', 'request', 'initiative']
  const [form, setForm] = useState({ type: props.type })
  const mapTypeToColor = type => {
    console.log(form)
    return (
      (type === 'event' && 'purple') ||
      (type === 'offer' && 'green') ||
      (type === 'initiative' && 'orange') ||
      (type === 'request' && 'red') ||
      'white'
    )
  }
  const onChange = e => setForm({ ...form, [e.target.id]: e.target.value })

  return (
    <div className='post-form'>
      <ModalOuterContainer color={mapTypeToColor(form.type)}>
        <ModalTitle title={props.title} />
        <ModalInnerContainer>
          <ModalInnerSection align='self-right'>
            <ModalInput
              contain={true}
              label='type'
              options={options}
              onChange={onChange}
              id='type'
            />
            <ModalInput type='text' label='title' contain={true} />
            <ModalInput type='text' label='subtitle' contain={true} />
            <ModalInput type='text' label='summary' contain={true} />
            <ModalInput type='text' label='location' contain={true} />
            {props.date ? (
              <ModalInput type='date' label='date' contain={true} />
            ) : (
              ''
            )}
            {props.time ? (
              <ModalInput type='time' label='time' contain={true} />
            ) : (
              ''
            )}
          </ModalInnerSection>
        </ModalInnerContainer>
        <ModalButtonContainer>
          <ModalButton bg='white' color='black' text='Create' />
        </ModalButtonContainer>
      </ModalOuterContainer>
    </div>
  )
}

export default PostForm
