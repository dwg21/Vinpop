import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllLisings, getListingsStatus, selectAllListings } from '../Redux/listingSlice'; 


const EditSection = () => {
    const dispatch = useDispatch()
    const listings = useSelector(selectAllListings);
    const listingStatus = useSelector(getListingsStatus);


    useEffect(() => {
        if (listingStatus === 'idle') {
            dispatch(fetchAllLisings())
    
        }
    }, [listings, dispatch]);

    if (listings.length > 14) {
        console.log(listings.length)
        
        return (
            <div>
                    <p className=' font-bold'>THE VINPOP EDIT </p>
                    <div className=' grid grid-cols-3 gap-3 sm:grid-cols-6'>
                        
                    {
                        listings && listings.slice(0,12).map((item, index) => (
                        <Link to = {`/listing/${item._id}`}>
                            <li className=' list-none'>
                                <img id={index} className=' mouse-highlight cursor-pointer' src= {item.image1}/> 
                            </li>
                        </Link>
                    ))
                }   
        
                    </div>
        
                </div>
        )}
        
    }


export default EditSection