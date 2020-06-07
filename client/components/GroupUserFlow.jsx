import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import { FREQUANCY_OPTIONS } from '../constants'

import Step from './Step'
const GroupUserFlow = () => {
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
          <input type='text' />
          <label htmlFor=''>Description</label>
          <textarea name='' id='' cols='30' rows='10'></textarea>
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

    </div>
  )
}

export default GroupUserFlow
