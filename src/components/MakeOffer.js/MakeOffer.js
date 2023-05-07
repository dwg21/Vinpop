import React, { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {selectUserListings, getUserListingsStatus, fetchUserListings} from '../../Redux/listingSlice';
import UserSelection from './userSelection';
import ServerApi from '../../serverApi/axios';



const MakeOffer = () => {
    const params = useParams();
    const naviagte = useNavigate();
    const {id} = params;
    const dispatch = useDispatch();
    const userListings = useSelector(selectUserListings);
    const userListingsStatus = useSelector(getUserListingsStatus);

    const [listingSelected, setListingSelected] = useState(null);
    const [message, setMessage] = useState("");


    useEffect(() => {
        if (userListingsStatus === 'idle') {
            dispatch(fetchUserListings())
    
        }
        console.log(userListings)
    }, [userListings, dispatch])

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

        const offer = {
            "offerListingId" : listingSelected,
            "sellerListingId" : id,
            "chat": [
                { message, "sender": "buyer"}
            ]
        }


    const makeOfferSubmit = async () => {
        // const offer = {
        //     "offerListingId" : listingSelected,
        //     "sellerListingId" : id,
        //     "chat": [
        //         { "message": {firstMessage}, "sender": "buyer"}
        //     ]
        // }
        try {
            const response = await ServerApi.post(
                `api/v1/offer`,
                offer,
                {headers: {'Content-Type': 'application/json'}}
            )
            naviagte('/');
            window.location.reload(false);


        } catch (error) {
            console.log(error)
        }
    }



    return (
    <div className='py-6 px-12 '>
    <div className=''>
        <h2 className='font-bold text-3xl border-b-2 py-5'>Provide Details Of Your Offer</h2>
        <h3 className='font-bold text-xl py-4'>Listing</h3>
        <p className='mb-2 font-light'>Choose one of your listed items to swap</p>
        
        <div className='p-2 flex flex-row flex-wrap justify-center border-2 gap-2'>

        {userListings && userListings.map((listing, index) => (
            <UserSelection setListingSelected = {setListingSelected} listingSelected = {listingSelected} listing={listing} />
            ))}
        </div>




        <form className='flex flex-col gap-3'>
            < label for = 'description' className='font-bold text-xl pt-4 pb-1'>Message</label>
            <textarea
                className='w-full border-2 border-black p-3'
                id = 'firstMessage'
                name = 'firstMessage'
                rows = '6'
                placeholder
                ='Enter your message to the seller'
                onChange={handleChange}
            />




        <button onClick={makeOfferSubmit}  className=' bg-black  py-2 font-bold w-full text-white my-4'>Submit Offer</button>

        </form>



    </div>
</div>
)
}

export default MakeOffer