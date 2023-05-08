import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import serverApi from "../serverApi/axios";

const initialState = {
    favorites: ['8839'],
    status: 'idle', //idle | loading | suceeded | failed
}

export const getuserFavorites= createAsyncThunk(
    'user/getLikes', async () => {
        try {
            const {data} = await serverApi.get(
                'api/v1/users/favorites',
                {headers: {'Content-Type': 'application/json'}}
                )
                return data
        } catch (error) {
            return error.message
        }
    }
)

export const addFavorite = createAsyncThunk(
    "user/addFavorite",
    async (values) => {
        try {
            console.log(values)
        const response = await serverApi.post(
            `api/v1/users/favorites`,
            values,
            {headers: {'Content-Type': 'application/json'}}
            );
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const removeFavorite = createAsyncThunk(
    "user/removeFavorite",
    async (value) => {
        try {
            console.log(value)
        const response = await serverApi.delete(
            `api/v1/users/favorites?listingId=${value}`,
            {headers: {'Content-Type': 'application/json'}}
            );
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
});


const favoriteSlice = createSlice( {
    name: 'favorite',

    initialState,

    reducers: {
        // addUserState: (state, action) => {
        //     const {status, name} = action.payload
        //     console.log(name)
        //     state.user.loggedIn = status
        //     state.user.name = name
            
        // }
    },

    extraReducers(builder) {
        builder
            .addCase(getuserFavorites.pending, (state, action) => {
                state.status = 'loading'
            })

            .addCase(getuserFavorites.fulfilled, (state, action) => {
                state.status = 'suceeded'
                const {favorites} = action.payload ;
                if (favorites) {
                    state.favorites = favorites
                }
                
            })

            .addCase(getuserFavorites.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })

    }
    
})

export const selectFavorites = (state) => state.favorite.favorites ;
export const getFavoriteStatus = (state) => state.favorite.status ;
// export const getUserError = (state) => state.user.error ;

// export const {addUserState} = userSlice.actions ;

export default favoriteSlice.reducer ;