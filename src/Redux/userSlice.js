import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import serverApi from "../serverApi/axios";

const initialState = {
    user: {
        loggedIn: false,
        name: " ",
        userId: ""
    },
    status: 'idle', //idle | loading | suceeded | failed
}

export const getCurrentUser = createAsyncThunk(
    'user/getCurrentUser', async () => {
        try {
            const {data} = await serverApi.get(
                'api/v1/users/showMe',
                {headers: {'Content-Type': 'application/json'}}
                )
                return data
        } catch (error) {
            return error.message
        }
    }
)



const userSlice = createSlice( {
    name: 'user',

    initialState,

    reducers: {
        addUserState: (state, action) => {
            const {status, name} = action.payload
            console.log(name)
            state.user.loggedIn = status
            state.user.name = name
            
        }
    },

    extraReducers(builder) {
        builder
            .addCase(getCurrentUser.pending, (state, action) => {
                state.status = 'loading'
            })

            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.status = 'suceeded'
                const {user} = action.payload ;
                console.log(user)
                if (user) {
                    state.user.name = user.name
                    state.user.loggedIn = true
                    state.user.userId = user.userId
                }
                
                console.log(state.user)
            })

            .addCase(getCurrentUser.rejected, (state, action) => {
                state.status = 'failed'
                state.user.name = ''
                state.user.loggedIn = false
                state.error = action.error.message;
            })

    }
    
})

export const selectUser = (state) => state.user.user ;
export const getUserStatus = (state) => state.user.status ;
export const getUserError = (state) => state.user.error ;

export const {addUserState} = userSlice.actions ;
export default userSlice.reducer ;