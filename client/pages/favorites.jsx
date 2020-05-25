import React, { useEffect, useState } from "react";
import SearchBar from "../components/Bar/SearchBar";
import axios from "axios";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/users/opendata`).then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row" style={{border: "2px solid black"}}>
          {favorites.map((item, index) => (
            <div key={index}  className="col">
              <p>{item.type}</p>
              <p>{item.createdAt}</p>
              <p>{item.heading}</p>
              <p>{item.subheading}</p>
              <p>{item.summary}</p>
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
      <SearchBar />
    </>
  );
};

export default Favorites;
