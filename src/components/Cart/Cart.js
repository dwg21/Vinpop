import React from 'react';

import CartItem from './CartItem';


import profile from '../../data/images/profile.jpeg';
import itempic1 from '../../data/images/itempic1.jpeg';
import itempic2 from '../../data/images/itempic2.jpeg';
import itempic3 from '../../data/images/itempic3.jpeg';
import itempic4 from '../../data/images/itempic4.jpeg';


import {allListings} from '../../data/Listings/Listings';

//redux state import
import { useSelector } from 'react-redux';
import {selectAllItems} from '../../Redux/cartSlice';

const Cart = () => {
    const items = useSelector(selectAllItems);

    return (
    <div className=' bg-gray-200 h-[100vh] flex flex-col space-y-8' >
        <h2 className='pt-8 font-bold text-2xl pl-5'>Bag</h2>
        {allListings.map((item, index) => (
            <CartItem data = {item} key={index}/>
        ))}

        {items.map((item, index) => (
            <p>{item}</p>
        ))}
        
    </div>
    )
}

export default Cart