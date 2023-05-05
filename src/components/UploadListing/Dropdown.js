import {useState} from 'react';
import {AiOutlineDown} from 'react-icons/ai';
import {TiTick} from 'react-icons/ti';

const list = ['shoes', 'tops', 'trousers', 'hats']

const Dropdown = ({options, title, setFormData, formData, value}) => {
    const [optionSelected, setOptionSelected] = useState(null);
    const [activeDropDown, setActiveDropdown] = useState(false);

    const handleSelect = (category) => {
        setActiveDropdown(false)
        setOptionSelected(category)
        setFormData({ ...formData, [title]: category});

    }

    if (!optionSelected && value) {
        setOptionSelected(value)
    }



    return (
    <div className='' >
        <h3 className='py-1 font-light'>{title}</h3>
    <div onClick={() => setActiveDropdown(true)} className='border-2 border-black px-2 py-3 flex justify-between items-center '>
            <p>{optionSelected}</p>
            <AiOutlineDown className='text-xl' />
    </div>
{    activeDropDown &&
        <div className='relative'>
            <ul className=' z-20 pt-2 w-full absolute border-2 '>
                {options.map((item, index) => (
                    <li onClick={() => handleSelect(item)} id = {index} className={ `px-3 py-3 border-b-2 relative bg-white hover:bg-gray-200 flex justify-between ${optionSelected === item && `font-bold`}`} >{item} <TiTick className={`${optionSelected === item ? ` block` : 'hidden'}`}/></li>

                ))}
            </ul>            
        </div>}

    </div>



    
    )
}

export default Dropdown