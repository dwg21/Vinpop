import { createSlice} from "@reduxjs/toolkit";


const searchSlice = createSlice( {
    name: 'searchParam',

    initialState: {
        searchParam: "Women"
    },

    reducers: {
        changeParam: (state, action) => {
            state.searchParam = action.payload
            console.log(state)
        }
    },

    
})

export const selectSearchState = (state) => (state.search.searchParam) ;
export const {changeParam} = searchSlice.actions ;
export default searchSlice.reducer ;