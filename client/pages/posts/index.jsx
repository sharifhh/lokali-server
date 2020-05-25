import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Head from '../../components/head'

import data from './dummyData.json'
import PostCard from '../../components/post-card'

export default () => {
  const [posts, setPosts] = useState([...data])
  const [formState, setFormState] = useState({
    type: 'Select Type',
    title: '',
    description: '',
    category: '',
    location: '',
    author: 'Development'
  })
  //   useEffect(() => {
  //     axios.get("http://localhost:4000/api/posts/offers").then((response) => {
  //       const { data } = response;
  //       console.log(data);
  //       setPosts(data);
  //     });
  //   }, []);
  const handleInputChange = (key, value) => {
    setFormState({ ...formState, [key]: value })
  }
  return (
    <>
      <Head />
      <div className='container-fluid'>
        <div className='row no-gutters'>
          <div
            className='eventsContainer |  container-fluid col-xs-12 col-lg-4 d-flex overflow-auto flex-column align-items-center'
            style={{ height: '90vh' }}
          >
            {posts
              .filter(item => item.type === 'event')
              .map((item, index) => (
                <PostCard key={index} {...item} />
              ))}
          </div>
          <div className='postsContainer | col-xs-12 col-lg-8 d-flex overflow-auto'>
            <div
              className='container-fluid d-flex flex-wrap justify-content-center align-content-start'
              style={{ height: '90vh' }}
            >
              {posts
                .filter(item => item.type !== 'event')
                .map((item, index) => (
                  <PostCard key={index} {...item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
