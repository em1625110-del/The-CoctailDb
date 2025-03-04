import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";  
import axios from "axios";  

const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m';  

export const getDrinks = createAsyncThunk(  
    'dresses/getDresses',
    async (_, thunkAPI) => {  
        try {  
            const res = await axios.get(API);  
            return res.data;  
        } catch (error) {  
            return thunkAPI.rejectWithValue(error.message);  
        }  
    }  
)  

const drinksSlice = createSlice({  
    name: 'dresses', 
    initialState: {  
        drink: [],  
        loading: false,  
        error: null   
    },  
    reducers: {},  
    extraReducers: (builder) => {  
        builder  
        .addCase(getDrinks.pending, (state) => {  
            state.loading = true;  
            state.error = null;  
        })  
        .addCase(getDrinks.fulfilled, (state, action) => { 
            console.log(action);
             
            state.drink = action.payload;   
            state.loading = false;  
        })  
        .addCase(getDrinks.rejected, (state, action) => {  
            state.loading = false;  
            state.error = action.payload;  
        })  
    }  
})  

export default drinksSlice.reducer;