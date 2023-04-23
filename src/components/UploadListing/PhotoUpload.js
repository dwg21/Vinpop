import { useState } from "react";


const PhotoUpload = ({formData, setFormData, }) => {

    const [imagePreviews, setImagePreviews] = useState({
        image1: "",
        image2: "",
        image3: "",
        image4: "",
    })


    const TransformFileData = (file, photoNumber) => {
        const reader = new FileReader();
    
        if (file) {
        reader.readAsDataURL(file);

        
        if (photoNumber === 1) {
            reader.onloadend = () => {
                setImagePreviews({ ...imagePreviews, ['image1']: reader.result});

            };
        }

        if (photoNumber === 2) {
            reader.onloadend = () => {
                setImagePreviews({ ...imagePreviews, ['image2']: reader.result});
            };
        }

        if (photoNumber === 3) {
            reader.onloadend = () => {
                setImagePreviews({ ...imagePreviews, ['image3']: reader.result});
            };
        };

        if (photoNumber === 4) {
            reader.onloadend = () => {
                setImagePreviews({ ...imagePreviews, ['image4']: reader.result});
            };
        };

        } 
    };

    const handleProductImageUpload1 = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, ['productImg1']: file});
        TransformFileData(file, 1);
    };

    const handleProductImageUpload2 = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, ['productImg2']: file});
        TransformFileData(file, 2);
    };

    const handleProductImageUpload3 = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, ['productImg3']: file});
        TransformFileData(file, 3);
    };
    const handleProductImageUpload4 = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, ['productImg4']: file});
        TransformFileData(file, 4);
    };



    return (
    <div className='p-4 flex flex-wrap gap-6 justify-center'>

    <label class="custom-file-upload">
        <input className='hidden' type="file" onChange={handleProductImageUpload1} accept="image/*" required />
        {imagePreviews.image1? 
            <img src={imagePreviews.image1} className='h-[180px] w-[180px]' alt="error!" />:
            <div className=' bg-slate-200 h-[180px] w-[180px] cursor-pointer flex justify-center items-center font-bold'>Add Photo 1</div>
        }
    </label>

    <label class="custom-file-upload">
        <input className='hidden' type="file" onChange={handleProductImageUpload2} accept="image/*" required />
        {imagePreviews.image2? 
            <img src={imagePreviews.image2} className='h-[180px] w-[180px]' alt="error!" />:
            <div className=' bg-slate-200 h-[180px] w-[180px] cursor-pointer flex justify-center items-center font-bold'>Add Photo 2</div>
        }
    </label>

    <label class="custom-file-upload">
        <input className='hidden' type="file" onChange={handleProductImageUpload3} accept="image/*" required />
        {imagePreviews.image3 ? 
            <img src={imagePreviews.image3} className='h-[180px] w-[180px]' alt="error!" />:
            <div className=' bg-slate-200 h-[180px] w-[180px] cursor-pointer flex justify-center items-center font-bold'>Add Photo 3</div>
        }
    </label>

    <label class="custom-file-upload">
        <input className='hidden' type="file" onChange={handleProductImageUpload4} accept="image/*" required />
        {imagePreviews.image4 ? 
            <img src={imagePreviews.image4} className='h-[180px] w-[180px]' alt="error!" />:
            <div className=' bg-slate-200 h-[180px] w-[180px] cursor-pointer flex justify-center items-center font-bold'>Add Photo 4</div>
        }
    </label>




        {/* <input
        className=''
        id="imgUpload"
        accept="image/*"
        type="file"
        onChange={handleProductImageUpload}
        required
        /> */}


    </div>
    
    )
}

export default PhotoUpload