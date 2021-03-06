import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    grandTotal: 1,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        toast.success("Item added!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          content: newItem.content,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          src: newItem.src,
        });
      } else {
        existingItem.quantity++;

        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    calculateTotal(state) {
      let quantity = 0;
      let total = 0;

      state.items.forEach((item) => {
        quantity += item.price * item.quantity;
        total += quantity;
      });
      state.grandTotal = total;
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        toast.warn("Item removed!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
