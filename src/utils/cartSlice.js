import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action)=>{
            // Redux Toolkit uses immer bts
            // mutating the state over here
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        //originalState = {items: ["pizza"]}
        clearCart: (state)=>{
            //Redux Toolkit (RTX) - either Mutate the existing state or return a new state
            //state.items.length = 0; // originalState = []
            state.items.length= 0; // or "return { items: []}" - both things are same
            // this new object will be replaced inside originalState = {items: []}
        }
    },
});

export const {addItem, removeItem, clearCart}= cartSlice.actions;

export default cartSlice.reducer;