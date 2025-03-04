import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const getDrinksDetails = createAsyncThunk(
    'drinkDetails/getDrinksDetails', 
    async (idDrink, thunkAPI) => {
        try {
            const res = await axios.get(`${API}${idDrink}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const drinksDetailsSlice = createSlice({
    name: 'drinkDetails', 
    initialState: {
        drinkDetail: null, 
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDrinksDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDrinksDetails.fulfilled, (state, action) => {
                state.drinkDetail = action.payload.drinks; 
                state.loading = false;
            })
            .addCase(getDrinksDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default drinksDetailsSlice.reducer;