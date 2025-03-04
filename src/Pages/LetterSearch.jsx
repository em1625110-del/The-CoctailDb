import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDrinksByLetter } from '../redux/LetterSearch/LetterSlice'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import ProductList from '../Components/ProdactList/ProductList'

function LetterSearch() {
    const { letter } = useParams()
    const dispatch = useDispatch()
    const { drinks, loading, error } = useSelector(state => state.SearchCoctelByLetter)

    useEffect(() => {
        dispatch(getDrinksByLetter(letter))
    }, [dispatch, letter])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }
    console.log(drinks);
    return (
        <div>
            <ProductList data={drinks} />
        </div>
    )
}

export default LetterSearch
