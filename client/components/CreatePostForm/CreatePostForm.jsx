import React, { useState } from 'react'
import { Modal, capitalize } from '@material-ui/core'
const CreatePostForm = () => {
  const [form, setForm] = useState({
    title: '',
    type: '',
    tags: [],
    desc: '',
    location: '',
    time: '',
    date: ''
  })
  const handleChange = e => setForm({ ...form, [e.target.id]: e.target.value })
  return (
    <div className='create-post-form'>
      <input type='text' />
      <button>Create</button>
      <Modal open={true}>
        <div className='flex column'>
          {Object.keys(form).map(field => {
            if (field === 'desc') {
              return <textarea placeholder=''></textarea>
            }
            if (field === 'tags') {
              return (
                <input
                  onKeyPress={e => {
                      console.log(e.key)
                    if (e.key === 'Enter') {
                      setForm({ ...form, tags: [...form.tags, e.target.value] })
                      console.log(form.tags)
                      e.target.value = ''
                    }
                  }}
                />
              )
            }
            return (
              <input
                placeholder={`${capitalize(field)}`}
                type='text'
                id={field}
                onChange={handleChange}
              />
            )
          })}
          {}
          <button>Add post</button>
        </div>
      </Modal>
    </div>
  )
}

export default CreatePostForm
