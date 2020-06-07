import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { PostContext } from '../context/PostContext'
import Step from '../components/Step'
import TypeContainer from '../components/typeContainer'
import {
  OFFER_ACTION_ITEMS,
  REQUEST_ACTION_ITEMS,
  POST_TYPES
} from '../constants'
import OneonOneUserFlow from '../components/OneOnOneUserFlow'
import GroupUserFlow from '../components/GroupUserFlow'
import HorizontalLinearStepper from './Timeline'
import LastStep from '../components/LastStep'
import { capitalize } from '@material-ui/core'
const Publish = () => {
  const {
    currStep,
    setCurrStep,
    createPostForm,
    setCreatePostForm
  } = useContext(PostContext)
  const handleChange = e =>
    setCreatePostForm({ ...createPostForm, [e.target.id]: e.target.value })
  const renderTypes = () => {
    return POST_TYPES.map(type => {
      return (
        <TypeContainer
          id={type}
          handleClick={e => {
            setCurrStep(2)
            console.log(e)
            setCreatePostForm({ ...createPostForm, type: e.target.id })
          }}
          title={capitalize(type)}
        />
      )
    })
  }
  return (
    <div>
      {currStep === 1 && (
        <Step count={1} title='Choose the type of post'>
          {renderTypes()}
        </Step>
      )}
      {createPostForm.type === 'offer' || createPostForm.type === 'request' ? (
        <OneonOneUserFlow handleChange={handleChange} />
      ) : (
        <GroupUserFlow handleChange={handleChange} />
      )}
      <LastStep count={5} />
    </div>
  )
}

export default Publish
