import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const duplicateItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (!duplicateItem) {
        const newItem = { ...action.payload, quantity: 1 };
        state.cart.push(newItem);
      } else {
        duplicateItem.quantity = duplicateItem.quantity + 1;
      }
      state.totalPrice = state.totalPrice + action.payload.price;
    },
    removeItemCart: (state, action) => {
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload.id
      );
      
      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          // Decrease the quantity by 1
          itemToRemove.quantity -= 1;
          state.totalPrice -= itemToRemove.price;
        } else {
          // Remove the item if quantity is 1
          state.cart = state.cart.filter(
            (product) => product.id !== action.payload.id
          );
          state.totalPrice -= itemToRemove.price;
        }
      }
    
      // Ensure totalPrice never goes below 0
      if (state.cart.length === 0) {
        state.totalPrice = 0;
      }
      
    },
  },
});

export const { addToCart, removeItemCart } = ProductSlice.actions;
