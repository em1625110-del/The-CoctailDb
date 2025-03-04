import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

export const getDrinksByLetter = createAsyncThunk(
    'drinksSearch/getDrinksByLetter', 
    async (letter, thunkAPI) => {
        try {
            const res = await axios.get(`${API}${letter}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const drinksSearchSlice = createSlice({
    name: 'drinksSearch', 
    initialState: {
        drinks: [], 
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDrinksByLetter.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDrinksByLetter.fulfilled, (state, action) => {
                state.drinks = action.payload.drinks || []; 
                state.loading = false;
            })
            .addCase(getDrinksByLetter.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default drinksSearchSlice.reducer;
