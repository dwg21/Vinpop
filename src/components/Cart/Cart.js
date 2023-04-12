import React from 'react';

import CartItem from './CartItem';

const Cart = () => {
    return (
    <div className=' bg-gray-200 h-[100vh] flex flex-col space-y-8' >
        <h2 className='pt-8 font-bold text-2xl pl-5'>Bag</h2>
        <CartItem />
        <CartItem />
        <CartItem />


    </div>
    )
}

export default Cart