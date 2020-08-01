export const addedToCart = (items, addedItem) => {
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

export const decreaseFromCart = (addedItems, selectedItemForDecrease) => {
  const existItems = addedItems.find(
    (item) => item.id === selectedItemForDecrease
  );
  if (existItems.quantity === 1) {
    return addedItems.filter((item) => item.id != selectedItemForDecrease);
  }
  return addedItems.map((item) =>
    item.id === selectedItemForDecrease
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const removeSelectedItem = (state, id) => {
  return state.filter((item) => item.id != id);
};
