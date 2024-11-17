const selectItems = (state) => state.cart.items;
const selectTotalQuantity = (state) => state.cart.totalQuantity;
const selectCartIsVisible = (state) => state.ui.cartIsVisible;

export const selectors = {
  selectItems,
  selectTotalQuantity,
  selectCartIsVisible,
};
