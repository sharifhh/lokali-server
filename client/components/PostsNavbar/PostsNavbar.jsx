import React from 'react'

const PostsNavbar = ({setCurrPage, currPage}) => {
    return ( 
        <div className="posts-navbar flex space-around">
            <span onClick={()=>setCurrPage('posts')}>One on One</span>
            <span onClick={()=>setCurrPage('groupposts')}>MultiPlayer</span>
        </div>
     );
}
 
export default PostsNavbar;