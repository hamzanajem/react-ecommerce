import { createSlice } from "@reduxjs/toolkit"
import fetchCategories from "./thunks/fetchCategories"

const initialState = {
    categories: [],
    loading: false,
    error: null

}
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, state => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.loading = false;
        }).addCase(fetchCategories.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }

}
)
export default categoriesSlice.reducer;