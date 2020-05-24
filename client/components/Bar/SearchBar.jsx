import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const [type, setType] = useState("giftofferings");

  const [results, setResults] = useState([]);

  const searchFunction = () => {
    axios
      .get(`http://localhost:4000/api/posts/${type}`, { params: { query } })
      .then((response) => {
        console.log(response.data);
        setResults(response.data);
      });
  };

  return (
    <div className="container">
      <div className="row d-flex">
        <div>
          <input
            type="text"
            name="searchquery"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div>
          <select onChange={(event) => setType(event.target.value)}>
            <option value="giftofferings">Gift Offerings</option>
            <option value="helprequests">Help Requests</option>
            <option value="events">Events</option>
            <option value="initiatives">Initiatives</option>
          </select>
        </div>
        <div>
          <button onClick={searchFunction}>Search</button>
        </div>
      </div>
      <div className="row">
        {results.map((item, index) => (
          <div key={index} className="col">
            <p>{item.type}</p>
            <p>{item.heading}</p>
            <p>{item.subheading}</p>
            <p>{item.summary}</p>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
