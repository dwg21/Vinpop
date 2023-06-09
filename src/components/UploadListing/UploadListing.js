import React, { useState } from 'react'
import Dropdown from './Dropdown';
import PhotoUpload from './PhotoUpload';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createListing } from '../../Redux/listingSlice';

const UploadListing = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        size: "",
        description: "",
        swapDetails: "",
        Category: "",
        Subcategory: "",
        Brand: "",
        Condition: "",
        Color: "",
        Style: "",
        shippingPrice: "",
        productImg1: "",
        productImg2: "Not-Uploaded",
        productImg3: "Not-uploaded",
        productImg4: "Not-Uploaded"
    }) 


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handelSubmit = (e) => {
        e.preventDefault(); //stops reloading page
        dispatch(createListing(formData))
        navigate('/')
    }

    
    return (
    


    
    <div className='py-6 px-12 '>
        <div className=''>
            <h2 className='font-bold text-3xl border-b-2 py-5'>List an item</h2>
            <h3 className='font-bold text-xl py-4'>Photos</h3>
            <p className='mb-2 font-light'>Add up to 4 photos in JPEG format</p>
            <PhotoUpload
                formData= {formData}
                setFormData={setFormData}
            />


            <form className='flex flex-col gap-3'>
                < label for = 'description' className='font-bold text-xl pt-4 pb-1'>Description</label>
                <textarea
                    className='w-full border-2 border-black p-3'
                    id = 'description'
                    name = 'description'
                    rows = '6'
                    placeholder
                    ='Enter description of product here'
                    onChange={handleChange}
                />

            < label for = 'swapDetails' className='font-bold text-xl pt-4 pb-1'>Swap Details</label>
                <textarea
                    className='w-full border-2 border-black p-3'
                    id = 'swapDetails'
                    name = 'swapDetails'
                    rows = '6'
                    placeholder
                    ='What type of items are you looking to swap this for?'
                    onChange={handleChange}
                />

                < label for = 'title' className='font-bold text-xl pt-4 pb-1'>Title</label>
                <textarea
                    className='w-full border-2 border-black p-3'
                    id = 'title'
                    name = 'title'
                    rows = '2'
                    placeholder
                    ='Enter title of listing here'
                    onChange={handleChange}
                />

                <h3 className='font-bold text-xl mt-3' >Essential Info</h3>
                
                <h3 className='font-light'>Size</h3>
                <textarea
                    className='w-full border-2 border-black p-3'
                    id = 'size'
                    name = 'size'
                    rows = '1'
                    placeholder
                    ='Describe size of product here'
                    onChange={handleChange}
                />

                <Dropdown
                options= {['Mens', 'Womens', 'Unisex', 'Accessories']}
                title='Category'
                setFormData = {setFormData}
                formData = {formData}
                />

                <Dropdown
                options= {['Jeans', 'Trousers', 'Jackets', 'Tops', 'Shorts', 'Skirts', "Shoes", "Other"]}
                title='Subcategory'
                setFormData = {setFormData}
                formData = {formData}
                />

                <Dropdown
                options= {['Levis', 'Dickies', "Carhart", "Nike", "Adidas", 'Other']}
                title='Brand'
                setFormData = {setFormData}
                formData = {formData}
                />

                <Dropdown
                options= {['Like new', 'Used-Excellent', 'Used-Good', "Used-Fair"]}
                title='Condition'
                setFormData = {setFormData}
                formData = {formData}
                />


                <h3 className='font-bold text-xl mt-3 my-3' >Extra Info</h3>

                <Dropdown
                options= {['Black', 'Blue', 'Red', "Orange", "Purple", "White", "Brown", "Other"]}
                title='Color'
                setFormData = {setFormData}
                formData = {formData}
                />

                <Dropdown
                options= {['Sportswear', 'Casual', 'Retro', "Modern", "Indie", "vintage", "other"]}
                title='Style'
                setFormData = {setFormData}
                formData = {formData}
                />



            <button onClick={handelSubmit} className=' bg-black  py-2 font-bold w-full text-white my-4'>Submit Listing</button>

            </form>
        </div>
    </div>
    )
}

export default UploadListing