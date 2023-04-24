import {useEffect, useState} from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import ServerApi from '../../serverApi/axios';

import {selectAllListings, getListingsStatus, getListingsError, fetchCart, fetchAllLisings} from '../../Redux/listingSlice';
import { useSelector, useDispatch } from 'react-redux';
import GridImage from './GridImage';
import { selectFavorites } from '../../Redux/favoriteSlice';
import { getFavoriteStatus } from '../../Redux/favoriteSlice';
import {getuserFavorites} from '../../Redux/favoriteSlice';

const UserDataUrl = 'api/v1/listing'



const ProductGrid = () => {   
    const dispatch = useDispatch();
    const listings = useSelector(selectAllListings);
    const listingStatus = useSelector(getListingsStatus);

    const favorites = useSelector(selectFavorites);
    const favoritesStatus = useSelector(getFavoriteStatus);

    useEffect(() => {
        if (listingStatus === 'idle') {
            dispatch(fetchAllLisings())
    
        }
    }, [listings, dispatch])


    useEffect(() => {
        if (favoritesStatus === 'idle') {
            dispatch(getuserFavorites())
        }
    }, [favorites, dispatch])

    console.log(favorites)
    console.log(favoritesStatus)



    
    //Changes page content based on status of request for cart data results

    let content ; 

    if (listingStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (listingStatus === 'suceeded' && listings) {
        content =  listings.map((item, index) => (
            <GridImage 
                item={item}
                index = {index}
                favorites={favorites}
            />
        ))
    } else if (listingStatus === 'failed') {
        content = <p>error</p>
    } 


    return (
    <div>
        <div className='py-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
            {content}
        </div>  
    </div>
    )       
    
}

export default ProductGrid