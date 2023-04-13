import React from 'react';
import {AiOutlineClose, AiOutlineArrowRight} from 'react-icons/ai'


const FilterMenu = ({toggleMenu}) => {
  return (
    <div className='w-full bg-white fixed top-0 h-full pl-5 py-5 pr-8 z-50 flex flex-col'>
        <div className='flex justify-between'>
            <p className='font-bold text-3xl'>Filter</p>
            <AiOutlineClose className='text-2xl mr-2 cursor-pointer'  onClick={() => toggleMenu(false)} />
        </div>

        <div className='mt-6 mr-4 flex-grow-1'>
            <ul className='space-y-4'>
                <div className='border-b-2 flex justify-between py-2 font-bold'><li>Category</li> <AiOutlineArrowRight className=' text-xl' /></div>
                <div className='border-b-2 flex justify-between py-2'><li>Subcategory</li> <AiOutlineArrowRight className=' text-xl' /></div>
                <div className='border-b-2 flex justify-between py-2'><li>Size</li> <AiOutlineArrowRight className=' text-xl' /></div>
                <div className='border-b-2 flex justify-between py-2'><li>Price</li> <AiOutlineArrowRight className=' text-xl' /></div>
                <div className='border-b-2 flex justify-between py-2'><li>Color</li> <AiOutlineArrowRight className=' text-xl' /></div>
            </ul>
        </div>

        <div className='flex mt-auto justify-center gap-3 align-bottom'>
          <button className=' border-2 border-black w-full py-2 font-bold'>Clear all</button>
          <button className=' bg-black  py-2 font-bold w-full text-white'>View items</button>
        </div>

    </div>  )
}

export default FilterMenu