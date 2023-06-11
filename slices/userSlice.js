import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: null,
    savedLocations: null,
    rides: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state.info = action.payload
        },
        setSavedLocations: (state, action) => {
            state.savedLocations = action.payload
        },
        setRides: (state, action) => {
            state.rides = action.payload
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

export default userSlice.reducer