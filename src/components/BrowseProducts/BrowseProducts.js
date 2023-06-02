import {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'


// icons import
import {FaSlidersH} from 'react-icons/fa';
import {RiArrowUpDownFill} from 'react-icons/ri';

import FilterMenu from './FilterMenu'
import ProductGrid from './ProductGrid';

import {AiOutlineDown} from 'react-icons/ai'
import {MdOutlineCancel} from 'react-icons/md'

import {selectSearchState, changeParam} from '../../Redux/searchSlice';

//Custom axios request import



const BrowseProducts = () => {
    const {param} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchParam = useSelector(selectSearchState);


    const [sortMenuActive, setSortMenuActive] = useState(false);
    const [sortActive, setSortActive] = useState('relevance');
    const [filterMenuActive, setFilterMenuActive] = useState(false);
    const [filterOption, setFilterOption] = useState('All Clothing');

    

    const [filters, setFilters] = useState( {
        Category: '',
        Subcategory: '',
        Size: '',
        Color: ''
    })

    const [categoryActive, setCategoryActive] = useState(false);

    const handleCategoryClick = (Category) => {
        navigate('/browseProducts')
        setCategoryActive(false)
        setFilters({...filters, Category: Category}) 
        console.log(filters)

    }

    const [subcategoryActive, setSubcategoryActive] = useState(false);

    const handleSubcategoryClick = (Subcategory) => {
        navigate('/browseProducts')
        setSubcategoryActive(false)
        setFilters({...filters, Subcategory: Subcategory}) 

    }

    const [sizeActive, setSizeActive] = useState(false);

    const handleSizeClick = (size) => {
        navigate('/browseProducts')
        setSizeActive(false)
        setFilters({...filters, Size: size}) 

    }

    const [colorActive, setColorActive] = useState(false);

    const handleColorClick = (color) => {
        navigate('/browseProducts')
        setColorActive(false)
        setFilters({...filters, Color: color}) 

    }


    


    const handleSortChange = (sortBy) => {
        setSortActive(sortBy);
        setSortMenuActive(false);
    }

    if (param === 'mensAll' && filterOption !== 'Mens' ) {
        setFilterOption('Mens')
    }

    const handleClearResults = () => {
        dispatch(changeParam(null))
    }




return (
    <div className='my-8 mx-4'>
        {
            filterMenuActive && <FilterMenu toggleMenu = {setFilterMenuActive} filters = {filters} setFilters={setFilters} />
        }

{        searchParam && <div className= 'flex items-center space-x-3 mb-4'>
            <p className ='font-bold text-xl'>Search Results: </p>
            <span className = ' text-xl pr-3 '>{searchParam}</span>
            <span onClick = {() => handleClearResults()} className = 'border-2 border-black px-2 py-1 rounded-md  cursor-pointer'>Clear Results</span>
        </div>}


        <div className='border-b-2 pb-4 flex gap-2'>
            {filters.Category && <div onClick={() => handleCategoryClick('')} className='font-bold text-2xl mb-1 border-2 border-black px-3 py-1 rounded-lg flex items-center gap-2'>{filters.Category} <MdOutlineCancel /> </div>}
            {filters.Subcategory && <div onClick={() => handleSubcategoryClick('')} className='font-bold text-2xl mb-1 border-2 border-black px-3 py-1 rounded-lg flex items-center gap-2'>{filters.Subcategory} <MdOutlineCancel /> </div>}
            {filters.Size && <div onClick={() => handleSizeClick('')} className='font-bold text-2xl mb-1 border-2 border-black px-3 py-1 rounded-lg flex items-center gap-2'>{filters.Size} <MdOutlineCancel /> </div>}
            {filters.Color && <div onClick={() => handleColorClick('')} className='font-bold text-2xl mb-1 border-2 border-black px-3 py-1 rounded-lg flex items-center gap-2'>{filters.Color} <MdOutlineCancel /> </div>}

        </div>

        <div className='flex justify-center font-bold text-xl px-[20%] mt-5 items-center md:hidden'>
            <div onClick={() => setFilterMenuActive(true)} className='flex gap-3 items-center hover:bg-gray-200 py-2 px-20  cursor-pointer'>
                <FaSlidersH />
                <span>Filter</span>                
            </div>

            
            <div>
                <span className='border-r-2 h-[40px]' />
                { sortMenuActive &&
                <ul className='border w-[200px] absolute z-20 font-light mt-3  '>
                        <li onClick={() => handleSortChange('az')} className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer  ${sortActive === 'az' && 'font-semibold'}  `} >A to Z</li>
                        <li onClick={() => handleSortChange('za')} className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer  ${sortActive === 'za' && 'font-semibold'}  `}>Z to A</li>
                    </ul>

                }
            </div>

                <div onClick={() => setSortMenuActive(!sortMenuActive)} className='flex gap-3 items-center hover:bg-gray-200 py-2 px-20 cursor-pointer '>
                    <RiArrowUpDownFill /> 
                    <span>Sort</span>
            </div>
        </div>

        <div className=' gap-6 hidden md:flex mt-4'>

            <div>
                <button onClick={() => setCategoryActive(!categoryActive)} className='border-2 rounded-md px-6 py-1 border-black flex items-center gap-2'>Category <AiOutlineDown/></button>
                
    {           categoryActive &&
                <ul className='border w-[200px] absolute z-20 font-light mt-3  '>
                            <li onClick={() => handleCategoryClick('Mens')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >All</li>
                            <li onClick={() => handleCategoryClick('Mens')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >Mens</li>
                            <li onClick={() => handleCategoryClick('Womens')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer   `}>Womens</li>
                            <li onClick={() => handleCategoryClick('Accessories')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer `}>Accessories</li>
                </ul>}
            </div>


            <div >
                <button onClick={() => setSubcategoryActive(!categoryActive)} className='border-2 rounded-md px-6 py-1 border-black flex items-center gap-2'>SubCategories<AiOutlineDown/></button>
                
                {           subcategoryActive &&
                            <ul className='border w-[200px] absolute z-20 font-light mt-3  '>
                                        <li onClick={() => handleSubcategoryClick('')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >All</li>
                                        <li onClick={() => handleSubcategoryClick('Tops')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >Tops</li>
                                        <li onClick={() => handleSubcategoryClick('Bottoms')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `}>Bottoms</li>
                                        <li onClick={() => handleSubcategoryClick('Jackets')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `}>Jackets</li>
                                        <li onClick={() => handleSubcategoryClick('Shorts')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `}>Shorts</li>
                                        <li onClick={() => handleSubcategoryClick('Shoes')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `}>Shoes</li>


                            </ul>}                
            </div>


            <div>
                <button onClick={() => setSizeActive(!categoryActive)} className='border-2 rounded-md px-6 py-1 border-black flex items-center gap-2'>Size<AiOutlineDown/></button>
                
                {           sizeActive &&
                            <ul className='border w-[200px] absolute z-20 font-light mt-3  '>
                                        <li onClick={() => handleSizeClick('')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >All</li>
                                        <li onClick={() => handleSizeClick('S')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >S</li>
                                        <li onClick={() => handleSizeClick('M')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >M</li>
                                        <li onClick={() => handleSizeClick('L')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >L</li>




                            </ul>}                
            </div>


            <div>
                <button onClick={() => setColorActive(!categoryActive)} className='border-2 rounded-md px-6 py-1 border-black flex items-center gap-2'>Color<AiOutlineDown/></button>
                
                {           colorActive &&
                            <ul className='border w-[200px] absolute z-20 font-light mt-3  '>
                                <li onClick={() => handleColorClick('')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >All</li>
                                <li onClick={() => handleColorClick('Black')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >Black</li>
                                <li onClick={() => handleColorClick('Blue')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >Blue</li>
                                <li onClick={() => handleColorClick('Brown')}  className={`px-3 py-2 border-b-2 relative bg-white hover:bg-gray-200 cursor-pointer    `} >Brown</li>




                            </ul>}                
            </div>


            
        </div>

        <ProductGrid filters = {filters} setFilters = {setFilters} sort = {sortActive} />



    </div>
)
}

export default BrowseProducts