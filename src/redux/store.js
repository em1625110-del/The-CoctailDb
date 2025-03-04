import { configureStore } from "@reduxjs/toolkit";
import drinksHomeReducer from './Home/CoctelSLice'
import SearchCoctelReuser from './Home/SearchSlice';
import DrenksDetailsReducer from './DetailsCoctel/CoctelDetails'
import SearchCoctelByLetterReducer from './LetterSearch/LetterSlice' 
import SearchCoctelbyIngredientReducer from './IngerdientsSlice/IngredientSlice'
import ByALchonyReducer from './cotegory/Cotegory'
import byglassReducer from './cotegory/glassSlice'

const myStore =  configureStore({
    reducer: {
        drinks: drinksHomeReducer,
        SearchCoctel: SearchCoctelReuser,
        DrinkDetails: DrenksDetailsReducer,
        SearchCoctelByLetter: SearchCoctelByLetterReducer,
        SearchCoctelByIngredient: SearchCoctelbyIngredientReducer,
        ByALchony: ByALchonyReducer,
        byglass: byglassReducer,

       

    }
})

export default myStore;