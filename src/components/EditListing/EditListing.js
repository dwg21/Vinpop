import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Dropdown from '../UploadListing/Dropdown';
import { useDispatch } from 'react-redux';
import ServerApi from '../../serverApi/axios';

import { createListing } from '../../Redux/listingSlice';
import { tr } from 'date-fns/locale';

const EditListing = () => {
    const navigate = useNavigate()
    const params = useParams();
    const {id} = params;
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

    });
    const [listingDataLoaded, setLisitingDataLoaded] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handelSubmit = (e) => {
        e.preventDefault(); //stops reloading page
        editListing()
        
    }

    const handleDelete = (e) => {
        e.preventDefault(); //stops reloading page
        deleteListing()

    }

    const loadListing = async () => {
        try {
            const {data} = await ServerApi.get(
                `/api/v1/listing/${id}`,
                {headers: {'Content-Type': 'application/json'}}
            )
            const {SingleListing} = data  ;
            console.log(SingleListing)

            const {
                title,
                size,
                description,
                swapDetails,
                Category,
                Subcategory,
                Brand,
                Condition,
                Color,
                Style,

            } = SingleListing

            
            
            setFormData({                 
                title,
                size,
                description,
                swapDetails,
                Category,
                Subcategory,
                Brand,
                Condition,
                Color,
                Style,
                });

                setLisitingDataLoaded(true)


        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        if (!listingDataLoaded ) {
        loadListing()
        }
    }, [])


    const editListing = async () => {
        try {
            const {data} = await ServerApi.patch(
                `/api/v1/listing/${id}`,
                formData,
                {headers: {'Content-Type': 'application/json'}}
            )

            navigate(`/`)

            

        } catch (error) {
            console.log(error)
        }

    }

    const deleteListing = async () => {
        try {
            const {data} = await ServerApi.delete(
                `/api/v1/listing/${id}`,
                {headers: {'Content-Type': 'application/json'}}
            )

            navigate(`/`)

        } catch (error) {
            console.log(error)
        }

    }






    


    
    return (
    


    
    <div className='py-6 px-12 '>
        <div className=''>
            <h2 className='font-bold text-3xl border-b-2 py-5'>Edit your Listing</h2>

            <form className='flex flex-col gap-3'>
                < label for = 'description' className='font-bold text-xl pt-4 pb-1'>Description</label>
                <textarea
                    value={formData.description}
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
                    value={formData.swapDetails}
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
                    value={formData.title}
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
                    value={formData.size}
                    className='w-full border-2 border-black p-3'
                    id = 'size'
                    name = 'size'
                    rows = '1'
                    placeholder
                    ='Describe size of product here'
                    onChange={handleChange}
                />

                <Dropdown
                value = {formData.Category}
                options= {['Mens', 'Womens', 'Unisex', 'Accessories']}
                title='Category'
                setFormData = {setFormData}
                formData = {formData}
                />

                <Dropdown
                value = {formData.Subcategory}
                options= {['Jeans', 'Trousers', 'Jackets', 'Tops', 'Shorts', 'Skirts']}
                title='Subcategory'
                setFormData = {setFormData}
                formData = {formData}
                />

                <Dropdown
                value = {formData.Brand}
                options= {['Levis', 'Gucci', 'Other']}
                title='Brand'
                setFormData = {setFormData}
                formData = {formData}
                />

                <Dropdown
                value = {formData.Condition}
                options= {['Like new', 'Used-Excellent', 'Used-Good', "Used-Fair"]}
                title='Condition'
                setFormData = {setFormData}
                formData = {formData}
                />


                <h3 className='font-bold text-xl mt-3 my-3' >Extra Info</h3>

                <Dropdown
                value = {formData.Color}
                options= {['Black', 'Blue', 'Red', "Orange", "Purple", "White", "Brown", "Other"]}
                title='Color'
                setFormData = {setFormData}
                formData = {formData}
                />

                <Dropdown
                value = {formData.Style}
                options= {['Sportswear', 'Casual', 'Retro', "Modern", "Indie"]}
                title='Style'
                setFormData = {setFormData}
                formData = {formData}
                />



            <button onClick={handelSubmit} className=' bg-black  py-2 font-bold w-full text-white my-4'>Submit Changes</button>
            <button onClick={handleDelete}  className=' border-2 border-black  py-2 font-bold w-full  '>Delete Listing</button>

            </form>
        </div>
    </div>
    )
}

export default EditListing