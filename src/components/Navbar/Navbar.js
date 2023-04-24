import React, {useState} from 'react';
import {AiOutlineSearch, AiOutlineMenu, AiFillHeart} from 'react-icons/ai'
import SearchMenu from './SearchMenu';
import Hamburger from './Hamburger'
import ShoppingCartBadge from './ShoppingCartBadge'
import { Link } from 'react-router-dom';


import { useDispatch, useSelector } from "react-redux";
import {selectUser} from '../../Redux/userSlice';



const Navbar = () => {
    const [activeDropDown, setActiveDropdown] = useState('');
    const [searchMenuActive, setSearchMenuActive] = useState(false);
    const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);
    const user = useSelector(selectUser);
    console.log(user)


return (
    <div className='fixed top-0 w-full bg-white z-50'>
        {searchMenuActive && <SearchMenu setSearchMenuActive = {setSearchMenuActive} /> }
        {hamburgerMenuActive && <Hamburger setHamburgerMenuActive = {setHamburgerMenuActive} user = {user} />}

        <div>
            <div className='flex justify-around pt-4 pb-2 align-middle'>
                <AiOutlineMenu onClick={() => setHamburgerMenuActive(true)}  className='text-3xl  md:hidden cursor-pointer' />

                <Link to ='/'><h2 className='font-extrabold text-red-500 text-2xl mr-6 '>VinPoP</h2></Link>
                <div className='pl-2  border-2 justify-center items-center border-black	hidden md:flex'>
                    <AiOutlineSearch/>
                    <input type="text"  placeholder="Search for items, brands, or styles.." className="flex w-[300px] py-2 px-1.5 font-epilogue font-normal text-[14px] placeholder:text-black dark:placeholder:text-[#4b5264] text-black dark:text-white bg-transparent outline-none	" />
                </div>

                <div  className='flex'>
                    <AiOutlineSearch onClick={()=> setSearchMenuActive(true)} className = 'text-2xl mr-3 md:hidden cursor-pointer'/>
                    
                    {user.loggedIn? <> 
                    <Link to ='/favorites'><AiFillHeart className='text-2xl mx-3' /></Link>
                    <Link to = '/bag'><ShoppingCartBadge /></Link>  </> : <>
            
                    
                    <div className='mr-3 py-1 px-3.5 h-[90%] bg-black cursor-pointer'><p className='text-white font-bold'>Sign Up</p></div>
                    
                    
                    <p className='p-1 font-bold cursor-pointer'>Log in</p> </>}
                    
                    
                </div>
            </div>
        </div>
        
        <div className=' justify-start gap-3 px-3 border-t-2 hidden md:flex'>
        
        <div className='w-[110px]' onMouseEnter={() => setActiveDropdown('menswear')} onMouseLeave={() => setActiveDropdown(null)}>
                <div  className='font-bold hover:bg-gray-900  hover:text-white py-3 px-4 cursor-pointer]'>Menswear</div>
            {      activeDropDown === 'menswear' &&         
                    <ul className='border w-[250px] absolute z-20  '>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Shop all</li>
                        <li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Tops</li>
                        <li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Bottoms</li>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Underwear</li>
                        <li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Outerwear</li>
                        <li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Shoes</li>
                    </ul>
            }
            
            </div>            
            <div className='w-[130px]' onMouseEnter={() => setActiveDropdown('womenswear')} onMouseLeave={() => setActiveDropdown(null)}>
                <div  className='font-bold hover:bg-gray-900 hover:text-white py-3 px-4 cursor-pointer'>Womenswear</div>
            {      activeDropDown === 'womenswear' &&         
                    <ul className='border w-[250px] absolute z-20 '>
                        <li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Shop all</li>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Tops</li>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Bottoms</li>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Underwear</li>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Outerwear</li>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Shoes</li>
                    </ul>
            }
            
            </div>

            <div className='w-[100px]' onMouseEnter={() => setActiveDropdown('brands')} onMouseLeave={() => setActiveDropdown(null)}>
                <div  className='font-bold hover:bg-gray-900	 hover:text-white py-3 px-4 cursor-pointer'>Brands</div>
            {      activeDropDown === 'brands' &&         
                    <ul className='border w-[250px] absolute'>
                        <li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Shop all</li>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Tops</li>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Bottoms</li>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Underwear</li>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Outerwear</li>
                        <li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Shoes</li>
                    </ul>
            }
            
            </div>
            

        
        
        </div>
        <div className='border-b-2' />
        
    </div>
)
}

export default Navbar