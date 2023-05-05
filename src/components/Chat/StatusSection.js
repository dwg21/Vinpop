import React from 'react'

const StatusSection = ({offerDetails, changeStatus, typeOfOffer}) => {
    return (
        <div>
{           typeOfOffer === 'received' ? <div>
                {offerDetails.status === 'pending' ?
                    <div className='offerSection border-b-2 flex justify-around mt-4 pb-4   '>
                        <button onClick={() => changeStatus('accepted')} className='bg-black w-full mx-6 p-5 text-white font-bold'>Accept</button>
                        <button className='bg-white w-full border-2 border-black mx-6 p-5 text-black font-bold'>Decline</button>
                    </div> :
                        <div className='offerSection border-b-2 flex justify-around mt-4 pb-4   '>
                            <h2>Offer Accepted - Please arrange the delivery/swap</h2>
                        </div>
                    }
            </div> :
            <div className='offerSection border-b-2 flex justify-around mt-4 pb-4   '>
                    <h2>Your offer is currently: {offerDetails.status}</h2>
            </div>
            
            
            }



        </div>


    )
}

export default StatusSection