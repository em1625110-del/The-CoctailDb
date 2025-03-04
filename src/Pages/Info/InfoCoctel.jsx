import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDrinksDetails } from '../../redux/DetailsCoctel/CoctelDetails';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './InfoCoctel.css';
import Letters from '../../Components/Part/Letter/Letter';

const imgUrl = 'https://www.thecocktaildb.com/images/ingredients';

function InfoCoctel() {
    const navigate = useNavigate();
    const { idDrink } = useParams();
    const dispatch = useDispatch();
    const { loading, drinkDetail, error } = useSelector((state) => state.DrinkDetails);

    useEffect(() => {
        dispatch(getDrinksDetails(idDrink));
    }, [dispatch, idDrink]);

    useEffect(() => {
        if (!loading && (!drinkDetail || drinkDetail.length === 0)) {
            const delay = 500;
            const newId = Number(idDrink) + 1;
            const timeoutId = setTimeout(() => {
                navigate(`/coctel/${newId}`);
            }, delay);


            return () => clearTimeout(timeoutId);
        }
    }, [loading, drinkDetail, idDrink, navigate]);

    const goTOArrow = (e) => {
        let newId = Number(idDrink) + e;
        newId = newId < 1 ? 1 : newId;
        navigate(`/coctel/${newId}`);
    };

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <>
        <div className="info-coctel">
            {drinkDetail && drinkDetail.map((item) => {
                const ingredients = [];
                for (let i = 1; i <= 15; i++) {
                    const ingredient = item['strIngredient' + i];
                    const measure = item['strMeasure' + i];
                    if (ingredient) {
                        ingredients.push({ name: ingredient, measureName: measure });
                    }
                }
                console.log(ingredients);
                
                
                return (
                    <div key={item.idDrink} className="coctel-card">
                        <h1 className="coctel-title">{item.strDrink}</h1>
                        <div className="coctel-content">
                            <div>
                                <img className="coctel-image" src={item.strDrinkThumb} alt={item.strDrink} />
                                <div className='arrows'>
                                    <img onClick={() => goTOArrow(-1)} src="https://www.thecocktaildb.com/images/icons/Arrow-Left.png" alt="Previous" />
                                    <img onClick={() => goTOArrow(+1)} src="https://www.thecocktaildb.com/images/icons/Arrow-Right.png" alt="Next" />
                                </div>
                            </div>
                            <div className="coctel-ingredients">
                                <h2>Ingredients</h2>
                                <ul className='right-info'>
                                    {ingredients.map((ingredient, index) => (
                                        <div key={index} className="ingredient-item">
                                            <Link to={`/ingredientsSEarch/${ingredient.name}`}>
                                                <img src={`${imgUrl}/${ingredient.name}.png`} alt={ingredient.name} />
                                            </Link>
                                            <span>{ingredient.name}</span>
                                            <span>{ingredient.measureName}</span>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className='btn-class'>
                        <Link to={`/cotegoryByAlchony/${item.strAlcoholic}`}>
                            <button>{item.strAlcoholic}</button>
                        </Link>
                        <Link to={`/cotegoryByglass/${item.strGlass}`}>
                            <button className='btn2'>{item.strGlass}</button>
                        </Link>
                        </div>
                        <h2>Instructions</h2>
                        <p>{item.strInstructions}</p>
                    </div>
                );
            })}
        </div>
            <Letters/>
                </>
    );
}

export default InfoCoctel;