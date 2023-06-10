import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { map_silver } from '../styles/map'
import { selectOrigin } from '../slices/navSlice'
import { useSelector } from 'react-redux'

const Map = () => {
    const origin = useSelector(selectOrigin)

    return (
        <View className="flex-1">
            <MapView
                style={{flex: 1}}
                mapType="mutedStandard"
                initialRegion={{
                    latitude: origin ? origin.location.lat : 0,
                    longitude: origin ? origin.location.lng : 0,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                customMapStyle={map_silver}
            >
                { origin?.location && (
                    <Marker
                        coordinate={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng
                        }}
                        title="Start Destination"
                        description={origin.description}
                        identifier="origin"
                    />
                )}
            </MapView>
        </View>
    )
}

export default Map