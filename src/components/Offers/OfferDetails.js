import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ServerApi from '../../serverApi/axios';

import {SiMinutemailer} from 'react-icons/si'
import {TiTick} from 'react-icons/ti';
import {ImCross} from 'react-icons/im'

const OfferDetails = ({offer}) => {
    const [ListingPicture, setListingPicture] = useState(null);

    const getListingDetails = async () => {
        try {
            const response = await ServerApi.get(
                `api/v1/listing/${offer.sellerListingId}`,
                {headers: {'Content-Type': 'application/json'}}
            )

            setListingPicture(response.data.SingleListing.image1)


        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        if (!ListingPicture) {
            getListingDetails()
        }
    }, [])





return (
    <div className='border-2 p-2'>
        <div className='flex items-center justify-between'>
            <h3 className='font-bold text-left p-1'>Status : {offer.status} </h3> 
            {offer.status === 'pending' ? 
            <SiMinutemailer className='text-2xl text-orange-500 mr-3'/>: offer.status === 'accepted' ?
            <TiTick className='text-2xl text-green-500 mr-3'/> :
            <ImCross className='text-2xl text-red-500 mr-3' />
        }
            
        </div> 


        <Link to ={`/chat/${offer._id}`}>
{        ListingPicture && <img
        src = {ListingPicture}
        className='h-[200px] w-[200px]'
        />}
        </Link>
    </div>
)
}

export default OfferDetails