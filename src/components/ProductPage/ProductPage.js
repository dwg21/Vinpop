import React from 'react';

import ImageGallery from './ImageGallery';

import profile from '../../data/images/profile.jpeg';


import InfoSmallDevices from './infoSmallDevices';
import InfoLargeDevices from './infoLargeDevices';

import itempic1 from '../../data/images/itempic1.jpeg';
import itempic2 from '../../data/images/itempic2.jpeg';
import itempic3 from '../../data/images/itempic3.jpeg';
import itempic4 from '../../data/images/itempic4.jpeg';


import item2pic1 from '../../data/images/product3/img1.jpeg'
import item2pic2 from '../../data/images/product3/img2.jpeg'
import item2pic3 from '../../data/images/product3/img3.jpeg'
import item2pic4 from '../../data/images/product3/img4.jpeg'


const listingData = {
    listingId: 36728,
    SellerId: 63737,
    Title: 'Womens Brown Jacket',
    Price: "135.00",
    Size: "M",
    Condition: 'Used - Excellent',
    Color: 'Brown',
    ListAge: "1 Day",
    Description:  ` UK POSTAGE - DISCOUNT ON BUNDLES
    Amazing brown distressed retro leather biker bomber zip up jacket - vintage - real leather - mens size M - shown on a size 8 who is 5”9 and fits oversized`,
    SellerName: "Emily Jones",
    Location : "Leeds, United Kingdom",
    Active: "Active Today",
    SellerReviews: '1662',
    SellerSales: '3583',
    img1: itempic1,
    img2: itempic2,
    img3: itempic3,
    img4: itempic4,
    profilePic: profile
}


const listingData2 = {
    listingId: 36727,
    SellerId: 63737,
    Title: 'Mens Carhart Trousers',
    Price: "50.00",
    Size: "L",
    Condition: 'Used - Excellent',
    Color: 'Brown',
    ListAge: "2 Day",
    Description:  ` UK POSTAGE - DISCOUNT ON BUNDLES
    Amazing brown distressed retro leather biker bomber zip up jacket - vintage - real leather - mens size M - shown on a size 8 who is 5”9 and fits oversized`,
    SellerName: "Emily Jones",
    Location : "Leeds, United Kingdom",
    Active: "Active Today",
    SellerReviews: '1662',
    SellerSales: '3583',
    img1: item2pic1,
    img2: item2pic2,
    img3: item2pic3,
    img4: item2pic4,
    profilePic: profile
}




const ProductPage = () => {
return (
    <div className='p-7 mt-10 flex flex-col md:flex-row '>
        <div className='mb-5 flex space-x-4 md:hidden'>
            <div>
                <img src ={listingData.profilePic} className='rounded-[50%] h-[50px]' />
            </div>
            <div>
                <p className='font-bold'>{listingData.SellerName}</p>
                <p className=' font-light'>{listingData.Location}</p>
            </div>
        </div>

        <ImageGallery listingData = {listingData} />
        
        <div className='md:hidden'>
            <InfoSmallDevices listingData = {listingData} />  
        </div>

        <div className='hidden md:block'>
            <InfoLargeDevices data = {listingData}/>
        </div>
        



    </div>

)
}

export default ProductPage