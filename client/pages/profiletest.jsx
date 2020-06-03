import React from 'react'

const ProfileTest = () => {
  return (
    <div className='profile-test flex justify-center'>
      <div className='inner flex'>
        <img
          width='250px'
          src='https://res.cloudinary.com/dppogsm2u/image/upload/v1586354844/default_gywvgr.jpg'
          alt=''
        />
        <div className='info flex column justify-center'>
          <h1>Danny Borisov</h1>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <h1></h1>
    </div>
  )
}

export default ProfileTest
