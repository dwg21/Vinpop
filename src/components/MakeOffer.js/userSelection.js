import React, {useState} from 'react';
import { TiTick } from 'react-icons/ti';

const UserSelection = ({listing, setListingSelected, listingSelected}) => {

    return (
    <div className=' relative'>

        
        <img onClick={() => setListingSelected(listing._id)}  src = {listing.image1} className='h-[180px] w-[180px] object-cover  ' alt=""  />

        {listingSelected === listing._id &&        
        <div>
            <div onClick={() => setListingSelected(null)} className='bg-black h-[180px] w-[180px] top-0 absolute opacity-70'>
            </div>
        <TiTick className='text-3xl z-20 absolute text-white top-[40%] left-[40%]'/>
        </div>
    
}
    </div>  )
}

export default UserSelection