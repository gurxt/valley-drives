import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { map_silver } from '../styles/map'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import { GOOGLE_MAPS_APIKEY } from '@env'

const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)

    useEffect(() => {
        if (!origin || !destination) return
        
        setTimeout(() => {
            mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
                edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
            })
        }, 200)
    }, [origin, destination])

    return (
        <MapView
            style={{flex: 1}}
            ref={mapRef}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin?.location?.lat,
                longitude: origin?.location?.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            customMapStyle={map_silver}
        >
            { origin?.location && destination?.location && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeColor="black"
                    strokeWidth={3}
                />
            )}
            { origin?.location && (
                <Marker
                    key={origin.location.lat}
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title="Start Destination"
                    description={origin.description}
                    identifier="origin"
                    pinColor="red"
                />
            )}
            { destination?.location && (
                <Marker
                    key={destination.location.lat}
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng
                    }}
                    title="End Destination"
                    description={destination.description}
                    identifier="destination"
                    pinColor="green"
                />
            )}
        </MapView>
    )
}

export default Map