import { View, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapSearch from '../components/MapSearch'


const SearchScreen = () => {
    return (
        <SafeAreaView className="flex-1" backgroundColor="azure">
            <MapSearch option="destination" />
        </SafeAreaView>
    )
}

export default SearchScreen 