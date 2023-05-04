import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import serverApi from '../serverApi/axios'


const initialState = {
    listings: [],
    status: 'idle', //idle | loading | suceeded | failed
    error: null,
    newListingStatus: 'idle'//idle | loading | suceeded | failed 
    ,
    userListings: [],
    userStatus: 'idle'
}


///maybe is repsone.cart

export const fetchAllLisings = createAsyncThunk(
    'listing/fetchListings', async () => {
        try {
            const response = await serverApi.get(
                'api/v1/listing',
                {headers: {'Content-Type': 'application/json'}}
                )
                return response.data.Listings
                
        } catch (error) {
            return error.message
        }
    }
)

export const fetchUserListings = createAsyncThunk(
    'listing/fetchUserListings', async () => {
        try {
            const response = await serverApi.get(
                'api/v1/listing/userListings',
                {headers: {'Content-Type': 'application/json'}}
                )
                console.log(response.data.UserListings)
                return response.data.UserListings
                
                
        } catch (error) {
            return error.message
        }
    }
)

// export const fetchListingDetails = createAsyncThunk(
//     'listing/fetchListingDetails', async () => {
//         try {
//             const {data} = await ServerApi.get(
//                 `/api/v1/listing/${id}`,
//                 {headers: {'Content-Type': 'application/json'}}
//             )
//                 return response.data.Listings
                
//         } catch (error) {
//             return error.message
//         }
//     }
// )

// const loadListing = async () => {
//     try {
//         const {data} = await ServerApi.get(
//             `/api/v1/listing/${id}`,
//             {headers: {'Content-Type': 'application/json'}}
//         )
//         const {SingleListing} = data  ;
//         setLisitingData(SingleListing)

//         if (SingleListing) {
//             const Sellerdata = await ServerApi.get(
//             `/api/v1/users/${SingleListing.sellerId}`,
//             {headers: {'Content-Type': 'application/json'}}
//         )
//         setSellerData(Sellerdata.data.user)
//         }


//     } catch (error) {
//         console.log(error)
//     }
// }


export const createListing = createAsyncThunk(
    "listing/createListing",
    async (values) => {
        try {
        const response = await serverApi.post(
            `api/v1/listing`,
            values,
            {headers: {'Content-Type': 'multipart/form-data'}}
            );
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
});





const listingSlice = createSlice( {
    name: 'lisiting',

    initialState,

    reducers: {
        addlisting: (state, action) => {
            // state.items.push(action.payload.id)
            // addToCart(action)
        }
    },

    extraReducers(builder) {
        builder
            .addCase(fetchAllLisings.pending, (state, action) => {
                state.status = 'loading'
            })

            .addCase(fetchAllLisings.fulfilled, (state, action) => {
                state.status = 'suceeded'
                
                const LisitingArray = action.payload ;
                state.listings = LisitingArray;
            })

            .addCase(fetchAllLisings.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })

            /// for userLsitings request


            .addCase(fetchUserListings.pending, (state, action) => {
                state.userStatus = 'loading'
            })

            .addCase(fetchUserListings.fulfilled, (state, action) => {
                state.userStatus = 'suceeded'
                state.userListings = action.payload;
            })

            .addCase(fetchUserListings.rejected, (state, action) => {
                state.userStatus = 'failed'
                state.error = action.error.message;
            })


    }
    
})

export const selectAllListings = (state) => state.listing.listings ;
export const getListingsStatus = (state) => state.listing.status ;
export const getListingsError = (state) => state.listing.error ;

export const selectUserListings = (state) => state.listing.userListings ;
export const getUserListingsStatus = (state) => state.listing.userStatus ;



export default listingSlice.reducer ;