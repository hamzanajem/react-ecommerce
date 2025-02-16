import { createSlice } from "@reduxjs/toolkit"
import fetchProducts from "./thunks/fetchProducts";

const initialState = {
    products: [],
    SearchTerm: '',
    filtredProduct: [],

    loading: false,
    error: null,
}

const productSlice = createSlice(
    {
        name: 'Products',
        initialState,
        reducers: {
            setSearchTerm: (state, action) => {
                state.SearchTerm = action.payload;
                state.filtredProduct = state.products.filter((product) => {
                    return product.title.toLowerCase().includes(state.SearchTerm.toLocaleLowerCase());
                })

            }
        },

        extraReducers: (builder) => {
            builder.addCase(fetchProducts.pending, state => {
                state.loading = true;
                state.error = null;
            }).addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            }).addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

        }
    }
)
export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer;