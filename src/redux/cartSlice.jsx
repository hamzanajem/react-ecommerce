import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        AddToCart: (state, action) => {
            const newItem = action.payload;


            state.products.push(
                {
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: newItem.quantity || 1,
                    subTotalPrice: newItem.price * newItem.quantity || newItem.price,
                    image: newItem.image,
                    rating: newItem.rating
                }

            )



            state.totalPrice += newItem.price * newItem.quantity || newItem.price;
            state.totalQuantity = state.totalQuantity + newItem.quantity || state.totalQuantity + 1;

        }
        ,
        RemoveFromCart: (state, action) => {
            const product = action.payload;
            state.products = state.products.filter(item => {
                return item.id !== product.id ? item : null
            });

            state.totalQuantity -= product.quantity;
            state.totalPrice -= product.subTotalPrice;


        },
        increaseQuantity: (state, action) => {
            const newItem = action.payload;
            const itemIndex = state.products.find(item => item.id === newItem.id);
            itemIndex.quantity++;
            itemIndex.subTotalPrice += itemIndex.price;
            state.totalQuantity++;
            state.totalPrice += itemIndex.price;
        }
        , descreaseQuantity: (state, action) => {
            const newItem = action.payload;
            const itemIndex = state.products.find(item => item.id === newItem.id);
            if (itemIndex.quantity > 1) {
                itemIndex.quantity--;
                itemIndex.subTotalPrice -= itemIndex.price;
                state.totalQuantity--;
                state.totalPrice -= itemIndex.price;
            }
        },
        clearState: (state) => {
            state.products = []
            state.totalQuantity = 0
            state.totalPrice = 0
        }
        ,

    }




})
export const { AddToCart, RemoveFromCart, increaseQuantity, descreaseQuantity, clearState } = cartSlice.actions;
export default cartSlice.reducer;
