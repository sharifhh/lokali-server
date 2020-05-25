import React, { useState } from 'react'
import { Modal } from '@material-ui/core'
import PostForm from '../components/PostForm/PostForm'

const Home = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <input type='text' />
      <button onClick={()=>setOpen(true)}>Create</button>
        <PostForm setOpen={setOpen} open={open} title='Party' />
    </div>
  )
}

export default Home
