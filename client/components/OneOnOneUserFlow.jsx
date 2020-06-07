import React, { useState, useContext } from 'react'

import { OFFER_ACTION_ITEMS, REQUEST_ACTION_ITEMS } from '../constants'
import { PostContext } from '../context/PostContext'

import TypeContainer from '../components/typeContainer'

import Step from '../components/Step'

const OneonOneUserFlow = ({handleChange}) => {
  const {
    currStep,
    setCurrStep,
    createPostForm,
  } = useContext(PostContext)
  const renderOptions = () => {
    if (createPostForm.type === 'request') {
      return REQUEST_ACTION_ITEMS.map(item => <option>{item}</option>)
    }
    if (createPostForm.type === 'offer') {
      return OFFER_ACTION_ITEMS.map(item => <option>{item}</option>)
    }
  }
  return (
    <div>
      {currStep === 2 && (
        <Step title='Details' count={2}>
          <div>
            <label htmlFor=''>Title</label>
            <input type='text' />
          </div>

          <div>
            <label htmlFor=''>Choose Action</label>
            <select name='' id=''>
              {renderOptions()}
            </select>
          </div>
        </Step>
      )}
      {currStep === 3 && (
        <Step title='More Details' count={3}>
          <label htmlFor=''>Some editional Info</label>
          <textarea name='' id='' cols='30' rows='10'></textarea>
          <label htmlFor=''>Add a photo</label>
          <input type='file' />
        </Step>
      )}
      {currStep === 4 && (
        <Step title='More Details' count={4}>
          <label htmlFor=''>Location</label>
          <input type='text' />
          <label htmlFor=''>Phone num</label>
          <input type='text' />
        </Step>
      )}
    </div>
  )
}

export default OneonOneUserFlow
