import { createSlice } from "@reduxjs/toolkit";



export const CartSlice = createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    addToCart: (state,action)=>{
        const fountProduct = state.find((product)=> product.id === action.payload.id);
        if(fountProduct){
                fountProduct.quantity++;
        }else{
            const productClone = {...action.payload,quantity:1};
            state.push(productClone);
        }
    },
    deleteFromCart: (state,action)=>{
        return state.filter((p) => p.id !== action.payload.id);
    },
    clearCart: (state,action)=>{
        return state = [];
    }
  }
});

export const { addToCart, deleteFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;