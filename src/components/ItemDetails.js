import React, { useState, useEffect } from "react";

function ItemDetails(props) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  var h = new Headers();
  h.append("Authorization", "string");

  var requestOptions = {
    method: "GET",
    headers: h,
    redirect: "follow",
  };

  const fetchItem = () => {
    fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${props.match.params.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setItem(result))
      .catch((error) => console.log("error", error));
  };

  return <div>{item.name}</div>;
}

export default ItemDetails;
