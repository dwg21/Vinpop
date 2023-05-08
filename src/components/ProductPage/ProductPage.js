import React, { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ServerApi from '../../serverApi/axios';


import ImageGallery from './ImageGallery';

import profile from '../../data/images/emptyprofile.webp';



import InfoSmallDevices from './infoSmallDevices';
import InfoLargeDevices from './infoLargeDevices';


const ProductPage = () => {
    const params = useParams();
    const {id} = params;

    const [listingData, setLisitingData] = useState(null);
    const [sellerData, setSellerData] = useState(null);
    const [test, setTest] = useState([]);

    


    const loadListing = async () => {
        try {
            const {data} = await ServerApi.get(
                `/api/v1/listing/${id}`,
                {headers: {'Content-Type': 'application/json'}}
            )
            const {SingleListing} = data  ;
            setLisitingData(SingleListing)

            if (SingleListing) {
                const Sellerdata = await ServerApi.get(
                `/api/v1/users/${SingleListing.sellerId}`,
                {headers: {'Content-Type': 'application/json'}}
            )
            setSellerData(Sellerdata.data.user)
            }


        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        if (!listingData || !sellerData) {
        loadListing()

        }
    }, [])
    


    
    


return (
    <div >
        <h2 className='-5'>{test}</h2>
{sellerData ?
            <div className='p-7 mt-10 flex flex-col md:flex-row '>
            <div className='mb-5 flex space-x-4 md:hidden'>
                <div>
                    <img src ={profile} className='rounded-[50%] h-[50px]' />
                </div>
                <div>
                    <p className='font-bold'>{sellerData.name}</p>
                    <p className=' font-light'>{sellerData.location}</p>
                </div>
            </div>

            <ImageGallery listingData = {listingData} />
            
            <div className='md:hidden'>
                <InfoSmallDevices listingData = {listingData} sellerData = {sellerData} />  
            </div>

            <div className='hidden md:block'>
                <InfoLargeDevices listingData = {listingData} sellerData = {sellerData}/>
            </div>
        
        </div>: 
        <h2 className='p-4 text-bold'>Loading..</h2> }

    </div>

)
}

export default ProductPage