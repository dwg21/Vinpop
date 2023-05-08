import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { changeParam } from '../../Redux/searchSlice';

const SearchMenu = ({setSearchMenuActive}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchTerms, setSearchTerms] = useState('');

    const handleChange = (e) => {
        setSearchTerms(e.target.value)
    }

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            dispatch(changeParam(searchTerms))
            navigate('/browseProducts') 
            setSearchMenuActive(false)
        }

    }

    const handleSuggestion = (suggestion) => {
            dispatch(changeParam(suggestion))
            navigate('/browseProducts') 
            setSearchMenuActive(false)
        
    }





    
    return (
    <div className='w-full bg-white fixed top-0 h-full p-5 z-50 '>
        <div className='flex justify-between'>
            <p className='font-bold text-2xl'>Search</p>
            <AiOutlineClose className='text-2xl mr-2 cursor-pointer'  onClick={() => setSearchMenuActive(false)} />
        </div>

        <div className='pl-2 mt-5 border-2 justify-left items-center border-black	flex'>
                <AiOutlineSearch/>
                <input onKeyDown={handleSubmit} onChange={handleChange} type="text" value={searchTerms} placeholder="Search for items, brands, or styles.." className="flex w-[300px] py-2 px-1.5 font-epilogue font-normal text-[14px] placeholder:text-black dark:placeholder:text-[#4b5264] text-black dark:text-white bg-transparent outline-none	" />
        </div>

        <div className='mt-2'>
            <p className='text-zinc-500	'>Popular</p>
            <ul className='mt-1 '>
                <li onClick={() => handleSuggestion('SportsWear')} className=' cursor-pointer px-3 py-2 hover:bg-gray-900 hover:text-white'>SportsWear</li>
                <li onClick={() => handleSuggestion('Nike')} className=' cursor-pointer px-3 py-2 hover:bg-gray-900 hover:text-white'>Nike</li>
                <li onClick={() => handleSuggestion('Leather')} className=' cursor-pointer px-3 py-2 hover:bg-gray-900 hover:text-white'>Leather</li>
                <li onClick={() => handleSuggestion('Jeans')} className=' cursor-pointer px-3 py-2 hover:bg-gray-900 hover:text-white'>Jeans</li>
            </ul>
        </div>

    </div>
    )
}

export default SearchMenu