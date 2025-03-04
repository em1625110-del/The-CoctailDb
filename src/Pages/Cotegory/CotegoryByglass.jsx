import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDrinksByGlass } from '../../redux/cotegory/glassSlice';
import ProductList from '../../Components/ProdactList/ProductList';






function CotegoryByglass() {
        const { strGlass } = useParams();
        const dispatch = useDispatch();
        const { drinks, loading, error } = useSelector((state) => state.byglass);
    
        useEffect(() => {
            if (strGlass) {
                console.log('Fetching drinks for:', strGlass);
                dispatch(getDrinksByGlass(strGlass));
            }
        }, [dispatch, strGlass]);
    
        if (loading) return <div className="loading-spinner">Loading...</div>;
        if (error) return <p>Error: {error.message || 'Something went wrong'}</p>;
        if (!drinks || drinks.length === 0) return <p>No drinks found for this category.</p>;

        
    return (
        <div style={{textAlign:"center"}}>
            <h2>Drinks by {strGlass}:</h2>
            <ProductList data={drinks}/>
        </div>
    )
}

export default CotegoryByglass
