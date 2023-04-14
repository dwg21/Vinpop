import React from 'react';
import {AiOutlineHeart, AiOutlineMail} from 'react-icons/ai';
import {RiStarSFill, RiStarSLine} from 'react-icons/ri';
import {BsFillTagFill, BsLightningChargeFill, BsShieldCheck}  from 'react-icons/bs';
import {IoMdShirt} from 'react-icons/io';
import profile from '../../data/images/profile.jpeg';


const InfoLargeDevices = ({listingData, sellerData}) => {
    return (
        <div className='stylings-larger-Devices p-4'>
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
            <span className='font-bold text-xl'>£{listingData.price}</span>
            <button className=' mt-4 border-2 border-black w-full py-2 font-bold cursor-pointer'>Buy Now</button>
            <button className=' mt-4 border-2 border-black w-full py-2 font-bold cursor-pointer'>Add to bag</button>
        </div>


        <div >
            <div className='border-b-2 flex justify-between py-2'>
                <p>Size</p>
                <p>{listingData.size}</p>
            </div>
            <div className='border-b-2 flex justify-between py-2'>
                <p>Condition</p>
                <p>{listingData.condition}</p>
            </div>
            <div className='border-b-2 flex justify-between py-2'>
                <p>Color</p>
                <p>{listingData.color}</p>
            </div>

            <p className='mt-1 font-light'>Listed 1 Day ago</p>

            <p className='mt-3'>
                UK POSTAGE - DISCOUNT ON BUNDLES
                Amazing brown distressed retro leather biker bomber zip up jacket - vintage - real leather - mens size M - shown on a size 8 who is 5”9 and fits oversized
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