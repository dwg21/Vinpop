import {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom';

import {selectAllListings, getListingsStatus, fetchAllLisings} from '../../Redux/listingSlice';
import { selectSearchState, changeParam } from '../../Redux/searchSlice';

import { useSelector, useDispatch } from 'react-redux';
import GridImage from './GridImage';
import { selectFavorites } from '../../Redux/favoriteSlice';
import { getFavoriteStatus } from '../../Redux/favoriteSlice';
import {getuserFavorites} from '../../Redux/favoriteSlice';




const ProductGrid = ({filters, setFilters}) => {   
    const dispatch = useDispatch();
    const {param} = useParams();
    const listings = useSelector(selectAllListings);
    const listingStatus = useSelector(getListingsStatus);
    const searchParam = useSelector(selectSearchState);

    const favorites = useSelector(selectFavorites);
    const favoritesStatus = useSelector(getFavoriteStatus);


    //for filter options

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


    

    // const mensListings = listings.filter((listing) => listing.Category === 'Mens' || listing.Category === 'Unisex' );
    // const womensListings = listings.filter((listing) => listing.Category === 'Womens' || listing.Category === 'Unisex' );

    // let categoryListings = listings ; 

    if (param) {
        if (param[0] === 'm' && filters.Category !== 'Mens') {
            setFilters({...filters, Category: "Mens"}) 
        } else if (param[0] === 'w' && filters.Category !== 'Womens') {
            setFilters({...filters, Category: "Womens"})

        } else if (param === 'Accessories' && filters.Category !== 'Accessories') {
            setFilters({...filters, Category: "Accessories"})
        }
    }



    if (param) {
        if (param.includes('All') && filters.Subcategory !== '') {
            setFilters({...filters, Subcategory: ''}) 
        }
        if (param.includes('tops') && filters.Subcategory !== 'Tops') {
            setFilters({...filters, Subcategory: "Tops"}) 
        } if (param.includes('bottoms') && filters.Subcategory !== 'Jeans') {
            setFilters({...filters, Subcategory: "Jeans"}) 
        } if (param.includes('jacket') && filters.Subcategory !== 'Jackets') {
            setFilters({...filters, Subcategory: "Jackets"}) 
        } if (param.includes('shorts') && filters.Subcategory !== 'Shorts') {
            setFilters({...filters, Subcategory: "Shorts"}) 
        } if (param.includes('shoes') && filters.Subcategory !== 'Shoes') {
            setFilters({...filters, Subcategory: "Shoes"}) 
        }
    }


    console.log(searchParam)


    let searchResults ;


    if (searchParam && listings) {
        searchResults = listings.filter((listing) => {
            if (listing.Category === searchParam ) {
                return true
            } 
    
            if (listing.SubCategory === searchParam) {
                return true
            }
    
            if (listing.size == searchParam) {
                return true
            }
    
            if (listing.description.toLowerCase().includes(searchParam.toLowerCase())) {
                return true
            }
    
            if (listing.title.includes(searchParam)) {
                return true
            }
    
            if (listing.Brand.includes(searchParam)) {
                return true
            } 
        })
        
    }



    if (listings) {

        let FilteredResults
        if (searchResults) {
            FilteredResults = searchResults
        } else {
            FilteredResults = listings
        }
    }


    for (let k in filters) {

        if (k === 'Category' && filters[k]) {
            const categoryFiltered = FilteredResults.filter((listing) => listing.Category === filters[k] );
            const unisexClothes = FilteredResults.filter((listing) => listing.Category === 'Unisex' );
            if (filters[k] === 'Mens' || filters[k] === 'Womens' ) {
                const filteredWithUnisex = [...unisexClothes, ...categoryFiltered]
                FilteredResults = filteredWithUnisex              
            } else {
                FilteredResults = categoryFiltered
            }

        } 
        
        if (k === 'Subcategory'  && filters[k] ) {
            const subcategoryFiltered = FilteredResults.filter((listing) => listing.Subcategory === filters[k]);
            FilteredResults = subcategoryFiltered
            console.log(FilteredResults)
        }  
        
        if (k === 'Size'  && filters[k]) {
            console.log(k)
            const sizeFiltered = FilteredResults.filter((listing) => listing.size === filters[k]);
            FilteredResults = sizeFiltered
            console.log(FilteredResults)
        }

        if (k === 'Color'  && filters[k]) {
            console.log(k)
            const colorFiltered = FilteredResults.filter((listing) => listing.Color === filters[k]);
            FilteredResults = colorFiltered
            console.log(FilteredResults)
        } 

    }




    //Changes page content based on status of request for cart data results

    let content ; 

    if (listingStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (listingStatus === 'suceeded' && listings) {
        content =  FilteredResults.map((item, index) => (
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

{      listings && <div className='py-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
            {content}
        </div> } 
    </div>
    )       
    
}

export default ProductGrid