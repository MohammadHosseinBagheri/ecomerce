const addedToCart = (items, addedItem) => {
  const isExist = items.find((item) => item.id === addedItem.id);
  if (isExist) {
    return items.map((item) => {
      if (item.id === addedItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }
  return [...items, { ...addedItem, quantity: 1 }];
};
export default addedToCart;
