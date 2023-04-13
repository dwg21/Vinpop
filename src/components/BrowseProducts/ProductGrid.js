import React from 'react';

import {AiOutlineHeart} from 'react-icons/ai'


import img1 from '../../data/images/itempic1.jpeg';
import img2 from '../../data/images/product1/img1.jpeg';
import img3 from '../../data/images/product2/img1.jpeg';
import img4 from '../../data/images/product3/img1.jpeg';

const allProducts = [
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4
]





const ProductGrid = () => {
    return (
    <div className='py-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
        
{        allProducts.map((item, index) => (
        <div className='relative'>
            <img src={item} className='mouse-highlight cursor-pointer' alt='productImg' />
            <AiOutlineHeart className='text-2xl absolute bottom-1 right-1 z-50 cursor-pointer text-white'/>
        </div> )

)}
    
    
    </div>
    )
}

export default ProductGrid