import React from 'react';

import bag from '../data/images/bag.jpeg'



//price image, id
const EditSectionData = [
    ['£14.99', '../data/images/bag.jpeg', '36728' ],
    ['£14.99', '../data/images/bag.jpeg', '36728' ],
    ['£14.99', '../data/images/bag.jpeg', '36728' ],
    ['£14.99', '../data/images/bag.jpeg', '36728' ], 
    ['£14.99', '../data/images/bag.jpeg', '36728' ],
    ['£14.99', '../data/images/bag.jpeg', '36728' ],
    ['£14.99', '../data/images/bag.jpeg', '36728' ],
    ['£14.99', '../data/images/bag.jpeg', '36728' ],
    ['£14.99', '../data/images/bag.jpeg', '36728' ],
    ['£14.99', '../data/images/bag.jpeg', '36728' ], 
    ['£14.99', '../data/images/bag.jpeg', '36728' ],
    ['£14.99', '../data/images/bag.jpeg', '36728' ]





]

const EditSection = () => {
return (
    <div>
        <p className=' font-bold'>THE VINPOP EDIT </p>

        <div className=' grid grid-cols-3 gap-3 sm:grid-cols-6'>
            
        {
        EditSectionData.map((item, index) => (
            <li className=' list-none'>
                <img id= {index} className=' mouse-highlight cursor-pointer' src= {bag}/> 
                <p className=' font-bold hidden sm:block'>{item[0]}</p>
            </li>
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