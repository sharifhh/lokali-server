import React from 'react'

const SideBarContainer = ({ children }) => {
  return (
    <div className='sidebar-container flex column' style={{ width: '50%' }}>
      {children}
    </div>
  )
}

export default SideBarContainer
