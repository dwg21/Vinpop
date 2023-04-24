import {configureStore} from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import cartReducer from './cartSlice';
import listingReducer from './listingSlice'
import userReducer from './userSlice'
import favoriteSlice from './favoriteSlice';


export default configureStore({
    reducer: {
        cart: cartReducer,
        listing: listingReducer,
        user: userReducer,
        favorite: favoriteSlice
    }


}); 


