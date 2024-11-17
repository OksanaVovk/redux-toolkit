import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItemToCart: {
      reducer(state, action) {
        const index = state.items.findIndex(
          (cart) => cart.id === action.payload.id
        );
        if (index === -1) {
          state.items.push(action.payload);
        } else {
          state.items[index].quantity += action.payload.quantity;
          state.items[index].totalPrice += action.payload.totalPrice;
        }

        state.totalQuantity += 1;
      },
      prepare({ id, title, price }) {
        return {
          payload: {
            ...{ id, title, price },
            quantity: 1,
            totalPrice: price,
          },
        };
      },
    },
    removeItemFromCart(state, action) {
      const index = state.items.findIndex((cart) => cart.id === action.payload);
      if (state.items[index].quantity === 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity -= 1;
        state.items[index].totalPrice -= state.items[index].price;
      }

      state.totalQuantity -= 1;
    },
  },
});

// these exports should stay the way they are
export const cartActions = cartSlice.actions;

export default cartSlice;
