import React from 'react';
import {AiOutlineClose, AiOutlineArrowRight} from 'react-icons/ai';
import {BsInstagram, BsTwitter,BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';






const Hamburger = ({setHamburgerMenuActive, user, logout}) => {


    return (
    <div className='w-[320px] h-full z-50 bg-white fixed top-0   p-5 shadow-md overflow-y-auto'>
        <div className='flex justify-between align-middle'>
            <div className='flex space-x-3'>
                <BsInstagram className=' text-lg' />
                <BsTwitter className=' text-lg'  />
                <BsFacebook  className=' text-lg'/>
            </div>
            <AiOutlineClose className='text-2xl mr-2 cursor-pointer' onClick={() => setHamburgerMenuActive(false)}/>
        </div>

{     !user.loggedIn?  <div className='flex flex-col space-y-4 text-xl mt-5 font-bold'  >
            <Link onClick={() => setHamburgerMenuActive(false)} to = '/login'><h2 className=' cursor-pointer'>Log in</h2></Link>
            <Link onClick={() => setHamburgerMenuActive(false)} to = '/register'><h2 className=' cursor-pointer'>Sign up</h2></Link>
            <h2 className=' cursor-pointer'>Get the app</h2>
            <div className='border-b-2'/>
        </div>: 
        <div className='py-8 border-b-2'>
            <div className='flex space-x-2 items-center'>
                <div className=' flex rounded-[50%] text-xl w-[60px] h-[60px] bg-slate-500 p-2 font-bold justify-center items-center'>{user.name[0]}</div>
                <Link onClick={() => setHamburgerMenuActive(false)} to ='/userlistings'><h4 className='font-bold text-xl'>Your Listings</h4></Link>
            </div>
            <Link onClick={() => setHamburgerMenuActive(false)} to ='/uploadlisting'><h4 className='pt-4 font-bold text-xl'>Upload lisiting</h4></Link>
        </div>
        }

        <div>
            <h2 className=' my-4 text-lg font-bold'>Browse Vinpop</h2>
            <ul className='space-y-4'>
                <Link onClick={() => setHamburgerMenuActive(false)} to = '/browseProducts/mens'><div className='border-b-2 flex justify-between py-2'><li>Menswear</li> <AiOutlineArrowRight className=' text-xl' /></div></Link>
                <Link onClick={() => setHamburgerMenuActive(false)} to = '/browseProducts/womens'><div className='border-b-2 flex justify-between py-2'><li>Womenswear</li> <AiOutlineArrowRight className=' text-xl' /></div></Link>
                <Link onClick={() => setHamburgerMenuActive(false)} to = '/browseProducts/Accessories'><div className='border-b-2 flex justify-between py-2'><li>Accessories</li> <AiOutlineArrowRight className=' text-xl' /></div></Link>
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
            <button onClick={() => logout()} className='py-4 font-bold text-xl cursor-pointer' >Log out</button>
        </div>
    </div>
    )
}   

export default Hamburger