import {useEffect, useState} from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import ServerApi from '../../serverApi/axios';
const UserDataUrl = 'api/v1/listing'


const ProductGrid = () => {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const  {data} = await ServerApi.get(
                UserDataUrl,
                {headers: {'Content-Type': 'application/json'}}
                ) 
                setListings(data.Listings)
                console.log(data.Listings)
                }
            catch (error) {
                console.log(error)
            }
        }
        getUserData()
    }, [])

    
    return (
    <div>

        {listings && 
        <div className='py-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
    {        listings.map((item, index) => (
            <div className='relative' key={index}>
                <Link to = {`/listing/${item.id}`}>
                <img src= {item.image1} className='mouse-highlight cursor-pointer' alt='productImg' />
                <AiOutlineHeart className='text-2xl absolute bottom-1 right-1 z-50 cursor-pointer text-white'/>
                </Link>
            </div> )
    )}
        </div>  }
    </div>
    )       
    
}

export default ProductGrid