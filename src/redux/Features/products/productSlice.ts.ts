import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICart } from "../../../interfaces/Products.interface"

 interface ISt {
    cart: ICart[],
    isLoading: boolean,
    error: string,
    success: boolean,
    isError: boolean,
    cartTotal: number,
 }

const initialState:ISt = {
    cart: [],
    cartTotal: 0,
    isLoading: false,
    error: '',
    isError: false,
    success:  true,
}

export const {
    reducer:ProductReducer,
    actions:{
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
    }
} = createSlice({
    initialState,
    name: 'Product',
    reducers: {
        addToCart: (state, { payload }: PayloadAction<ICart>) => {
            const itemExists = state.cart.some((cartItem) => cartItem._id === payload._id);
            if (itemExists) {
              state.error = 'Item already exists in the cart';
              state.success = false;
            } else {
              state.cart.push(payload);
              state.isLoading = false;
              state.success = true;
              state.error = '';
              state.isError = true;
            }
          },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(product => product._id!== action.payload)
        },
        // handle Increment or Decrement using same function
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const product = state.cart.find((item) => item._id === action.payload);
            if (product) {
              product.quantity += 1;
            }
          },
          decrementQuantity: (state, action: PayloadAction<string>) => {
            const product = state.cart.find((item) => item._id === action.payload);
            if (product && product.quantity > 1) {
              product.quantity -= 1;
            }
          },
    }
})