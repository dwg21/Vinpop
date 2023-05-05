import React, {useEffect, useState} from 'react';
import ServerApi from '../../serverApi/axios';

import OfferDetails from './OfferDetails';




const Offers = () => {
    const [sentOffers, setSentOffers] = useState(null);
    const [receivedOffers, setReceivedOffers] = useState(null);
    
    const [toggleOffers, setToggleOffers] = useState('Sent')

    const getSentOffers = async () => {
        try {
            const response = await ServerApi.get(
                `api/v1/offer/userOffers`,
                {headers: {'Content-Type': 'application/json'}}
            )

            console.log(response.data.offers);
            setSentOffers(response.data.offers)

        } catch (error) {
            console.log(error)
        }
    }

    const getReceivedOffers = async () => {
        try {
            const response = await ServerApi.get(
                `api/v1/offer/sellerOffers`,
                {headers: {'Content-Type': 'application/json'}}
            )

            console.log(response.data);
            setReceivedOffers(response.data.sellerOffers)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        if (!sentOffers) {
            getSentOffers()
        }

        if (!receivedOffers) {
            getReceivedOffers()
        }
    }, [])







    return (
        
    <div className='p-6'>
        { sentOffers && receivedOffers  ?
        <div className=' flex flex-col items-center  justify-center'>
            <div className='flex flex-col gap-4 items-center  w-full justify-center md:flex-row my-3 '>            
                <button onClick={() => setToggleOffers('Sent')} className={`w-[200px] border-2 border-black text  p-2 font-bold ${toggleOffers === 'Sent' && `bg-black text-white`}`}>Sent Offers</button>
                <button onClick={() => setToggleOffers('Received')} className={`w-[200px] border-2 border-black text  p-2  font-bold ${toggleOffers === 'Received' && `bg-black text-white`}`} >Recieved Offers</button>
            </div>

            <h2 className=' text-center font-bold text-xl my-4'>{toggleOffers} Offers</h2>
            <div className='flex flex-wrap gap-6 justify-center items-center max-w-[1000px]'>
                {toggleOffers === "Sent" ?
                sentOffers.map((offer, index) => (
                    <div>
                        <OfferDetails id= {index} offer = {offer} toggleOffers = {toggleOffers} />
                    </div>
                )) :
                receivedOffers.map((offer, index) => (
                    <div>
                        <OfferDetails id= {index} offer = {offer} toggleOffers = {toggleOffers} />
                    </div>
                ))
                }
            </div>
        </div>:<p>Loading...</p> }
    </div>
    )
}

export default Offers