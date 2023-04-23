import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import serverApi from '../serverApi/axios'


const initialState = {
    items: [],
    status: 'idle', //idle | loading | suceeded | failed
    error: null
}


///maybe is repsone.cart

export const fetchCart = createAsyncThunk(
    'bag/fetchItems', async () => {
        try {
            const response = await serverApi.get(
                'api/v1/cart/',
                {headers: {'Content-Type': 'application/json'}}
                )
                return response.data.cart
                
        } catch (error) {
            return error.message
        }
    }
)

export const addToCart = createAsyncThunk(
    'bag/addToCart', async (id) => {
        try { 
            console.log(id)   
            const response = await serverApi.post(
                'api/v1/cart/',
                id,
                {headers: {'Content-Type': 'application/json'}}
                )
                console.log(response.data.cart)
                return response.data.cart

                
                
        } catch (error) {
            return error.message
        }
    }
)

export const deleteFromCart = createAsyncThunk(
    'bag/deleteFromCart', async (id) => {
        console.log(id)
        try {    
            console.log(id)
            const response = await serverApi.delete(
                `api/v1/cart/${id}`,
                {headers: {'Content-Type': 'application/json'}}
                )
                return response.data.cart
                
        } catch (error) {
            return error.message
        }
    }
)




const cartSlice = createSlice( {
    name: 'cart',

    initialState,

    reducers: {
        addProduct: (state, action) => {
            // state.items.push(action.payload.id)
            addToCart(action)
        }
    },

    extraReducers(builder) {
        builder
            .addCase(fetchCart.pending, (state, action) => {
                state.status = 'loading'
            })

            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = 'suceeded'
                
                const cartArray = action.payload.items ;
                state.items = cartArray;
            })

            .addCase(fetchCart.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })

            .addCase(addToCart.fulfilled, (state, action) => {                
                // console.log(action.payload.items)
                // const newCart = state.items.concat(action.payload.items);
                // const newCartWithoutDuplicates = [...new Set(newCart)];
                // state.items = newCartWithoutDuplicates
                // console.log(state.items)
                const items1 = action.payload.items
                console.log(items1)
                state.items = items1;
            })

            .addCase(deleteFromCart.fulfilled, (state, action) => {
                const items2 = action.payload.items
                console.log(items2)
                state.items = items2;
            //     console.log(action.payload)
            //     const itemTobeDeleted = items[0]
            //     console.log(itemTobeDeleted)
            //     state.items = state.items.filter(item => item !== itemTobeDeleted)
            //     console.log(state.items)
            })

    }
    
})

export const selectAllItems = (state) => state.cart.items ;
export const getItemsStatus = (state) => state.cart.status ;
export const getItemsError = (state) => state.cart.error ;


export const {changeQuanity, addProduct} = cartSlice.actions ;
export default cartSlice.reducer ;