import React from 'react';

const SideBarContainer = ({children}) => {
    return ( 
        <div className="sidebar-container flex column">
            {children}
        </div>
     );
}
 
export default SideBarContainer;