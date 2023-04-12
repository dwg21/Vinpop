import React from 'react';
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'


const SearchMenu = ({setSearchMenuActive}) => {
    return (
    <div className='w-full h-full bg-white absolute p-5 z-50'>
        <div className='flex justify-between'>
            <p className='font-bold text-2xl'>Search</p>
            <AiOutlineClose className='text-2xl mr-2 cursor-pointer'  onClick={() => setSearchMenuActive(false)} />
        </div>

        <div className='pl-2 mt-5 border-2 justify-left items-center border-black	flex'>
                <AiOutlineSearch/>
                <input type="text"  placeholder="Search for items, brands, or styles.." className="flex w-[300px] py-2 px-1.5 font-epilogue font-normal text-[14px] placeholder:text-black dark:placeholder:text-[#4b5264] text-black dark:text-white bg-transparent outline-none	" />
        </div>

        <div className='mt-2'>
            <p className='text-zinc-500	'>Popular</p>
            <ul className='mt-1 '>
                <li className='px-3 py-2 hover:bg-gray-900 hover:text-white'>Mens shorts</li>
                <li className='px-3 py-2 hover:bg-gray-900 hover:text-white'>Jeans</li>
                <li className='px-3 py-2 hover:bg-gray-900 hover:text-white'>Leather Jacket</li>
                <li className='px-3 py-2 hover:bg-gray-900 hover:text-white'>Mens Boots</li>
            </ul>
        </div>

    </div>
    )
}

export default SearchMenu