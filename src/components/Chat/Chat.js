import React, {useState, useEffect} from 'react';

import {GrPowerCycle} from 'react-icons/gr'
import {AiOutlineSend} from 'react-icons/ai'

import { Link, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';

import Message from './Message';
import serverApi from '../../serverApi/axios';
import StatusSection from './StatusSection';



const Chat = () => {
    const params = useParams();
    const {id} = params;
    const [offerDetails, setOfferDetails] = useState(null);
    const [listingDetails, setListingDetails] = useState(null)
    const [listingDetails2, setListingDetails2] = useState(null);
    const [message, setMessage] = useState(null);
    const user = useSelector(selectUser);
    console.log(user)

    useEffect(() => {
        const getOffer = async () => {
            try {
                const response = await serverApi.post(
                    'api/v1/offer/useroffer',
                    {"offerId": id},
                    {headers: {'Content-Type': 'application/json'}}
                    )                             
                    console.log(response.data.offer)
                    setOfferDetails(response.data.offer)

                    const {data} = await serverApi.get(
                        `/api/v1/listing/${response.data.offer.offerListingId}`,
                        {headers: {'Content-Type': 'application/json'}}
                    )
                    const {SingleListing} = data  ;
                    setListingDetails(SingleListing)

                    const {data: data2} = await serverApi.get(
                        `/api/v1/listing/${response.data.offer.sellerListingId}`,
                        {headers: {'Content-Type': 'application/json'}}
                    )
                        const {SingleListing: SingleListing2} = data2  ;
                        console.log(SingleListing2)
                        setListingDetails2(SingleListing2)


            } catch (error) {
                console.log({"offerId": id})
                console.log(error)
                return error.message
        
            }
        }
        
        if (!offerDetails) {
            getOffer()
        }
    }, [id]);


    const changeStatus = async (newStatus) => {
        const requestBody = {
            offerId: offerDetails._id,
            "updatedStatus": newStatus
        }
        try {
            const response = await serverApi.post(
                `api/v1/offer/changeStatus`,
                requestBody,
                {headers: {'Content-Type': 'application/json'}}
            )
            setOfferDetails(response.data.offer)


        } catch (error) {
            console.log(error)
        }
    }

    const sendMessage = async () => {
        const requestBody = {
            "offerId": id,
            "message" : message
        }
        try {
            const response = await serverApi.post(
                `api/v1/offer/addMessage`,
                requestBody,
                {headers: {'Content-Type': 'application/json'}}
            )
            setOfferDetails(response.data.offer)
            setMessage('')


        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }


    let typeOfOffer // sent or recived

    // console.log(offerDetails.userId)
    // console.log(user.userId)

    if (offerDetails && user) {
        if (user.userId === offerDetails.userId ) {
            typeOfOffer = "sent"
        } else {
            typeOfOffer = 'received'
        }
    }









    return (
        
        <div className=' relative h-[95vh] md:h-[91vh  '>
{ listingDetails2 ?       
            <div className='flex flex-col b-4  justify-between  h-full '>
            
                <div className='productSection p-5 flex  gap-3 border-b-2  justify-center items-center h-full'>
    
                    <Link to ={`/listing/${offerDetails.offerListingId}`}><img className='h-[200px]' src = {listingDetails.image1} /></Link>
                    <div className='hidden sm:block'>
                        <p className=' text-center mb-4 font-bold'>Swap</p>
                        <GrPowerCycle className='text-2xl mx-8'/>
                    </div>
        
                    <Link to ={`/listing/${offerDetails.sellerListingId}`}> <img className='h-[200px]' src ={listingDetails2.image1} /> </Link>
                </div>

                <StatusSection offerDetails = {offerDetails} changeStatus = {changeStatus} typeOfOffer = {typeOfOffer} />


                
                <div className='ChatSection  mt-4 h-full overflow-y-scroll '>
                <Message 
                messages={offerDetails.chat} 
                /> 
                </div>

                <div className='listing absolute bottom-0 w-full '>
                        <div className='w-full bg-white border-2 justify-between items-center border-black flex '>
                            <input
                                value = {message}
                                name='message'
                                type='text'
                                onChange={handleChange}
                                placeholder='Type Your message'
                                className='w-full h-full px-2 py-5  !outline-none                                '
                                />
                                <AiOutlineSend onClick={sendMessage} className=' text-2xl mr-3 cursor-pointer'/>
                        </div> 

                
                </div>
            </div> : <p>Loading..</p>}
        </div>

    )
}

export default Chat