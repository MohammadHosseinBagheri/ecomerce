import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection.component";
import "./category.styles.scss";
const mapCategoryNameToId = (item) => {
  console.log(Object.values(item));
  const objectItem=Object.values(item)
  let mapedItem =objectItem .reduce((obj,item)=>{
    obj[item.routeName]=item.id;
    return obj
  },{});
  console.log(mapedItem)
  return mapedItem;
};

const Category = ({ match, shopItem }) => {
  const collectionId = match.params.categoryId;
  // console.log(collectionId);
  const mapedData = mapCategoryNameToId(shopItem);
  console.log(mapedData)
  const categoryData = Object.values(shopItem).find(
    (item) => item.id == mapedData[collectionId]
  );
  // console.log(categoryData);
  // console.log(mapedData);
  return (
    <div className="category-page-container">
      <h2
        style={{
          textAlign: "center",
        }}
      >
        {categoryData.title}
      </h2>
      <div className="category-item">
        {categoryData.items.map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    shopItem: state.shop.collections,
  };
};
export default connect(mapStateToProps)(Category);
