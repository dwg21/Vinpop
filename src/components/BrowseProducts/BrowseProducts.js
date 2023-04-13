import {useState} from 'react';

import {FaSlidersH} from 'react-icons/fa';
import {RiArrowUpDownFill} from 'react-icons/ri';

import FilterMenu from './FilterMenu'
import ProductGrid from './ProductGrid';

const BrowseProducts = () => {
    
    const [sortMenuActive, setSortMenuActive] = useState(false);

    const [sortActive, setSortActive] = useState('relevance');

    const [filterMenuActive, setFilterMenuActive] = useState(false);

    const handleSortChange = (sortBy) => {
        setSortActive(sortBy);
        setSortMenuActive(false);
    }


return (
    <div className='my-8 mx-4'>
        {
            filterMenuActive && <FilterMenu toggleMenu = {setFilterMenuActive} />
        }




        <div className='border-b-2 pb-4'>
            <h2 className='font-bold text-2xl mb-1'>All Clothing</h2>
            <p>(2045 results)</p>
        </div>

        <div className='flex justify-center font-bold text-xl px-[20%] mt-5 items-center'>
            <div onClick={() => setFilterMenuActive(true)} className='flex gap-3 items-center hover:bg-gray-200 py-2 px-20  cursor-pointer'>
                <FaSlidersH />
                <span>Filter</span>                
            </div>

            
            <div>
                <span className='border-r-2 h-[40px]' />
                { sortMenuActive &&
                <ul className='border w-[200px] absolute z-20 font-light mt-3  '>
                        <li onClick={() => handleSortChange('relevance')} className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer  ${sortActive === 'relevance' && 'font-semibold'}  `} >Relevance</li>
                        <li onClick={() => handleSortChange('lth')} className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer  ${sortActive === 'lth' && 'font-semibold'}  `}>Price: low to high</li>
                        <li onClick={() => handleSortChange('htl')} className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer  ${sortActive === 'htl' && 'font-semibold'}  `}>Price: high to low</li>
                        <li onClick={() => handleSortChange('mp')} className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer  ${sortActive === 'mp' && 'font-semibold'}  `}>Most popular</li>
                        <li onClick={() => handleSortChange('nw')} className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer  ${sortActive === 'nl' && 'font-semibold'}  `}>Newly Listed</li>
                    </ul>

                }
            </div>

                <div onClick={() => setSortMenuActive(!sortMenuActive)} className='flex gap-3 items-center hover:bg-gray-200 py-2 px-20 cursor-pointer '>
                    <RiArrowUpDownFill /> 
                    <span>Sort</span>
            </div>
        </div>

        <ProductGrid />



    </div>
)
}

export default BrowseProducts