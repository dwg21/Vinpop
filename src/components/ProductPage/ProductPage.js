import React from 'react';

import ImageGallery from './ImageGallery';

import profile from '../../data/images/profile.jpeg';


import InfoSmallDevices from './infoSmallDevices';
import InfoLargeDevices from './infoLargeDevices';




const ProductPage = () => {
return (
    <div className='p-7 mt-10 flex flex-col md:flex-row '>
        <div className='mb-5 flex space-x-4 md:hidden'>
            <div>
                <img src ={profile} className='rounded-[50%] h-[50px]' />
            </div>
            <div>
                <p className='font-bold'>Emily Jones</p>
                <p className=' font-light'>Leeds, United Kingdom</p>
            </div>
        </div>

        <ImageGallery />
        
        <div className='md:hidden'>
            <InfoSmallDevices />  
        </div>

        <div className='hidden md:block'>
            <InfoLargeDevices/>
        </div>
        



    </div>

)
}

export default ProductPage