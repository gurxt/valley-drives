import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   taxiInformation: null,
   selectedTaxi: 0
}

export const taxiSlice = createSlice({
    name: "taxi",
    initialState,
    reducers: {
        setTaxiInformation: (state, action) => {
            state.taxiInformation = action.payload
        },
        setSelectedTaxi: (state, action) => {
            state.selectedTaxi = action.payload
        }
    }
})

export const { 
    setTaxiInformation,
    setSelectedTaxi
} = taxiSlice.actions

// selectors 
export const selectTaxiInformation = (state) => state.taxi.taxiInformation
export const selectSelectedTaxi = (state) => state.taxi.selectedTaxi

export default taxiSlice.reducer