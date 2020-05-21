import React from 'react';

const SidebarItem = ({children}) => {
    return ( 
        <div className={`sidebar-item flex column align-center justify-center`}>
            {children}
        </div>
     );
}
 
export default SidebarItem;