import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { map_silver } from '../styles/map'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { GOOGLE_MAPS_APIKEY } from '@env'

const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!origin || !destination) return
        
        const timer = setTimeout(() => {
            mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
                edgePadding: { top: 100, right: 100, bottom: 100, left: 100 }
            })
        }, 200)

        return () => clearTimeout(timer)
    }, [origin, destination])

    useEffect(() => {
        if (!origin || !destination) return

        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
                units=imperial
                &origins=${origin.description}
                &destinations=${destination.description}
                &key=${GOOGLE_MAPS_APIKEY}`
            ).then(res => res.json())
             .then(data => {
                dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
             })
        }

        getTravelTime()
    }, [origin, destination, GOOGLE_MAPS_APIKEY])

    return (
        <MapView
            style={{flex: 1}}
            ref={mapRef}
            mapType="mutedStandard"
            legalLabelInsets={{ bottom: 200, right: 200 }}
            initialRegion={{
                latitude: origin?.location?.lat,
                longitude: origin?.location?.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
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