import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   taxiInformation: null,
   selectedTaxi: 0,
   taxiDrivers: null
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
        },
        setTaxiDrivers: (state, action) => {
            state.taxiDrivers = action.payload
        }
    }
})

export const { 
    setTaxiInformation,
    setSelectedTaxi,
    setTaxiDrivers
} = taxiSlice.actions

// selectors 
export const selectTaxiInformation = (state) => state.taxi.taxiInformation
export const selectSelectedTaxi = (state) => state.taxi.selectedTaxi
export const selectTaxiDrivers = (state) => state.taxi.taxiDrivers

export default taxiSlice.reducer