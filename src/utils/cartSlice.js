import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        //here addItem, deleteItem and clearCart are action creators and lambda functions corresponding to each action creator
        //is reducer function

        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        deleteItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0
        }
     }
});

export const {addItem,deleteItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;