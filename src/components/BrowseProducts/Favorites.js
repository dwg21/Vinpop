import React, {useEffect} from 'react';


import {selectAllListings, getListingsStatus, getListingsError, fetchCart, fetchAllLisings} from '../../Redux/listingSlice';
import { useSelector, useDispatch } from 'react-redux';
import GridImage from './GridImage';
import { selectFavorites } from '../../Redux/favoriteSlice';
import { getFavoriteStatus } from '../../Redux/favoriteSlice';
import {getuserFavorites} from '../../Redux/favoriteSlice';

const Favorites = () => {   
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

    console.log(listings)


    
    // Filters lisings to only liked listing
    const FilteredListings = listings.filter((listing) => favorites.includes(listing._id))
    
    //Changes page content based on status of request for cart data results
    let content ; 

    if (listingStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (listingStatus === 'suceeded' && listings) {
        content =  FilteredListings.map((item, index) => (
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
    <div className='p-8'>
        <h2 className='text-2xl font-bold'>Favorites</h2>
        <div className='py-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
            {content}
        </div>  
    </div>
    )       
    
}

export default Favorites