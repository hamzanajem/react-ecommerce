import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            return response.data;
        }
        catch (error) {
            rejectWithValue(error.message);
        }
    })
export default fetchProducts;