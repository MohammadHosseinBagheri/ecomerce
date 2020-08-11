const INITIALSTATE = [
  {
    id: "0",
    title: "shoes",
    subtitle: "adidas",
    linkUrl: "/shop/hats",
    size: "",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: "1",
    title: "jackets",
    subtitle: "police",
    size: "",
    linkUrl: "/shop/jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: "2",
    title: "sneakers",
    subtitle: "black white",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    linkUrl: "/shop/sneakers",
    size: "",
  },
  {
    id: "3",
    title: "womens",
    subtitle: "nike",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    linkUrl: "/shop/womens",
  },
  {
    id: "4",
    title: "mens",
    subtitle: "filla",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    linkUrl: "/shop/mens",
  },
];

const directoryReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
