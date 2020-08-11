import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection.component";
import "./category.styles.scss";
const mapCategoryNameToId = (item) => {
  const mapedItem = item.reduce((obj, item) => {
    obj[item.routeName] = item.id;
    return obj;
  }, {});
  return mapedItem;
};

const Category = ({ match, shopItem }) => {
  const collectionId = match.params.categoryId;
//   console.log(collectionId);
  const mapedData = mapCategoryNameToId(shopItem);
  const categoryData = shopItem.find(
    (item) => item.id == mapedData[collectionId]
  );
//   console.log(categoryData);
//   console.log(mapedData);
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
    shopItem: state.shop,
  };
};
export default connect(mapStateToProps)(Category);
