import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import categoriesSlice from "./categoriesSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
        categories: categoriesSlice,
        user: userSlice
    }

})
export default store;