import React from 'react';
import {AiOutlineHeart, AiOutlineMail} from 'react-icons/ai';
import {RiStarSFill, RiStarSLine} from 'react-icons/ri';
import {BsFillTagFill, BsLightningChargeFill, BsShieldCheck}  from 'react-icons/bs';
import {IoMdShirt} from 'react-icons/io';
import profile from '../../data/images/profile.jpeg';


const InfoSmallDevices = () => {
    return (
        <div className='stylings-smaller-Devices'>
        <div className='flex space-x-2 mt-2 '>
            <AiOutlineHeart className='text-3xl cursor-pointer'/>
            <AiOutlineMail className='text-3xl cursor-pointer' />
        </div>
        <h3 className='font-bold text-xl'>Women's Brown Jacket</h3>
        <span className='font-bold text-xl'>£135.00</span>

        <div >
            <div className='border-b-2 flex justify-between py-2'>
                <p>Size</p>
                <p>M</p>
            </div>
            <div className='border-b-2 flex justify-between py-2'>
                <p>Condition</p>
                <p>Used - Excellent</p>
            </div>
            <div className='border-b-2 flex justify-between py-2'>
                <p>Color</p>
                <p>Brown</p>
            </div>

            <button className=' mt-4 border-2 border-black w-full py-2 font-bold cursor-pointer'>Add to bag</button>

            <p className='mt-1 font-light'>Listed 1 Day ago</p>

            <p className='mt-3'>
                UK POSTAGE - DISCOUNT ON BUNDLES
                Amazing brown distressed retro leather biker bomber zip up jacket - vintage - real leather - mens size M - shown on a size 8 who is 5”9 and fits oversized
            </p>

            <div className='mt-3'>
                <div className='mb-5 flex space-x-4'>
                    <div>
                        <img src ={profile} className='rounded-[50%] h-[50px]' />
                    </div>
                <div>
                    <p className='font-bold'>Emily Jones</p>
                    <p className=' font-light'>Leeds, United Kingdom</p>
                    <div className='flex'>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSLine />
                        <p className=' text-xs'>(1662)</p>
                    </div>
                    <div className='flex mt-2'>
                        <BsFillTagFill className='mr-1'/><span className='mr-4 font-light'>3583 sold</span>
                        <BsLightningChargeFill className='mr-1'/><span>Active Today</span>
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