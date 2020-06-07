import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { PostContext } from '../context/PostContext'
import Step from '../components/Step'
import TypeContainer from '../components/typeContainer'
import { OFFER_ACTION_ITEMS, REQUEST_ACTION_ITEMS } from '../constants'
import OneonOneUserFlow from '../components/OneOnOneUserFlow'
import GroupUserFlow from '../components/GroupUserFlow'
import HorizontalLinearStepper from './Timeline'
import LastStep from '../components/LastStep'
const Publish = () => {
  const {
    currStep,
    setCurrStep,
    createPostForm,
    setCreatePostForm
  } = useContext(PostContext)

  return (
    <div>
      {currStep === 1 && (
        <Step count={1} title='Choose the type of post'>
          <TypeContainer
            id='event'
            handleClick={e => {
              setCurrStep(2)
              console.log(e)
              setCreatePostForm({ ...createPostForm, type: e.target.id })
            }}
            title='Event'
          />
          <TypeContainer
            id='initiative'
            handleClick={e => {
              setCurrStep(2)
              setCreatePostForm({ ...createPostForm, type: e.target.id })
            }}
            title='Initiative'
          />
          <TypeContainer
            id='offer'
            handleClick={e => {
              setCurrStep(2)
              setCreatePostForm({ ...createPostForm, type: e.target.id })
            }}
            title='Offer'
          />
          <TypeContainer
            id='request'
            handleClick={e => {
              setCurrStep(2)
              setCreatePostForm({ ...createPostForm, type: e.target.id })
            }}
            title='Request'
          />
        </Step>
      )}
      {createPostForm.type === 'offer' || createPostForm.type === 'request' ? (
        <OneonOneUserFlow />
      ) : (
        <GroupUserFlow />
      )}
      <LastStep count={5}/>
    </div>
  )
}

export default Publish
