import React from 'react'

const Step = ({ children, title }) => {
  return (
    <div className='step'>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Step
