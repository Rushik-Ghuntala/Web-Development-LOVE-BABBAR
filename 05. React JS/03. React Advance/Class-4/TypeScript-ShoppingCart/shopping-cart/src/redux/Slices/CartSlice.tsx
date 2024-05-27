import { createSlice } from "@reduxjs/toolkit";


interface CartItem {
    id: number;
    // Add other properties for cart items as needed
  }

export const CartSlice = createSlice({
    name: "cart",
    initialState: [] as CartItem[],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
    }
});

export const  { add, remove } = CartSlice.actions;

export default CartSlice.reducer;
