import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import serverApi from '../serverApi/axios'


const initialState = {
    UserOffers: ['test'],
    status: 'idle', //idle | loading | suceeded | failed
    error: null
}



export const getUserOffers = createAsyncThunk(
    'offer/getUserOffers', async () => {
        try {
            const response = await serverApi.get(
                'api/v1/offer/userOffers',
                {headers: {'Content-Type': 'application/json'}}
                )                
                return response.data.offers
                
        } catch (error) {
            return error.message
        }
    }
)



export const getSingleOffer = createAsyncThunk(
    'offer/getSingleOffer', async (id) => {
        try {
            const response = await serverApi.post(
                'api/v1/offer/useroffer',
                {"offerId": id},
                {headers: {'Content-Type': 'application/json'}}
                )                             
                console.log(response.data.offer)
                return response.data.offer
                
        } catch (error) {
            console.log({"offerId": id})
            console.log(error)
            return error.message

        }
    }
)


// need get all seller offers
// change status



const offersSlice = createSlice( {
    name: 'offers',

    initialState,

    reducers: {
    },

    extraReducers(builder) {
        builder
            .addCase(getUserOffers.pending, (state, action) => {
                state.status = 'loading'
            })

            .addCase(getUserOffers.fulfilled, (state, action) => {
                state.status = 'suceeded'
                
                const returnedData = action.payload ;
                state.UserOffers = returnedData;
            })

            .addCase(getUserOffers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
    }
    
})

export const selectUserOffers = (state) => state.offer.UserOffers ;
export const getOfferStatus= (state) => state.offer.status ;
export const getOfferError = (state) => state.cart.error ;


export default offersSlice.reducer ;