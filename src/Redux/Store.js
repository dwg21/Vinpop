import {configureStore} from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import cartReducer from './cartSlice';
import listingReducer from './listingSlice'
import userReducer from './userSlice'
import favoriteSlice from './favoriteSlice';
import offerSlice from './offerSlice';
import searchSlice from './searchSlice';


export default configureStore({
    reducer: {
        cart: cartReducer,
        listing: listingReducer,
        user: userReducer,
        favorite: favoriteSlice,
        offer: offerSlice,
        search: searchSlice
    }


}); 


