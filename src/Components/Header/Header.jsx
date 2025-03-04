import React, { useState } from 'react';
import { VscMenu } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchDrinks } from '../../redux/Home/SearchSlice'; // Убедитесь, что путь правильный

function Header() {
    const dispatch = useDispatch();
    const [icon, setIcon] = useState(false);
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && text.trim()) {
            navigate(`/search/${text}`);
            dispatch(searchDrinks(text)); 
            setText(''); 
        }
    };

    return (
        <>
            <header className='header'>
                <nav className='nav container'>
                    <img src="https://www.thecocktaildb.com/images/logo.png" alt="Logo" />
                    <div className="nav-right">
                        <Link to='/'>
                            <button className='Home-btn'>Home</button>
                        </Link>
                        <button className='Api-btn'>API</button>
                        <input
                            onChange={(e) => setText(e.target.value)}
                            type="text"
                            placeholder='search'
                            onKeyDown={handleKeyDown}
                            value={text}
                        />
                    </div>
                    <div className='burger' onClick={() => setIcon(!icon)}>
                        <button style={icon ? { display: 'none' } : { display: 'block' }}>
                            <VscMenu className='icon' />
                        </button>
                        <button style={icon ? { display: 'block' } : { display: 'none' }}>
                            <RxCross2 className='icon' />
                        </button>
                    </div>
                </nav>
            </header>
            <div className='header2'>
                <div className='hd' style={icon ? { display: 'flex' } : { display: 'none' }}>
                    <button className='Home-btn'>Home</button>
                    <button className='Api-btn'>API</button>
                    <input
                        type="text"
                        placeholder='search'
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        value={text}
                    />
                </div>
            </div>
        </>
    );
}

export default Header;