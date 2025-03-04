import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BY_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';


export const getDrinksByIngredient = createAsyncThunk(
    'drinksSearch/getDrinksByIngredient', 
    async (name, thunkAPI) => {
        try {
            const res = await axios.get(`${API_BY_INGREDIENT}${name}`);
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
            .addCase(getDrinksByIngredient.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(getDrinksByIngredient.fulfilled, (state, action) => {
                state.drinks = action.payload.drinks 
                state.loading = false; 
            })
            .addCase(getDrinksByIngredient.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.payload; 
            });
    },
});

export default drinksSearchSlice.reducer;