import React from 'react';

const SidebarItem = ({children, onClick}) => {
    return ( 
        <div onClick={onClick} className={`sidebar-item flex column align-center space-between`}>
            {children}
        </div>
     );
}
 
export default SidebarItem;