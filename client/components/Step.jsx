import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'

const Step = ({ children, title }) => {
  const { currStep, setCurrStep } = useContext(PostContext)
  return (
    <div className='step'>
      <h1>{title}</h1>
      {children}
      {currStep !== 1 && (
        <div>
          <button
            onClick={() => {
              currStep > 0 && setCurrStep(currStep - 1)
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              setCurrStep(currStep + 1)
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default Step
