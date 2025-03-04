import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDrinksByIngredient } from '../../redux/IngerdientsSlice/IngredientSlice';
import ProductList from '../../Components/ProdactList/ProductList';
import './Ingrtdent.css'; 
import Letters from '../../Components/Part/Letter/Letter';

const imgUrl = 'https://www.thecocktaildb.com/images/ingredients';

function Ingrtdent() {
    const dispatch = useDispatch();
    const { name } = useParams();
    const { drinks, loading, error } = useSelector((state) => state.SearchCoctelByIngredient);


    

    useEffect(() => {
        dispatch(getDrinksByIngredient(name));
    }, [dispatch, name]);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <>
            <div className="ingr">
                <div className="ingredientHeader">
                    <h1 className="title">{name}</h1>
                   
                    <img src={`${imgUrl}/${name}.png`} alt={name} className="ingredientImage" />
                    <div className='arrows'>
                        <img src="https://www.themealdb.com/images/icons/Arrow-Left.png" alt="Previous" />
                        <img src="https://www.themealdb.com/images/icons/Arrow-Right.png" alt="Next" />
                    </div>
                </div>
                <div className="mealsContainer1">
                    <ProductList data={drinks} />
                </div>
            </div>
            <Letters />
        </>
    );
}

export default Ingrtdent;