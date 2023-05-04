import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ServerApi from '../../serverApi/axios';
import {AiFillEdit, AiFillEye} from 'react-icons/ai'


const ListingDetails = ({listing}) => {

    const [offerDetails, setOfferDetails] = useState(null);
    // numOfOffers = offerDetails.len() || 0 

    const loadListingDetails = async () => {
        try {
            const {data} = await ServerApi.post(
                `/api/v1/offer/listingOffer`,
                {listingId: listing._id},
                {headers: {'Content-Type': 'application/json'}}
            )
            console.log({listingId: listing._id})
            const {offers} = data  ;
            console.log(data)
            setOfferDetails(offers)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (!offerDetails) {
            loadListingDetails()
    
        }
    }, [])
    
    
return (
    <div>
        <img className='h-[150px] w-[150px]' src = {listing.image1} />
        <div className='flex justify-center items-center gap-3 mt-4'>
            <Link className='flex gap-3'>
                <span >Edit</span>
                <AiFillEdit className='text-xl' />
            </Link>
            <Link to = {`/listing/${listing._id}`} className='flex gap-3'>
                <span className='border-l-2 border-black pl-2'>View</span>
                <AiFillEye className='text-xl' />
            </Link>

        </div>

    </div>
)
}

export default ListingDetails