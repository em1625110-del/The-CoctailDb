import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const searchDrinks = createAsyncThunk(
    "drinks/searchDrinks",
    async (text, thunkAPI) => {
        try {
            const res = await axios.get(`${API}${text}`);
            return res.data.drinks 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const drinksSlice = createSlice({
    name: "drinks",
    initialState: {
        drinks: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchDrinks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchDrinks.fulfilled, (state, action) => {
                state.drinks = action.payload;
                state.loading = false;
            })
            .addCase(searchDrinks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default drinksSlice.reducer;
