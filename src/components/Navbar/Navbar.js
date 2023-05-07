import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ServerApi from '../../serverApi/axios';
import {AiOutlineSearch, AiOutlineMenu, AiFillHeart, AiFillMessage} from 'react-icons/ai'
import SearchMenu from './SearchMenu';
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom';


import { useDispatch, useSelector } from "react-redux";
import {selectUser, addUserState} from '../../Redux/userSlice';

import {changeParam } from '../../Redux/searchSlice';



import {FaUserCircle} from 'react-icons/fa'





const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchTerms, setSearchTerms] = useState('');

    const handleChange = (e) => {
        setSearchTerms(e.target.value)
    }

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            dispatch(changeParam(searchTerms))
            navigate('/browseProducts') 
        }
    }

    const logout = async () => {
        
        try {
            setActiveUserDropDown(false)
            const result = await ServerApi.get(
                'api/v1/auth/logout',
                {headers: {'Content-Type': 'application/json'}}
            )
            dispatch(addUserState({
                name: "",
                loggedIn: false
            }))
            setHamburgerMenuActive(false)
            navigate('/')
            window.location.reload();



        } catch (error) {
            console.log(error)
        }
    }




    const [activeDropDown, setActiveDropdown] = useState('');
    const [activeUserDropDown, setActiveUserDropDown] = useState(false);

    const [searchMenuActive, setSearchMenuActive] = useState(false);
    const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);
    const user = useSelector(selectUser);


return (
    <div className='fixed top-0 w-full bg-white z-50'>
        {searchMenuActive && <SearchMenu setSearchMenuActive = {setSearchMenuActive} /> }
        {hamburgerMenuActive && <Hamburger setHamburgerMenuActive = {setHamburgerMenuActive} user = {user} logout = {logout} />}

        <div>
            <div className='flex justify-around pt-4 pb-2 align-middle'>
                <AiOutlineMenu onClick={() => setHamburgerMenuActive(true)}  className='text-3xl  md:hidden cursor-pointer' />

                <Link to ='/'><h2 className='font-extrabold text-red-500 text-2xl mr-6 '>VinSwap</h2></Link>
                <div className='pl-2  border-2 justify-center items-center border-black	hidden md:flex'>
                    <AiOutlineSearch/>
                    <input type="text" value = {searchTerms} onChange={handleChange} onKeyDown={handleSubmit} placeholder="Search for items, brands, or styles.." className="flex w-[300px] py-2 px-1.5 font-epilogue font-normal text-[14px] placeholder:text-black dark:placeholder:text-[#4b5264] text-black dark:text-white bg-transparent outline-none	" />
                </div>

                <div  className='flex'>
                    <AiOutlineSearch onClick={()=> setSearchMenuActive(true)} className = 'text-2xl mr-3 md:hidden cursor-pointer'/>
                    
                    {user.loggedIn? <>

                    <Link to ='/offers'><AiFillMessage className='text-2xl mx-3'  /> </Link>
                    <Link to ='/favorites'><AiFillHeart className='text-2xl mx-3' /></Link>
                    
                    <FaUserCircle onClick={() => setActiveUserDropDown(!activeUserDropDown)} className='cursor-pointer text-2xl ml-3 mr-6 hidden md:block relative'/>
                    
{                       activeUserDropDown &&
                        <ul className=' z-20 pt-2  absolute top-[60px] right-6 w-[200px] bg-white '>
                        <Link onClick={() => setActiveUserDropDown(false)} to = '/userListings'><li className='px-3 py-3 border-2 relative bg-white hover:bg-gray-200 flex justify-between w-full'>View Listings</li></Link>
                        <Link onClick={() => setActiveUserDropDown(false)} to ='/uploadlisting'><li  className=' cursor-pointer px-3 py-3 border-2 relative bg-white hover:bg-gray-200 flex justify-between w-full '>Create Listing</li></Link>
                        <li onClick={() => logout()} className=' cursor-pointer px-3 py-3 border-2 relative bg-white hover:bg-gray-200 flex justify-between w-full '>Logout</li>

                    </ul>}
                


                    </> : <>
                
            
                    
                    <Link to = '/register'><div className='mr-3 py-1 px-3.5 h-[90%] bg-black cursor-pointer'><p className='text-white font-bold'>Sign Up</p></div></Link>
                    
                    
                    <Link to = "/login"><p className='p-1 font-bold cursor-pointer'>Log in</p> </Link></>}
                    
                    
                </div>
            </div>
        </div>
        
        <div className=' justify-start gap-3 px-3 border-t-2 hidden md:flex'>
        
        <div className='w-[110px]' onMouseEnter={() => setActiveDropdown('menswear')} onMouseLeave={() => setActiveDropdown(null)}>
                <div  className='font-bold hover:bg-gray-900  hover:text-white py-3 px-4 cursor-pointer]'>Menswear</div>
            {      activeDropDown === 'menswear' &&         
                    <ul className='border w-[250px] absolute z-20  '>
                        <Link to = '/browseProducts/mensAll'><li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Shop all</li></Link>
                        <Link to ='/browseProducts/menstops'><li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Tops</li></Link>
                        <Link to = '/browseProducts/mensbottoms'><li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Bottoms</li></Link>
                        <Link to = '/browseProducts/mensjackets'><li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Jackets</li></Link>
                        <Link to = '/browseProducts/mensshorts'><li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Shorts</li></Link>
                        <Link to = '/browseProducts/mensshoes'><li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Shoes</li></Link>
                    </ul>
            }
            
            </div>            
            <div className='w-[130px]' onMouseEnter={() => setActiveDropdown('womenswear')} onMouseLeave={() => setActiveDropdown(null)}>
                <div  className='font-bold hover:bg-gray-900 hover:text-white py-3 px-4 cursor-pointer'>Womenswear</div>
            {      activeDropDown === 'womenswear' &&         
                    <ul className='border w-[250px] absolute z-20 '>
                        <Link to = '/browseProducts/womensAll'><li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Shop all</li></Link>
                        <Link to ='/browseProducts/womenstops'><li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Tops</li></Link>
                        <Link to = '/browseProducts/womensbottoms'><li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Bottoms</li></Link>
                        <Link to = '/browseProducts/womensjackets'><li className='px-3 py-3 border-b-2 relative bg-white hover:bg-gray-900	 hover:text-white'>Jackets</li></Link>
                        <Link to = '/browseProducts/womensshorts'><li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Shorts</li></Link>
                        <Link to = '/browseProducts/womensshoes'><li className='px-3 py-3 border-b-2 relative  bg-white hover:bg-gray-900	 hover:text-white'>Shoes</li></Link>
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