import React from "react";

const Header = (props) => {
  return <div className="d-flex justify-content-between align-items-center" style={{ height:'60px', width: "100vw", background: "orange" }}>
      <div className='m-2'><img src="https://via.placeholder.com/40"/></div>
      <div className='m-2'><input type="text"/></div>
  </div>;
};

export default Header;
