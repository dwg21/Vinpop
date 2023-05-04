import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {selectUserListings, getUserListingsStatus, fetchUserListings} from '../../Redux/listingSlice';
import { getCurrentUser } from '../../Redux/userSlice';

import ListingDetails from './listingDetails';

const UserListings = () => {
    const dispatch = useDispatch();

    const userListings = useSelector(selectUserListings);
    const userListingsStatus = useSelector(getUserListingsStatus);

    useEffect(() => {
        if (userListingsStatus === 'idle') {
            dispatch(fetchUserListings())
    
        }
        console.log(userListings)
    }, [userListings, dispatch])

    return (
    <div className='p-5 flex justify-center items-center flex-col'>
        <h2 className='font-bold text-center text-xl my-3'>YOUR LISTINGS</h2>
        <div className='flex gap-6 flex-wrap justify-center max-w-[900px]'>
        {
            userListings.map((listing, index) => (
                <ListingDetails listing = {listing}/> 
            ))
        }

        </div>

        <Link className=' w-[200px]' to = '/uploadListing'><button className=' mt-4 border-2 bg-black text-white py-2 font-bold cursor-pointer w-full'>Upload New Item</button></Link>

    </div>
    )
}

export default UserListings