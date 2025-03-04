import React from 'react'
import './Caed.css'
import { Link } from 'react-router-dom'

function Card({food}) {
    return (
        <div className='meals'  key={food.idDrink}>
            <Link to={`/coctel/${food.idDrink }`}>
            <div style={{width :"240px"}}>
                <img className='meal-img' src={food.strDrinkThumb}  />
            </div>
            </Link>
            <h2>{food.strDrink}</h2>
            <p>{food.strAlcoholic}</p>
            {/* <a href={food.strYoutube}> watch a video </a> */}

        </div>
    )
}

export default Card
