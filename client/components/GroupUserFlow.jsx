import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import { FREQUANCY_OPTIONS } from '../constants'

import Step from './Step'
import LastStep from './LastStep'
const GroupUserFlow = ({handleChange}) => {
  const {
    currStep,
    setCurrStep,
    createPostForm,
    setCreatePostForm
  } = useContext(PostContext)


  return (
   <div className='group'>
      {currStep === 2 && (
        <Step title='info'>
          <label htmlFor=''>Title</label>
          <input onChange={handleChange} id="title" type='text' />
          <label htmlFor=''>Description</label>
          <textarea onChange={handleChange} name='' id='desc'  cols='30' rows='10'></textarea>
          <button
            onClick={() => {
              setCurrStep(currStep + 1)
            }}
          >
            Next
          </button>
        </Step>
      )}
      {currStep === 3 && (
        <Step title='info'>
          <label htmlFor=''>location</label>
          <input type='text' />
          <label htmlFor=''>Frequancy</label>
          <select>
            {FREQUANCY_OPTIONS.map(item => (
              <option>{item}</option>
            ))}
          </select>
          <button
            onClick={() => {
              setCurrStep(currStep + 1)
            }}
          >
            Next
          </button>
        </Step>
      )}
            {currStep === 4 && (
        <Step title='Participants'>
          <label htmlFor=''>How many people do you for your {createPostForm.type}</label>
          <input type='number' onChange={handleChange} id="maxParticipants" />
          <button
            onClick={() => {
              setCurrStep(currStep + 1)
            }}
          >
            Next
          </button>
        </Step>
      )}

    </div>
  )
}

export default GroupUserFlow
