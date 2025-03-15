import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Casual T-shirt",
    category: "Cloth",
    price: 100,
    date: "03-14-25",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Smartwatch",
    category: "Watch",
    price: 120,
    date: "03-14-25",
    img: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Smart Home Hub",
    category: "Electronics",
    price: 150,
    date: "03-14-25",
    img: "https://images.unsplash.com/photo-1623113879540-476117b4be1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({ id: state.length > 0 ? state[state.length - 1] : 1 }),
        action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
