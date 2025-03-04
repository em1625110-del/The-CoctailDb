import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchDrinks } from "../redux/Home/SearchSlice"; 
import "./style.css";
import ProductList from "../Components/ProdactList/ProductList";
import Letters from "../Components/Part/Letter/Letter";

const SearchDrinks = () => {
    const {text} = useParams(searchDrinks)
    const { query } = useParams();
    const dispatch = useDispatch();
    const { drinks, loading, error } = useSelector((state) => state.SearchCoctel);

    useEffect(() => {
        if (query) {
            dispatch(searchDrinks(query));
        }
    }, [query, dispatch]);
    console.log(drinks);
    

    return (
        <div className="container" style={{width:"100%"}}>
            <h2>Результаты поиска: {text}</h2>
           
            <ProductList data={drinks}/>
            <Letters/>
        </div>
    );
};

export default SearchDrinks;
