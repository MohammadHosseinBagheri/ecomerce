import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
const Directory = () => {
  const [data, setData] = useState([
    {
      id: "0",
      title: "shoes",
      subtitle: "adidas",
      linkUrl: "hats",
      size: "",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: "1",
      title: "glasses",
      subtitle: "police",
      size: "",
      linkUrl: "hats",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: "2",
      title: "pans",
      subtitle: "black white",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "hats",
      size: "",
    },
    {
      id: "3",
      title: "tshirt",
      subtitle: "nike",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      linkUrl: "hats",
    },
    {
      id: "4",
      title: "hats",
      subtitle: "filla",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      linkUrl: "hats",
    },
  ]);
  return (
    <div className="directory-menu">
      {data.map(({ id, ...itemProps }) => (
        <MenuItem key={id} {...itemProps} />
      ))}
    </div>
  );
};

export default Directory;
