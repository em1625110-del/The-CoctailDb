import React, { useState } from 'react';
import './UpInfo.css';
import { IoSearchSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchDrinks } from '../../redux/Home/SearchSlice';

function UpInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [text, setText] = useState('');

    // Обработчик поиска
    const handleSearch = () => {
        if (text.trim()) {
            navigate(`/search/${text}`);
            dispatch(searchDrinks(text));
            setText(''); // Очистка поля ввода после поиска
        }
    };

    // Обработчик нажатия клавиши Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <div className='upinfo-first container'>
                <img src="https://www.thecocktaildb.com/images/cocktail_left.png" alt="Cocktail Left" />
                <div className='text-upinfo container'>
                    <h1 style={{ fontSize: '30px', marginBottom: '30px' }}>Welcome to TheCocktailDB</h1>
                    <p style={{ fontSize: '15px', marginTop: '-34px' }}>
                        An open, crowd-sourced database of drinks and cocktails from around the world.
                        We also offer <span style={{ color: '#D57D1F' }}>a free cocktail API</span> for anyone wanting to use it.
                    </p>
                    <div>
                        <button style={{ background: '#10a528' }}>Free API</button>
                        <button>Go Premium</button>
                    </div>
                    <p style={{ width: '386.5px', margin: '0 auto', marginTop: '-30px' }}>
                        Click button above to upgrade free Recipe API to premium.
                        $3 month and cancel anytime. Currently 54 supporters.
                    </p>
                </div>
                <img src="https://www.thecocktaildb.com/images/cocktail_right.png" alt="Cocktail Right" />
            </div>
            <div className='upinfo-second container'>
                <div>
                    <input
                        type='text'
                        placeholder='Search for a Meal...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={handleKeyDown} 
                        style={{paddingTop: '10px'}}
                    />
                    <button style={{ textAlign:"center" , marginTop:"10px"}} onClick={handleSearch}>
                        <IoSearchSharp style={{marginLeft:"-10px", fontSize:"20px", textAlign:"center"}}/>
                    </button>
                </div>
                <p>🍻 Total Meals: 303 🥩 Total Ingredients: 575 🖼️ Images: 303</p>
            </div>
        </>
    );
}

export default UpInfo;