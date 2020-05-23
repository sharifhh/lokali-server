import React from 'react';

const LinkContainer = ({children}) => {
    return ( 
        <div className="link-container flex space-between">
            {children}
        </div>
     );
}
 
export default LinkContainer;