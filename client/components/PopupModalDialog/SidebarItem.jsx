import React from 'react'

const SidebarItem = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`sidebar-item flex column align-center justify-center`}
    >
      {children}
    </div>
  )
}

export default SidebarItem
