import React from 'react'

const Message = ({messages}) => {
    return (

    <div className=' flex justify-center items-center mb-[100px] mx-2 '>
        <ol className='flex flex-col gap-4 max-w-[600px]'>
            {messages.map(({ message, sender }) => (
            <li className={` ${ sender === 'buyer' ? 'border-2 border-black': " bg-slate-700 text-white"}  rounded-md p-4 text-left`} >{message}</li>
            ))}
        </ol>
    </div>
    )
}

export default Message