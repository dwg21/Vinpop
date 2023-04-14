import {useState} from 'react';
import {RiArrowRightCircleFill, RiArrowLeftCircleFill} from 'react-icons/ri'



const ImageGallery = ({listingData}) => {
    const [imageIndex , setImageindex] = useState(0);

    // const {SingleListing} = listingData

    
    const productimages = [
        listingData.image1,
        listingData.image2,
        listingData.image3,
        listingData.image3,
    ]
    

    const controlIndex = (direction) => {
        if (direction === 'right') {
            if (imageIndex === 3 ) {
                setImageindex(0)
                return
            }
            setImageindex(imageIndex + 1 )
        } else if (direction === 'left') {
            if (imageIndex === 0 ) {
                setImageindex(3)
                return
            }
            setImageindex(imageIndex - 1 )
        }
    }



return (
    <div className=''>
            {/* <img src= '/images/product1/img2.jpeg' className='mouse-highlight cursor-pointer' alt='productImg' /> */}


        <div className='small-screen-gallery md:hidden'>
            <div className='relative '>
                <img src ={productimages[imageIndex]} />
                <RiArrowLeftCircleFill onClick = {() => controlIndex('left')} className=' top-[50%] left-5 absolute text-3xl cursor-pointer' />
                <RiArrowRightCircleFill onClick = {() => controlIndex('right')} className='top-[50%] right-5 absolute text-3xl cursor-pointer' />
            </div> 

            <div className='grid grid-cols-4 mt-2 gap-2'>
                <img onClick={() =>setImageindex(0)} className='cursor-pointer' src = {productimages[0]}  />
                <img onClick={() =>setImageindex(1)} className='cursor-pointer' src = {productimages[1]}  />
                <img onClick={() =>setImageindex(2)} className='cursor-pointer' src = {productimages[2]} />
                <img onClick={() =>setImageindex(3)} className='cursor-pointer' src = {productimages[3]}  />
            </div>           
        </div>

        <div className='large-screen-gallery flex-col space-y-4 max-w-4xl lg:max-w-6xl hidden md:flex'>
            <img src = {productimages[0]} />
            <img src = {productimages[1]} />
            <img src = {productimages[2]} />
            <img src = {productimages[3]} />



        </div>



    </div>

)
}

export default ImageGallery