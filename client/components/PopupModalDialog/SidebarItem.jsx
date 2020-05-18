import React from 'react';

const SidebarItem = ({label,children}) => {
    return ( 
        <div className={`sidebarItem flex column align-center justify-center`}>
            {children}
        </div>
     );
}
 
export default SidebarItem;