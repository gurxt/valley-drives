import { View, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapSearch from '../components/MapSearch'


const SearchScreen = () => {
    return (
        <MapSearch option="destination" />
    )
}

export default SearchScreen 