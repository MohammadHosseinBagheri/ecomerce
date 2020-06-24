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
      imageUrl:
        "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256-front-US.jpg",
    },
    {
      id: "1",
      title: "glasses",
      subtitle: "police",
      size: "",
      linkUrl: "hats",
      imageUrl:
        "https://cdn.mr-sunglass.com/media/catalog/product/cache/2/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/p/o/police-s8103v-627x-mr-sunglass-190605213667.jpg",
    },
    {
      id: "2",
      title: "pans",
      subtitle: "black white",
      imageUrl:
        "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256-front-US.jpg",
      linkUrl: "hats",
      size: "",
    },
    {
      id: "3",
      title: "tshirt",
      subtitle: "nike",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/613SYKy-XPL._UX522_.jpg",
      size: "large",
      linkUrl: "hats",
    },
    {
      id: "4",
      title: "hats",
      subtitle: "filla",
      imageUrl: "https://i.ebayimg.com/images/g/~fEAAOSwUcteRs1a/s-l300.jpg",
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
