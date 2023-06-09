import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { map_dark, map_silver } from '../styles/map'


const Map = () => {
    return (
        <View className="flex-1">
            <MapView
                style={{flex: 1}}
                mapType="mutedStandard"
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                customMapStyle={map_silver}
            />
        </View>
    )
}

export default Map