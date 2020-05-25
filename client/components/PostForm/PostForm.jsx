import React, { useState, Fragment, useContext } from 'react'
import ModalOuterContainer from '../PopupModalDialog/ModalOuterContainer'
import ModalInnerContainer from '../PopupModalDialog/ModalInnerContainer'
import ModalInput from '../PopupModalDialog/ModalInput'
import ModalTitle from '../PopupModalDialog/ModalTitle'
import ModalMainSection from '../PopupModalDialog/ModalMainSection'
import ModalInnerSection from '../PopupModalDialog/ModalInnerSection'
import ModalButtonContainer from '../PopupModalDialog/ModalButtonContainer'
import ModalButton from '../PopupModalDialog/ModalButton'
import { PostContext } from '../../context/PostContext'
import { Modal } from '@material-ui/core'

const PostForm = ({ title, open, setOpen }) => {
  const { createPost } = useContext(PostContext)
  const options = ['event', 'offer', 'request', 'initiative']
  const [form, setForm] = useState({
    type: 'request',
    title: 'HUGE MASIV PARTY!!!',
    subtitle: '',
    summary: '',
    location: '',
    time: '',
    category: '',
    date: ''
  })
  const mapTypeToColor = type => {
    return (
      (type === 'event' && 'purple') ||
      (type === 'offer' && 'green') ||
      (type === 'initiative' && 'orange') ||
      (type === 'request' && 'red') ||
      'white'
    )
  }
  const onChange = e => setForm({ ...form, [e.target.id]: e.target.value })
  const handleSubmit = e => {
    createPost(form)
  }
  const handleClose = e => {
    setOpen(false)
  }

  return (
    <div className='post-form'>
      <Modal open={open}>
        <ModalOuterContainer color={mapTypeToColor(form.type)}>
          <ModalTitle title='Create a post' />
          <ModalInnerContainer>
            <ModalInnerSection align='self-right'>
              <ModalInput
                contain={true}
                label='type'
                options={options}
                onChange={onChange}
                defaultOpt='Choose type of post'
                id='type'
              />

              <ModalInput
                onChange={onChange}
                type='text'
                label='subtitle'
                contain={true}
                id='subtitle'
                value={form.subtitle}
              />
              <ModalInput
                onChange={onChange}
                type='textarea'
                label='Summary'
                contain={true}
                id='summary'
                value={form.summary}
              />
              <ModalInput
                onChange={onChange}
                type='text'
                label='Location'
                contain={true}
                id='location'
                value={form.location}
              />
              <ModalInput
                onChange={onChange}
                type='text'
                label='Category'
                contain={true}
                id='cat'
                value={form.category}
              />
              {form.type === 'event' || form.type === 'initiative' ? (
                <Fragment>
                  <ModalInput
                    onChange={onChange}
                    type='date'
                    label='date'
                    id='date'
                    contain={true}
                  />
                  <ModalInput
                    onChange={onChange}
                    type='time'
                    id='time'
                    label='time'
                    contain={true}
                  />
                </Fragment>
              ) : null}
            </ModalInnerSection>
          </ModalInnerContainer>
          <ModalButtonContainer>
            <ModalButton
              onClick={handleSubmit}
              bg='white'
              color='black'
              text='Create'
            />
            <ModalButton
              onClick={handleClose}
              bg='white'
              color='black'
              text='Cancel'
            />
          </ModalButtonContainer>
        </ModalOuterContainer>
      </Modal>
    </div>
  )
}

export default PostForm
