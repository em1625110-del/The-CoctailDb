import React from 'react'
import Card from '../Card/Card'
// import './style.scss'
import './ProductList.css'

function ProductList({ data }) {


    return (
        <div className='food-1 '>
            {data?.map((item) => (
                <Card key={item.idDrink} food={item} />
            ))}
        </div>
    );
}

export default ProductList;