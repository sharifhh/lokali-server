import React, { useState, useEffect, useContext } from 'react'

import Head from '../../components/head'
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm'
import data from './dummyData.json'
import PostCard from '../../components/post-card'
import { PostContext } from '../../context/PostContext'
import PostsNavbar from '../../components/PostsNavbar/PostsNavbar'

export default () => {
  const { queryPosts } = useContext(PostContext)
  const [posts, setPosts] = useState([...data])
  const [currPage, setCurrPage] = useState('posts')
  const [formState, setFormState] = useState({
    type: 'Select Type',
    title: '',
    description: '',
    category: '',
    location: '',
    author: 'Development'
  })
  useEffect(() => {
    const getPosts = async () => {
      let posts = await queryPosts('', currPage)
      setPosts(posts)
      console.log(posts)
    }
    getPosts()
  }, [currPage])
  const handleInputChange = (key, value) => {
    setFormState({ ...formState, [key]: value })
  }
  return (
    <div className='flex column align-center'>
      <CreatePostForm/>
      <PostsNavbar setCurrPage={setCurrPage}/>
      
      {currPage === 'posts' ? (
        posts
          .filter(post => post.type !== 'event' || post.type !== 'initiative')
          .map(post => (
            <PostCard
              title={post.title}
              desc={post.desc}
              location={post.location}
              tags={post.tags}
              type={post.type}
            />
          ))
      ) : (
        posts
        .filter(post => post.type === 'event' || post.type === 'initiative')
        .map(post => (
          <PostCard
            title={post.title}
            desc={post.desc}
            location={post.location}
            tags={post.tags}
            type={post.type}
          />
        ))
      )}
    </div>
  )
}
