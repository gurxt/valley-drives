import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: {
        name: null,
        email: null,
        phone: null,
        home: null,
        avatar: null
    },
    savedLocations: [],
    rides: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state.origin = action.payload
        },
        setSavedLocations: (state, action) => {
            state.origin = action.payload
        },
        setRides: (state, action) => {
            state.origin = action.payload
        }
    }
})

export const { 
    setInfo,
    setSavedLocations,
    setRides
} = userSlice.actions

// selectors 
export const selectInfo = (state) => state.user.info
export const selectSavedLocation= (state) => state.user.savedLocations
export const selectRides = (state) => state.user.rides

export default navSlice.reducer