import {useState, useEffect} from 'react';
import ServerApi from '../../serverApi/axios';

import profile from '../../data/images/profile.jpeg';
import {RiDeleteBinLine} from 'react-icons/ri';

import { deleteFromCart } from '../../Redux/cartSlice';
import { useDispatch } from 'react-redux';



const CartItem = ({listingID}) => {
    const [listingData, setLisitingData] = useState(null);
    const [sellerData, setSellerData] = useState(null);

    const dispatch = useDispatch();


    const loadListing = async () => {
        try {
            const {data} = await ServerApi.get(
                `/api/v1/listing/${listingID}`,
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
        <div className='item-container p-4 bg-white shadow-md pl-5 md:m-5 rounded-md'>
            { sellerData ? <div>
            
            <div className=' py-3 flex'>
                <img src={profile} className='rounded-[50%] h-[50px]'/>
                <div className='flex flex-col ml-2 gap-2'>
                    <span className='font-bold text-sm'>{sellerData.name}</span>
                    <span className=' font-light text-sm'>{sellerData.username}</span>
                </div>
            </div>


            <div className='flex flex-col md:flex-row'>
                <div className='flex space-x-2 '>
                    <img src = {listingData.image1} className='w-[130px] h-[130px] rounded-sm' />
                    <div className='flex flex-col space-y-2  '>
                        <p className='max-w-[350px]'>{listingData.description.slice(0, 60)}...</p>
                    <span className='font-bold'>55{listingData.price}</span>
                    <RiDeleteBinLine onClick={() => dispatch(deleteFromCart(listingData._id))} className='text-xl cursor-pointer'/>
                    </div>
                </div>

                <div className='w-[100%] md:ml-8'>
                    <div className='border-b-2 py-2 flex justify-between mt-2'>
                        <span>Items(s)</span>
                        <span>{listingData.price}</span>
                    </div>
                    <div className='border-b-2 py-2 flex justify-between'>
                        <span>Estimated Shipping</span>
                        <span>£{listingData.shippingPrice}</span>
                    </div>
                    <div className='border-b-2 py-2 flex justify-between'>
                        <span className='font-bold'>Total</span>
                        <span>£{listingData.price + listingData.shippingPrice}</span>
                    </div>            
                    <div className='flex justify-center'>
                        <button className='text-white font-bold bg-gray-900 mt-3 w-[95%] py-3'>Check out this item</button>
                    </div>
                </div>


            </div>



        </div> :
        <h2>Loading</h2>}
    </div>

)
}

export default CartItem