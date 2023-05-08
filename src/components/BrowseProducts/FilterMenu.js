import React from 'react';
import {AiOutlineClose, AiOutlineArrowRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';


const FilterMenu = ({toggleMenu, filters, setFilters}) => {
    const navigate = useNavigate();

    const handleClick = (type, value) => {
        if (type === 'Category') {
            navigate('/browseProducts')
            setFilters({...filters, Category: value}) 
        }

        if (type === 'Subcategory') {
            navigate('/browseProducts')
            setFilters({...filters, Subcategory: value})  
        }

        if (type === 'Size') {
            navigate('/browseProducts')
            setFilters({...filters, Size: value})  
        }

        if (type === 'Color') {
            navigate('/browseProducts')
            setFilters({...filters, Color: value})  
        }

    }

    const handleClearAll = () => {
        setFilters({
            ...filters, 
            Category: '',
            Subcategory: '',
            Size: '',
            Color: ''
        
        })  
    };

    const handleExit = () => {
        handleClearAll()
        toggleMenu(false)
    }




    return (
    <div className='w-full bg-white fixed top-0 h-full pl-5 py-5 pr-8 z-50 flex flex-col overflow-y-scroll'>
        <div className='flex justify-between'>
            <p className='font-bold text-3xl'>Filter</p>
            <AiOutlineClose className='text-2xl mr-2 cursor-pointer'  onClick={() => handleExit()} />
        </div>

        <div className='border-b-2 pb-4 flex gap-2 mt-4'>
            <h2 className='font-bold text-2xl mb-1'>{filters.Category}</h2>
            <h2 className='font-bold text-2xl mb-1'>{filters.Subcategory}</h2>
            <h2 className='font-bold text-2xl mb-1'>{filters.Size}</h2>
            <h2 className='font-bold text-2xl mb-1'>{filters.Color}</h2>

        </div>

        <div className='mt-6 mr-4 flex-grow-1'>
            <ul className='space-y-4'>
                <div className='border-b-2 flex justify-between py-2 font-bold text-2xl'><li>Category</li> </div>
                <div>
                    <ul className='flex flex-col gap-3 '>
                        <li onClick={() => handleClick('Category', '')} className=' cursor-pointer flex items-center gap-2 text-xl'>All <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li onClick={() => handleClick('Category', 'Mens')}  className=' flex items-center gap-2 text-xl cursor-pointer'>Mens <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li  onClick={() => handleClick('Category', 'Womens')} className=' cursor-pointer flex items-center gap-2 text-xl'>Womens <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li  onClick={() => handleClick('Category', 'Accessories')} className=' cursor-pointer flex items-center gap-2 text-xl'>Accessories <AiOutlineArrowRight className=' text-lg' />  </li> 
                    </ul>
                </div>
                <div className='border-b-2 flex justify-between py-2  font-bold text-2xl'><li>Subcategory</li> </div>
                <ul className='flex flex-col gap-3 '>
                        <li onClick={() => handleClick('Subcategory', '')} className='cursor-pointer flex items-center gap-2 text-xl'>All <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li onClick={() => handleClick('Subcategory', 'Tops')}   className='cursor-pointer flex items-center gap-2 text-xl'>Tops <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li onClick={() => handleClick('Subcategory', 'Jeans')} className=' cursor-pointer flex items-center gap-2 text-xl'>Bottoms <AiOutlineArrowRight className='  text-lg' />  </li> 
                        <li onClick={() => handleClick('Subcategory', 'Jackets')} className='cursor-pointer flex items-center gap-2 text-xl'>Jackets <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li onClick={() => handleClick('Subcategory', 'Shorts')} className='cursor-pointer flex items-center gap-2 text-xl'>Shorts <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li onClick={() => handleClick('Subcategory', 'Shoes')} className='cursor-pointer flex items-center gap-2 text-xl'>Shoes <AiOutlineArrowRight className=' text-lg' />  </li> 


                    </ul>
                <div className='border-b-2 flex justify-between py-2 text-2xl font-bold'><li>Size</li> </div>
                        <li onClick={() => handleClick('Size', '')} className=' cursor-pointer flex items-center gap-2 text-xl'>All <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li onClick={() => handleClick('Size', 'S')} className='cursor-pointer flex items-center gap-2 text-xl'>S <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li onClick={() => handleClick('Size', 'M')} className='cursor-pointer flex items-center gap-2 text-xl'>M <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li onClick={() => handleClick('Size', 'L')} className='cursor-pointer flex items-center gap-2 text-xl'>L <AiOutlineArrowRight className=' text-lg' />  </li> 

                <div className='border-b-2 flex justify-between py-2 font-bold text-2xl  '><li>Color</li> </div>
                        <li onClick={() => handleClick('Color', '')} className='cursor-pointer flex items-center gap-2 text-xl'>All <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li onClick={() => handleClick('Color', 'Black')} className='cursor-pointer flex items-center gap-2 text-xl'>Black <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li onClick={() => handleClick('Color', 'Brown')} className='cursor-pointer flex items-center gap-2 text-xl'>Brown <AiOutlineArrowRight className=' text-lg' />  </li> 
                        <li onClick={() => handleClick('Color', 'Blue')} className='cursor-pointer flex items-center gap-2 text-xl '>Blue <AiOutlineArrowRight className=' text-lg' />  </li> 

            </ul>
        </div>

        <div className='flex mt-auto justify-center gap-3 align-bottom pt-6'>
            <button onClick={() => handleClearAll()} className=' border-2 border-black w-full py-2 font-bold'>Clear all</button>
            <button onClick={() => toggleMenu(false)} className=' bg-black  py-2 font-bold w-full text-white'>View items</button>
        </div>

    </div>  )
}

export default FilterMenu