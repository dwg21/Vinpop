import React, { useState, useEffect} from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addFavorite } from '../../Redux/favoriteSlice';
import { removeFavorite } from '../../Redux/favoriteSlice';



const GridImage = ({item, index, favorites }) => {
    const dispatch = useDispatch()


    const [ListingLike, setListingLike] = useState(false);
    
    // checks if any of images on page are already liked 
    const checkLikes = () => {
        console.log(item.id)
        console.log(favorites)

        if (favorites.includes(item.id) ) {
            console.log('hello')
            setListingLike(true)
        }
    }

    useEffect(() => {
        checkLikes()
    }, [favorites])
    


    const handleLike = (lisitingId) => {
        setListingLike(true)
        dispatch(addFavorite({
            listingId: lisitingId
        }))
    }

    const handleDislike = (lisitingId) => {
        setListingLike(false)
        dispatch(removeFavorite(lisitingId))
    }


    return (
        <div className='relative' key={index}>
            <Link to = {`/listing/${item.id}`}>
                <img  src= {item.image1} className='mouse-highlight cursor-pointer' alt='productImg' />
            </Link>
                { !ListingLike ? 
                <AiOutlineHeart onClick={() => handleLike(item.id)} className='text-2xl absolute bottom-1 right-1 z-50 cursor-pointer text-white  '/> :
                <AiFillHeart onClick={() => handleDislike(item.id)}  className='text-2xl absolute bottom-1 right-1 z-50 cursor-pointer text-red-800' />
                }
                {/* {likes.map((item, index) => (
                    <p>likes</p>
                ))} */}
        </div>
    )
    }

export default GridImage