import { createSlice} from "@reduxjs/toolkit";

//Need to move seperate file after.

import {allListings} from '../data/Listings/Listings';


//react.push ok with react-toolkits

const cartSlice = createSlice( {
    name: 'cart',

    initialState: 
        [
            1345465,
            3354443
        ],

    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload.id)

        }
    }

})

export const selectAllItems = (state) => state.cart ;

export const {changeQuanity, addProduct} = cartSlice.actions ;
export default cartSlice.reducer ;