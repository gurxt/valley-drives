import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { Text, TouchableOpacity, View } from 'react-native'

const RideMap = () => {
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

    const [lat, setLat] = useState(destination.location.lat)
    const [lng, setLng] = useState(destination.location.lng)
    const [diffLat, setDiffLat] = useState(0)
    const [diffLng, setDiffLng] = useState(0)

    useEffect(() => {
        const destinations = () => {
            latDiff = (destination.location.lat - origin.location.lat) / 10
            lngDiff = (destination.location.lng - origin.location.lng) / 10
            setDiffLat(latDiff)
            setDiffLng(lngDiff)
        }
        destinations()

        const timer = setInterval(() => {
            setLat(lat => lat - diffLat)
            setLng(lng => lng - diffLng)

        }, 1000)

        const timeout = setTimeout(() => {
            clearInterval(timer)
        }, 10000)

        return () => {
            clearTimeout(timeout)
            clearInterval(timer)
        } 
    }, [])


    /*
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
        */

    return (
        <View className="flex-1">
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
                { lat && (
                    <Marker
                        key={lat + 1}
                        coordinate={{
                            latitude: lat, 
                            longitude: lng
                        }}
                        title="Driver Location"
                        identifier="driver"
                        pinColor="yellow"
                    />
                )}
            </MapView>
        </View>
    )
}

export default RideMap