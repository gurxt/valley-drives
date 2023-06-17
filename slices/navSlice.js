import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
    rideInformation: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        },
        setRideInformation: (state, action) => {
            state.rideInformation = action.payload
        }
    }
})

export const { 
    setOrigin, 
    setDestination, 
    setTravelTimeInformation,
    setRideInformation
} = navSlice.actions

// selectors 
export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation
export const selectRideInformation = (state) => state.nav.rideInformation

export default navSlice.reducer