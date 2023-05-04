import React from 'react';
import {AiOutlineHeart, AiOutlineMail} from 'react-icons/ai';
import {RiStarSFill, RiStarSLine} from 'react-icons/ri';
import {BsFillTagFill, BsLightningChargeFill, BsShieldCheck}  from 'react-icons/bs';
import {IoMdShirt} from 'react-icons/io';
import profile from '../../data/images/profile.jpeg';

// redux imports 
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/cartSlice';
import { Link } from 'react-router-dom';


const InfoLargeDevices = ({listingData, sellerData}) => {
    const dispatch = useDispatch();

        const handleAddItem = () => {
        dispatch(addProduct({id: listingData._id}))
        }

    return (
        <div className='stylings-larger-Devices p-4 sticky top-[150px] '>
            <div className='ml-4'>
                <div className='mb-5 flex space-x-4'>
                    <div>
                        <img src ={profile} className='rounded-[50%] h-[50px]' />
                        
                    </div>
                <div>
                    <p className='font-bold'>{sellerData.name}</p>
                    <p className=' font-light'>{sellerData.location}</p>
                    <div className='flex'>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSLine />
                        <p className=' text-xs'>{sellerData.SaleReviews}</p>
                    </div>
                </div>
            </div>
        <div className='flex space-x-2 mt-2 '>
            <AiOutlineHeart className='text-3xl cursor-pointer'/>
            <AiOutlineMail className='text-3xl cursor-pointer' />
        </div>
        <div className='py-2'><span className='font-bold'>56 </span> <span>likes</span></div>
        
        <div className='mb-4 sticky'>
            <h3 className='font-bold text-xl'>{listingData.title}</h3>
            <Link to = {`/makeOffer/${listingData._id}`}><button onClick={handleAddItem} className=' mt-4 border-2 border-black w-full py-2 font-bold cursor-pointer'>Make Offer</button></Link>
        </div>


        <div >
            <div className='border-b-2 flex justify-between py-2'>
                <p>Size</p>
                <p>{listingData.size}</p>
            </div>
            <div className='border-b-2 flex justify-between py-2'>
                <p>Condition</p>
                <p>{listingData.Condition}</p>
            </div>
            <div className='border-b-2 flex justify-between py-2'>
                <p>Color</p>
                <p>{listingData.Color}</p>
            </div>

            <p className='mt-1 font-light'>Listed 1 Day ago</p>

            <p className='mt-3'>
                <h3 className='font-bold'>Description</h3>
                {listingData.description}
            </p>

            <p className='mt-3'>
                <h3 className='font-bold'>Seller is looking to swap for:</h3>
                {listingData.swapDetails}
            </p>


            <div className='mt-3'>
                <div className='border-2 border-black p-3 flex items-center'>
                    <BsShieldCheck className='text-3xl mr-3'/>
                    <p>All purchases through Vinpop are covered by Buyer Protection.</p>
                </div>

                <div className='flex mt-3'>
                    <IoMdShirt className='text-2xl mr-2'/>
                    <span className='font-bold'>Got one like this?</span>
                </div>
                <p className=' text-blue-700 cursor-pointer mt-2'>Sell a similar item </p>
            </div>            
        </div>
        </div>

    </div>
    )
}

export default InfoLargeDevices