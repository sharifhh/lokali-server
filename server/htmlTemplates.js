  const eventBid = (author, bidder, post) => {
    return   `<div>
    <h1>${bidder.name } ${bidder.surname} would like to join ${post.title}. Would you like to confirm?</h1>
    <a href="http://localhost:3000/confirm?author=${author._id}&bidder=${bidder._id}&post=${post._id}">Confirm</a>
    <a href="http://localhost:3000/reject">Reject</a>
</div>`
  
  }

  module.exports = {
      eventBid
  }