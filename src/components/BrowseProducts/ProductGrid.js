import {useEffect, useState} from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import ServerApi from '../../serverApi/axios';

import {selectAllListings, getListingsStatus, getListingsError, fetchCart, fetchAllLisings} from '../../Redux/listingSlice';
import { useSelector, useDispatch } from 'react-redux';

const UserDataUrl = 'api/v1/listing'



const ProductGrid = () => {   
    const dispatch = useDispatch();
    // const [listings, setListings] = useState([]);
    const listings = useSelector(selectAllListings);
    const listingStatus = useSelector(getListingsStatus);
    const listingError = useSelector(getListingsError);


    useEffect(() => {
        if (listingStatus === 'idle') {
            dispatch(fetchAllLisings())
        }
    }, [listings, dispatch])


    // useEffect(() => {
    //     const getUserData = async () => {
    //         try {
    //             const  {data} = await ServerApi.get(
    //             UserDataUrl,
    //             {headers: {'Content-Type': 'application/json'}}
    //             ) 
    //             setListings(data.Listings)
    //             console.log(data.Listings)
    //             }
    //         catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getUserData()
    // }, [])

    
    
    //Changes page content based on status of request for cart data results

    let content ; 

    if (listingStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (listingStatus === 'suceeded' && listings) {
        content =  listings.map((item, index) => (
            <div className='relative' key={index}>
                <Link to = {`/listing/${item.id}`}>
                <img src= {item.image1} className='mouse-highlight cursor-pointer' alt='productImg' />
                <AiOutlineHeart className='text-2xl absolute bottom-1 right-1 z-50 cursor-pointer text-white'/>
                </Link>
            </div> ))
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