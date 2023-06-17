import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   taxiInformation: null
}

export const taxiSlice = createSlice({
    name: "taxi",
    initialState,
    reducers: {
        setTaxiInformation: (state, action) => {
            state.taxiInformation = action.payload
        },
    }
})

export const { 
    setTaxiInformation
} = taxiSlice.actions

// selectors 
export const selectTaxiInformation = (state) => state.taxi.taxiInformation

export default taxiSlice.reducer