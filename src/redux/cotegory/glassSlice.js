import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BY_GLASS = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=';

// Асинхронный Thunk для получения напитков по типу стакана
export const getDrinksByGlass = createAsyncThunk(
    'glass/getDrinksByGlass', 
    async (glassType, thunkAPI) => {
        try {
            const res = await axios.get(`${API_BY_GLASS}${glassType}`);
            console.log(res.data);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const glassSlice = createSlice({
    name: 'glass', 
    initialState: {
        drinks: [], 
        loading: false, 
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDrinksByGlass.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(getDrinksByGlass.fulfilled, (state, action) => {
                state.drinks = action.payload.drinks; 
                state.loading = false; 
            })
            .addCase(getDrinksByGlass.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.payload; 
            });
    },
});

export default glassSlice.reducer;