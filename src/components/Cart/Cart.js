import {useEffect} from 'react';
import CartItem from './CartItem';

//redux state import
import { useSelector, useDispatch} from 'react-redux';
import {selectAllItems, getItemsStatus, getItemsError, fetchCart} from '../../Redux/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectAllItems);
    const itemsStatus = useSelector(getItemsStatus);
    const itemsError = useSelector(getItemsError);

    useEffect(() => {
        if (itemsStatus === 'idle') {
            dispatch(fetchCart())
        }
    }, [itemsStatus, dispatch])

    let content ; 

    //Changes page content based on status of request for cart data results

    if (itemsStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (itemsStatus === 'suceeded') {
        content = items.map((item, index) => (
            <CartItem listingID = {item} key={index}/>
        ))
    } else if (itemsStatus === 'failed') {
        content = <p>error</p>
    } 




    return (
    <div className=' bg-gray-200 h-[100vh] flex flex-col space-y-8' >
        <h2 className='pt-8 font-bold text-2xl pl-5'>Bag</h2>
        {content}        
    </div>
    )
}

export default Cart


{/* <div className=' bg-gray-200 h-[100vh] flex flex-col space-y-8' >
<h2 className='pt-8 font-bold text-2xl pl-5'>Bag</h2>
{items.map((item, index) => (
    <CartItem listingID = {item} key={index}/>
))}        
</div> */}