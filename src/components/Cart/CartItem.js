import React from 'react';

import profile from '../../data/images/profile.jpeg';
import product from '../../data/images/itempic1.jpeg'

import {RiDeleteBinLine} from 'react-icons/ri';



const CartItem = ({data}) => {
    {console.log(data)}
    return (
        <div className='item-container p-4 bg-white shadow-md pl-5 md:m-5 rounded-md'>
        <div className=' py-3 flex'>
            <img src={profile} className='rounded-[50%] h-[50px]'/>
            <div className='flex flex-col ml-2 gap-2'>
                <span className='font-bold text-sm'>{data.SellerName}</span>
                <span className=' font-light text-sm'>{data.sellerUserTag}</span>
            </div>
        </div>


        <div className='flex flex-col md:flex-row'>
            <div className='flex space-x-2 '>
                <img src = {data.img1} className='w-[130px] h-[130px] rounded-sm' />
                <div className='flex flex-col space-y-2  '>
                    <p className='max-w-[350px]'>{data.Description.slice(0, 60)}...</p>
                <span className='font-bold'>£130.00</span>
                <RiDeleteBinLine className='text-xl cursor-pointer'/>
                </div>
            </div>

            <div className='w-[100%] md:ml-8'>
                <div className='border-b-2 py-2 flex justify-between mt-2'>
                    <span>Items(s)</span>
                    <span>£{data.Price}</span>
                </div>
                <div className='border-b-2 py-2 flex justify-between'>
                    <span>Estimated Shippig</span>
                    <span>£{data.ShippingPrice}</span>
                </div>
                <div className='border-b-2 py-2 flex justify-between'>
                    <span className='font-bold'>Total</span>
                    <span>£{data.Price + data.ShippingPrice}</span>
                </div>            
                <div className='flex justify-center'>
                    <button className='text-white font-bold bg-gray-900 mt-3 w-[95%] py-3'>Check out this item</button>
                </div>
            </div>


        </div>




    </div>

)
}

export default CartItem