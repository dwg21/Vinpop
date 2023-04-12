import React from 'react';

import EditSection from './EditSection';
import bag from '../data/images/bag.jpeg';
import homepic1 from '../data/images/findstyle.jpg';
import homepic2 from '../data/images/homepagepic2.jpeg'



const Home = () => {
return (
    <div className='lg:flex lg:justify-center'>
        <div className='p-5 flex flex-col lg:max-w-[75%] '>
            <div className='flex flex-col overflow-x-scroll mb-8 mt-4 no-scroll-bar '>
                <ul className='flex mt-5 min-w-[900px]'>
                    <li className=' ml-auto mr-4 border-black border-2 px-4 py-2'>Puma Bags & Purses</li>
                    <li className='mr-4 border-black border-2 px-4 py-2'>Calvin Klein Boots</li>
                    <li className='mr-4 border-black border-2 px-4 py-2'>Mens Loafers</li>
                    <li className='mr-4 border-black border-2 px-4 py-2'>Nike Vests</li>
                    <li className='mr-auto border-black border-2 px-4 py-2'>Givency Slides</li>
                </ul>

                <ul className='flex mt-5  min-w-[900px]'>
                    <li className=' ml-auto mr-4 border-black border-2 px-4 py-2'>Zara Hoodies</li>
                    <li className='mr-4 border-black border-2 px-4 py-2'>Vinatge Shirts</li>
                    <li className='mr-4 border-black border-2 px-4 py-2'>Yeezy</li>
                    <li className='mr-4 border-black border-2 px-4 py-2'>Urban Orginal Bottoms</li>
                    <li className='mr-auto border-black border-2 px-4 py-2'>17London Jumpers</li>
                </ul>
                
            </div>

            <div className='pb-5'>
                <p className='font-bold mb-2'>TRENDING ON VINPOP</p>
                <div className='grid grid-cols-2 sm:grid-cols-4 space-x-4'>
                    <div className='pl-4'>
                        <img src= {bag} alt = "" />
                        <p className='font-bold text-lg text-center p-3'>Deals</p>
                    </div>
                    <div>
                        <img src= {bag} alt = '' />
                        <p className='font-bold text-lg text-center p-3'>Shirts</p>
                    </div>
                    <div>
                        <img src= {bag} alt = '' />
                        <p className='font-bold text-lg text-center p-3'>dresses</p>
                    </div>
                    <div>
                        <img src= {bag} alt = '' />
                        <p className='font-bold text-lg text-center p-3'>Jewellery</p>
                    </div>

                </div>
            </div>
            
            <EditSection/>

            <div className='mt-8 overflow-x-scroll '>
                <p className='font-bold mb-3'>Top Searches</p>
                <ul className=' space-x-4 flex overflow-y-scroll no-scroll-bar'>
                    <li >
                        <img src = {bag} className='rounded-[50%] min-w-[150px]'/>
                        <p className=' text-center font-bold mt-2'>Jaded London</p>
                    </li>
                    <li>
                        <img src = {bag} className='rounded-[50%] min-w-[150px]'/>
                        <p className=' text-center font-bold mt-2'>Jaded London</p>
                    </li>
                    <li>
                        <img src = {bag} className='rounded-[50%] min-w-[150px]'/>
                        <p className=' text-center font-bold mt-2'>Jaded London</p>
                    </li>
                    <li>
                        <img src = {bag} className='rounded-[50%] min-w-[150px]'/>
                        <p className=' text-center font-bold mt-2'>Jaded London</p>
                    </li>

                    <li>
                        <img src = {bag} className='rounded-[50%] min-w-[150px]'/>
                        <p className=' text-center font-bold mt-2'>Jaded London</p>
                    </li>
                </ul>

            </div>

            <div className='mt-6 flex flex-col sm:flex-row'>
                <img src = {homepic1} className='w-[400px]' />
                <div>
                    <h3 className='my-3 font-bold text-lg sm:mx-5'>Find Your Style</h3>
                    <p className='my-4  sm:mx-5'>Shop the biggest brands you know and love. Discover independent brands making waves and the creators behind them. Whatever you're into, find the item and the seller for you on Depop.</p>
                    <button className='bg-black px-4 py-2.5 mouse-highlight  sm:mx-5 text-white font-bold'>Shop now</button>                    
                </div>
            </div>

            <div className='mt-6 flex flex-col sm:flex-row'>
                <img src = {homepic2} className='w-[400px]' />
                <div>
                    <h3 className='my-3 font-bold text-lg sm:mx-5'>Sell Your way</h3>
                    <p className='my-4  sm:mx-5'>Shop the biggest brands you know and love. Discover independent brands making waves and the creators behind them. Whatever you're into, find the item and the seller for you on Depop.</p>
                    <button className='bg-black px-4 py-2.5 mouse-highlight  sm:mx-5 text-white font-bold'>Shop now</button>                    
                </div>
            </div>

            <div className='mt-5'>
                <p className='font-bold text-3xl pr-8 tracking-wide'>Be part of the community that's transforming fashion one item at a time.</p>
            </div>

        </div> 
    </div>
)
}

export default Home