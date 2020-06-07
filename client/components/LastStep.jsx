import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import { FREQUANCY_OPTIONS } from '../constants'

import Step from './Step'

const LastStep = ({count}) => {
  const {
    currStep,
    setCurrStep,
    createPostForm,
    setCreatePostForm
  } = useContext(PostContext)
  const handleSubmit = () =>{
    console.log(createPostForm)
  }
  const addTag = e => {
    if (e.key === 'Enter' && e.target.value) {
      setCreatePostForm({
        ...createPostForm,
        tags: [...createPostForm.tags, e.target.value]
      })
      e.target.value = ''
      console.log(createPostForm.tags)
    }
  }
  const removeTag = e => {
    let tagToRemove = e.target.id
    let indexOfTag = createPostForm.tags.indexOf(tagToRemove)
    let tagsClone = [...createPostForm.tags]
    tagsClone.splice(indexOfTag, 1)
    setCreatePostForm({
      ...createPostForm,
      tags: [...tagsClone]
    })
  }
  const renderTags = () =>
    createPostForm.tags.map(tag => {
      return (
        <div>
          <button id={tag} onClick={removeTag}>
            x
          </button>
          <span>{tag}</span>
        </div>
      )
    })
  return (
    <div>
      {currStep === count && (
        <Step title='Add some tags!!!'>
          <label htmlFor=''>tags</label>
          <input type='text' onKeyPress={addTag} />
          {renderTags()}
        </Step>
      )}
      <button onClick={handleSubmit}>Finish</button>
    </div>
  )
}

export default LastStep
