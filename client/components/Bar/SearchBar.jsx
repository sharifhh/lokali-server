import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const [type, setType] = useState("giftofferings");

  const searchFunction = () => {
    axios
      .get(`http://localhost:4000/api/posts/`, { params: { q: "title:" + q } })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="container d-flex">
      <div>
        <input
          type="text"
          name="searchquery"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {/* <div>
        <select name="" id="">
          <option value="giftofferings">Gift Offerings</option>
          <option value="helprequests">Help Requests</option>
          <option value="events">Events</option>
          <option value="initiatives">Initiatives</option>
        </select>
      </div> */}
      <div>
        <button onClick={searchFunction}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
