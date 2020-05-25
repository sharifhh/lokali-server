import React, { createContext, useState, useEffect } from 'react'
import { DEVELOPMENT_HOST } from '../constants'
import axios from 'axios'
import { useRouter } from 'next/router'

export const PostContext = createContext()

const PostContextPovider = ({ children }) => {
    const createPost = (post) =>{
        axios.post(`${DEVELOPMENT_HOST}/api/posts/posts`, post, {withCredentials:true})
    }
  const values = {createPost}
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>
}

export default PostContextPovider
