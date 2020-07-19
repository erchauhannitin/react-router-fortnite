import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = () => {
    fetch("https://fortnite-api.theapinetwork.com/store/get")
      .then((response) => response.json())
      .then((result) => {
        setItems(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      {items.map((item) => (
        <h1 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
