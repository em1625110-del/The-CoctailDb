import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDrinksByAlcohol } from '../../redux/cotegory/Cotegory';
import ProductList from '../../Components/ProdactList/ProductList';
import Letters from '../../Components/Part/Letter/Letter';
// import ProductList from '../../Components/ProdactList/ProductList';

function CotegoryByalchony() {
    const { strAlcoholic } = useParams();
    const dispatch = useDispatch();
    const { drinks, loading, error } = useSelector((state) => state.ByALchony);

    useEffect(() => {
        if (strAlcoholic) {
            console.log('Fetching drinks for:', strAlcoholic);
            dispatch(getDrinksByAlcohol(strAlcoholic));
        }
    }, [dispatch, strAlcoholic]);

    if (loading) return <div className="loading-spinner">Loading...</div>;
    if (error) return <p>Error: {error.message || 'Something went wrong'}</p>;
    if (!drinks || drinks.length === 0) return <p>No drinks found for this category.</p>;
    console.log(strAlcoholic);
    console.log(drinks);
    
    
    return (
        <div className="category-container" style={{textAlign:"center"}}>
            <h1>Drinks in category: {strAlcoholic}</h1>
            <ProductList data={drinks} />
            <Letters/>
        </div>
    );
}

export default CotegoryByalchony;