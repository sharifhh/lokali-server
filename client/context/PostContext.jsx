import React, { createContext } from 'react'
import { DEVELOPMENT_HOST } from '../constants'
import axios from 'axios'

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
  const queryPosts = async (query, type) => {
      console.log(type)
    let res = await axios.get(`${DEVELOPMENT_HOST}/api/${type}`)
    return res.data
  }

  let values = { queryPosts }
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>
}

export default PostContextProvider
