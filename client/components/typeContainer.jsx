import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'

const TypeContainer = ({ title, id , handleClick=null }) => {

  return (
     (
      <div id={id} className='type-container' onClick={handleClick}>
        <span id={id}>{title}</span>
      </div>
    )
  )
}

export default TypeContainer
