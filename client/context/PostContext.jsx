import React, { createContext, useState, useEffect } from 'react'
import { DEVELOPMENT_HOST, USER_EXISTS_ERR } from '../constants'
import axios from 'axios'

export const PostContext = createContext()
const PostContextProvider = ({ children }) => {
  const [createPostForm, setCreatePostForm] = useState({
    type: '',
    title: '',
    tags: [],
    time: '',
    date: '',
    desc: '',
    frequancy:'',
    images:[],
    maxParticipants:0,


  })
  const [currStep, setCurrStep] = useState(1)
  useEffect(()=>{console.log(currStep, createPostForm.type)},[currStep])
  const queryPosts = async (query, type) => {
    let res = await axios.get(`${DEVELOPMENT_HOST}/api/${type}`)
    return res.data
  }

  let values = { queryPosts, currStep, setCurrStep, setCreatePostForm, createPostForm }
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>
}

export default PostContextProvider
