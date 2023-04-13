import React from 'react';

// icon imports
import {AiOutlineHeart, AiOutlineMail} from 'react-icons/ai';
import {RiStarSFill, RiStarSLine} from 'react-icons/ri';
import {BsFillTagFill, BsLightningChargeFill, BsShieldCheck}  from 'react-icons/bs';
import {IoMdShirt} from 'react-icons/io';

// redux imports 
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/cartSlice';


const InfoSmallDevices = ({listingData}) => {

    const dispatch = useDispatch() ;

    const handleAddItem = () => {
    dispatch(addProduct({id: listingData.listingId}))
    }



    return (
        <div className='stylings-smaller-Devices'>
        <div className='flex space-x-2 mt-2 '>
            <AiOutlineHeart className='text-3xl cursor-pointer'/>
            <AiOutlineMail className='text-3xl cursor-pointer' />
        </div>
        <h3 className='font-bold text-xl'>{listingData.SellerName}</h3>
        <span className='font-bold text-xl'>£{listingData.Price}</span>

        <div >
            <div className='border-b-2 flex justify-between py-2'>
                <p>Size</p>
                <p>{listingData.Size}</p>
            </div>
            <div className='border-b-2 flex justify-between py-2'>
                <p>Condition</p>
                <p>{listingData.Condition}</p>
            </div>
            <div className='border-b-2 flex justify-between py-2'>
                <p>Color</p>
                <p>{listingData.Color}</p>
            </div>

            <button onClick={() => handleAddItem()} className=' mt-4 border-2 border-black w-full py-2 font-bold cursor-pointer'>Add to bag</button>

            <p className='mt-1 font-light'>Listed {listingData.ListAge} ago</p>

            <p className='mt-3'>
                {listingData.Description}
            </p>

            <div className='mt-3'>
                <div className='mb-5 flex space-x-4'>
                    <div>
                        <img src ={listingData.profilePic} className='rounded-[50%] h-[50px]' />
                    </div>
                <div>
                    <p className='font-bold'>{listingData.SellerName}</p>
                    <p className=' font-light'>{listingData.Location}</p>
                    <div className='flex'>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSLine />
                        <p className=' text-xs'>({listingData.SellerReviews})</p>
                    </div>
                    <div className='flex mt-2'>
                        <BsFillTagFill className='mr-1'/><span className='mr-4 font-light'>{listingData.SellerSales} sold</span>
                        <BsLightningChargeFill className='mr-1'/><span>{listingData.Active}</span>
                    </div>
            </div>

            </div>

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

export default InfoSmallDevices