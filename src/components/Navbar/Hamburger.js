import React from 'react';
import {AiOutlineClose, AiOutlineArrowRight} from 'react-icons/ai';
import {BsInstagram, BsTwitter,BsFacebook } from 'react-icons/bs';






const Hamburger = ({setHamburgerMenuActive}) => {
    return (
    <div className='w-[320px] h-full z-50 bg-white absolute  p-5 shadow-md overflow-y-auto'>
        <div className='flex justify-between align-middle'>
            <div className='flex space-x-3'>
                <BsInstagram className=' text-lg' />
                <BsTwitter className=' text-lg'  />
                <BsFacebook  className=' text-lg'/>
            </div>
            <AiOutlineClose className='text-2xl mr-2 cursor-pointer' onClick={() => setHamburgerMenuActive(false)}/>
        </div>

        <div className='flex flex-col space-y-4 text-xl mt-5 font-bold'  >
            <h2 className=' cursor-pointer'>Log in</h2>
            <h2 className=' cursor-pointer'>Sign up</h2>
            <h2 className=' cursor-pointer'>Get the app</h2>
            <div className='border-b-2'/>
        </div>

        <div>
            <h2 className=' my-4 text-lg font-bold'>Browse Vinpop</h2>
            <ul className='space-y-4'>
                <div className='border-b-2 flex justify-between py-2'><li>Menswear</li> <AiOutlineArrowRight className=' text-xl' /></div>
                <div className='border-b-2 flex justify-between py-2'><li>Womenswear</li> <AiOutlineArrowRight className=' text-xl' /></div>
                <div className='border-b-2 flex justify-between py-2'><li>Brands</li> <AiOutlineArrowRight className=' text-xl' /></div>
                <div className='border-b-2 flex justify-between py-2'><li>Beauty</li> <AiOutlineArrowRight className=' text-xl' /></div>
                <div className='border-b-2 flex justify-between py-2'><li>More</li> <AiOutlineArrowRight className=' text-xl' /></div>
            </ul>
        </div>

        <div>
            <h2 className=' my-4 text-lg font-bold '>More from Vinpop</h2>
            <div className='flex flex-row justify-between'>
                <div>
                    <ul className='text-sm space-y-3'>
                        <li>Sustainability</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Sell on Vinpop</li>
                        <li>Jobs</li>
                        <li>News</li>
                    </ul>
                </div>
                <div>
                <ul className='text-sm space-y-3 mr-10'>
                    <li>Support</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Safety</li>
                    <li>Sitemaps</li>
                    <li>Cookies</li>
                </ul>    

                </div>
            </div>
        </div>
    </div>
    )
}   

export default Hamburger