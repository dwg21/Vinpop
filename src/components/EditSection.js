import React from 'react';

import { Link } from 'react-router-dom';

import bag from '../data/images/bag.jpeg'

import img1 from '../data/images/itempic1.jpeg';
import img2 from '../data/images/product1/img1.jpeg';
import img3 from '../data/images/product2/img1.jpeg';
import img4 from '../data/images/product3/img1.jpeg';
import img5 from '../data/images/product4/img1.jpeg';
import img6 from '../data/images/product5/img1.jpeg';
import img7 from '../data/images/product6/img1.jpeg';




//price image, id
const EditSectionData = [
    ['£14.99', img1, '36728' ],
    ['£14.99', img2, '36728' ],
    ['£14.99', img3 , '36728' ],
    ['£14.99', img4, '36728' ], 
    ['£14.99', img5, '36728' ],
    ['£14.99', img6, '36728' ],
    ['£14.99', img7, '36728' ],
    ['£14.99', bag, '36728' ],
    ['£14.99', bag, '36728' ],
    ['£14.99', bag,  '36728' ], 
    ['£14.99', bag,  '36728' ],
    ['£14.99', bag,  '36728' ]



]

const EditSection = () => {
return (
    <div>
        <p className=' font-bold'>THE VINPOP EDIT </p>

        <div className=' grid grid-cols-3 gap-3 sm:grid-cols-6'>
            
        {
        EditSectionData.map((item, index) => (
            <Link to = {`/listing/${item[2]}`}>
                <li className=' list-none'>
                    <img id= {index} className=' mouse-highlight cursor-pointer' src= {item[1]}/> 
                    <p className=' font-bold hidden sm:block'>{item[0]}</p>
                </li>
            </Link>
        ))
    }   

        </div>





{/* 
    <div className='container p-3 '>
        <ul className='image-gallery'>
        
            
    {
        EditSectionData.map((item, index) => (
            <li >
                <img id= {index} className=' cursor-pointer' src= {bag}/> 
                <p className='price hidden'>{item[0]}</p>
            </li>
        ))
    }            
        </ul>
    
    


    </div>  */}
    </div>
)}

export default EditSection