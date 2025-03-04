import React from 'react'
import './Letter/style.css'
import { Link } from 'react-router-dom'
import { PiTextUnderline } from 'react-icons/pi'


const meat = [
    {
        name: 'Vodka',
        image: 'https://www.thecocktaildb.com/images/ingredients/Vodka.png'
    },
    {
        name: 'Gin',
        image: 'https://www.thecocktaildb.com/images/ingredients/Gin.png'
    },
    {
        name: 'Rum',
        image: 'https://www.thecocktaildb.com/images/ingredients/Rum.png'
    },
    {
        name: 'Tequila',
        image: 'https://www.thecocktaildb.com/images/ingredients/Tequila.png'
    }
]

export default function Food2() {
    return (
        <div style={{ textAlign: "center", paddingTop: "40px" }}>
            <p>Popular Ingredients</p>
            <div className='food-2'>
                {
                    meat.map((item, index) => (
                        <div key={index}>
                            <Link to={`/ingredientsSEarch/${item.name}`}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
