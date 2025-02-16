import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCategories = createAsyncThunk('categories/fetchCategories', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.message);
    }
})
export default fetchCategories;