import React, { useState, useEffect } from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionOverview from "../../components/collection-overview/conllection-overview.jsx";
const Shop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(SHOP_DATA);
    console.log(data)
  }, [data]);
  return data.map(({ id, ...otherProps }) => (
    <CollectionOverview key={id} {...otherProps} />
  ));
};

export default Shop;
