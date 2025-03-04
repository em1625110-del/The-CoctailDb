import { useEffect } from 'react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDrinks } from '../redux/Home/CoctelSLice'
import ProductList from '../Components/ProdactList/ProductList'
import Letters from '../Components/Part/Letter/Letter'
import Food2 from '../Components/Part/Food2'
import UpInfo from '../Components/Part/UpInfo'

function Home() {
    const dispatch = useDispatch()
    const { loading, drink , error } = useSelector(state => state.drinks)

    useEffect(() => {
        dispatch(getDrinks())
    }, [])
    console.log(drink)
    const coctel = drink.drinks
    
    if (loading) return <p className='loader1'></p>
    if (error) return <h1>Error: {error.message}</h1>

    return (
        <div style={{ width: "100%" }}>
            <UpInfo/>
            <ProductList data={coctel} />
            <Food2 />
            <Letters />
        </div>
    )
}

export default Home
