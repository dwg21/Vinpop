import React, {useState, useEffect} from 'react';

import {GrPowerCycle} from 'react-icons/gr'
import {AiOutlineSend} from 'react-icons/ai'

import { Link, useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Message from './Message';
import serverApi from '../../serverApi/axios';

// const messages = [
//     { text: "Hey there! What's up", from: 'buyer'},
//     { text: 'Checking out iOS7 you know..', from: "seller" },
//     { text: 'Check out this bubble!', from: 'buyer' },
//     { text: "It's pretty cool!", from :'seller'},
//     { text: "And it's in css?", from: "buyer"  },
//     { text: "Yeah it's pure CSS &amp; HTML", from: 'buyer' },
//     { text: "(ok.. almost, I added a tiny bit of JS to remove sibling message tails)", from: 'seller' },
//     { text: "Wow that's impressive. But what's even more impressive is that this bubble is really high.", from: "seller"},
// ]


const Chat = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {id} = params;
    const [offerDetails, setOfferDetails] = useState(null);
    const [listingDetails, setListingDetails] = useState(null)
    const [listingDetails2, setListingDetails2] = useState(null);
    const [message, setMessage] = useState(null);

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








    return (
        
        <div className=' relative h-[95vh] md:h-[91vh]'>
{ listingDetails2 ?       
            <div className='flex flex-col b-4 border-black justify-between '>
            
                <div className='productSection p-5 flex  gap-3 border-b-2  justify-center items-center'>
    
                    <Link to ={`/listing/${offerDetails.offerListingId}`}><img className='h-[200px]' src = {listingDetails.image1} /></Link>
                    <div>
                        <p className=' text-center mb-4 font-bold'>Swap</p>
                        <GrPowerCycle className='text-2xl mx-8'/>
                    </div>
        
                    <Link to ={`/listing/${offerDetails.sellerListingId}`}> <img className='h-[200px]' src ={listingDetails2.image1} /> </Link>
                </div>

{offerDetails.status === 'pending' ?
                <div className='offerSection border-b-2 flex justify-around mt-4 pb-4   '>
                    <button onClick={() => changeStatus('accepted')} className='bg-black w-full mx-6 p-5 text-white font-bold'>Accept</button>
                    <button className='bg-white w-full border-2 border-black mx-6 p-5 text-black font-bold'>Decline</button>
                </div> :
                    <div className='offerSection border-b-2 flex justify-around mt-4 pb-4   '>
                        <h2>Offer Accepted - Please arrange the delivery/swap</h2>
                    </div>
                }
                
                <div className='ChatSection p-5 overflow-y-scroll h-[500px] border-2 '>
                <Message 
                messages={offerDetails.chat} 
                /> 
                </div>

                <div className='listing absolute bottom-0 w-full'>
                        <div className='w-full bg-white border-2 justify-between items-center border-black  flex'>
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