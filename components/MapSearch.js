import { View, Text } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { XMarkIcon, MapPinIcon } from 'react-native-heroicons/solid'
import FavouritesCard from './FavouritesCard'
import * as Location from 'expo-location'
import Geocoder from 'react-native-geocoding'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MapSearch = ({ option }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const searchTextRef = useRef(null)
    const [location, setLocation] = useState(null)
    const [address, setAddress] = useState(null)

    const handlePress = (data, details) => {
        if (option === "destination") {
            dispatch(
                setOrigin({
                    location: details.geometry.location,
                    description: data.description
                })
            )
            dispatch(setDestination(null))
            navigation.navigate("MapScreen")
        } else {
            dispatch(
                setDestination({
                    location: details.geometry.location,
                    description: data.description
                })
            )
            navigation.navigate("RideCard")
        }
    }

    const reverseGeocode = async (lat, long) => {
        const code = await Geocoder.from({ 
            latitude: lat,
            longitude: long
        })

        const addr = code.results[0].formatted_address
        setAddress(addr)
        return addr
    }

    useEffect(() => {
        Geocoder.init(GOOGLE_MAPS_APIKEY)
        const getPermissions = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== "granted") {
                console.log("Permission not granted.")
                return
            }

            const currentLocation = await Location.getCurrentPositionAsync({})
            setLocation(currentLocation)
            reverseGeocode(currentLocation.coords.latitude, currentLocation.coords.longitude)
        }
        getPermissions()
    }, [])

    return (
        <View backgroundColor="azure" className="flex-1 pt-4">
            <View className="flex-1 w-full">
                <GooglePlacesAutocomplete
                    placeholder={ option ? 'Start Destination' : 'End Destination' }
                    renderRightButton={() => (
                        <View style={googleStyles.button}>
                            <XMarkIcon 
                                size={20} 
                                color="black" 
                                onPress={() => searchTextRef.current.clear()}
                            />
                        </View>
                    )}
                    styles={googleStyles}
                    textInputProps={{
                        ref: searchTextRef,
                        placeholderTextColor: "black"
                    }}
                    onPress={(data, details = null) => handlePress(data, details)}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                        //components: "country:ca"
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    enablePoweredByContainer={false}
                    minLength={3}
                    fetchDetails={true}
                    returnKeyType={"search"}
                />
                { option === "destination" && address && (
                    <View className="self-center">
                        <TouchableOpacity 
                            onPress={() => {
                                handlePress(
                                    { description: address },
                                    { geometry: 
                                        { location: 
                                            { lat: location?.coords.latitude, 
                                            lng: location?.coords.longitude } } } )
                            }}
                            className="flex-row w-full items-center justify-center p-2 mt-1 rounded-lg"
                            style={{ backgroundColor: "#80847e33"}}
                        >
                            <Text className="text-base text-gray-700 uppercase pr-2">Use Current Location</Text>
                            <MapPinIcon size={25} color="gray" />
                        </TouchableOpacity>
                        <Text className="text-sm font-light mb-2 text-center">{address}</Text>
                    </View>
                )}
            </View>
            <View 
                style={{ 
                    borderColor: "#80847e", 
                    backgroundColor: "#80847eee", 
                }}
                className="border-t-2"
            >
                <FavouritesCard 
                    option={option} 
                    handlePress={handlePress} 
                />
            </View>
        </View>
    )
}

const googleStyles = StyleSheet.create({
    textInput: {
        backgroundColor: "azure",
        fontSize: 14,
        color: "black",
        height: "100%",
        borderWidth: 1,
        borderColor: "#80847e88",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    textInputContainer: {
        paddingHorizontal: 10,
    },
    listView: {
        paddingHorizontal: 10,
    },
    separator: {
        backgroundColor: "#80847e",
    },
    row: {
        backgroundColor: "#9fc9becc",
        marginBottom: 2
    },
    description: {
        color: "black",
    },
    button: {
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        width: "10%",
        backgroundColor: "#80847e88",
    }
})


export default MapSearch