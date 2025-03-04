import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BY_ALCOHOL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=';

export const getDrinksByAlcohol = createAsyncThunk(
    'alcohol/getDrinksByAlcohol', 
    async (strAlcoholic, thunkAPI) => {
        try {
            const res = await axios.get(`${API_BY_ALCOHOL}${strAlcoholic}`);
            console.log(res.data);
            return res.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const alcoholSlice = createSlice({
    name: 'alcohol', 
    initialState: {
        drinks: [], 
        loading: false, 
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDrinksByAlcohol.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(getDrinksByAlcohol.fulfilled, (state, action) => {
                state.drinks = action.payload.drinks; 
                state.loading = false; 
            })
            .addCase(getDrinksByAlcohol.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.payload; 
            });
    },
});

export default alcoholSlice.reducer;