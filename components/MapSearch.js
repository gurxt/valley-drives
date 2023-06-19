import { View, Text, Switch } from 'react-native'
import React, { useRef, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch, useSelector } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { XMarkIcon, MapPinIcon } from 'react-native-heroicons/solid'
import FavouritesCard from './FavouritesCard'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { selectLocation, setLocation } from '../slices/userSlice'
import { getPermissions } from '../scripts/geocoding'
import * as Progress from 'react-native-progress'
import { Platform } from 'react-native'

const MapSearch = ({ option }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const searchTextRef = useRef(null)
    const location = useSelector(selectLocation)
    const [loading, setLoading] = useState(false)
    const [toggle, setToggle] = useState(false)

    const setUserLocation = async () => {
        const { currentLocation, address } = await getPermissions()
        setTimeout(async () => {
            if (address) {
                dispatch(setLocation({
                    address: address,
                    coords: {
                        latitude: currentLocation.coords.latitude,
                        longitude: currentLocation.coords.longitude
                    }
                }))
            }
        }, 2500)
    }

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

    return (
        <View backgroundColor="azure" className="flex-1">
            <View className="h-10 flex-row w-full items-start ml-2">
                <Switch
                    trackColor={{ false: "#80847e", true: "#9fc9bc"}} 
                    thumbColor={ toggle ? "#80847e" : "#9fc9bc" }
                    value={toggle}
                    onValueChange={() => setToggle(!toggle)}
                    style={{ transform: [{ scaleX: 1.20 }, { scaleY: 1.20 }]}}
                />
            </View>
            <View className="flex-1 w-full mt-2">
                <GooglePlacesAutocomplete
                    placeholder={ option ? 'Start Destination' : 'End Destination' }
                    renderRightButton={() => {
                        if (Platform.OS === "android") 
                            return (
                                <View style={googleStyles.button}>
                                    <XMarkIcon 
                                        size={20} 
                                        color="black" 
                                        onPress={() => searchTextRef.current.clear()}
                                    />
                                </View>
                            )
                        return <View></View>
                    }}
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
                { !location && (
                    <TouchableOpacity
                        onPress={() => {
                            setLoading(true)
                            setUserLocation()
                        }}
                        className="w-full items-center justify-center p-2 mt-1"
                    >
                        { !loading && (
                            <View 
                                style={{ backgroundColor: "#80847e33"}}
                                className="items-center justify-center w-full flex-row p-2 rounded-lg"
                            >
                                <Text className="text-base text-gray-700 uppercase pr-2">Get Current Location</Text>
                                <MapPinIcon size={25} color="gray" />
                            </View>
                        )}
                        { loading && (
                            <View className="pb-2">
                                <Progress.Bar
                                    color="#80847e99" 
                                    indeterminate={true} 
                                    indeterminateAnimationDuration={2000}
                                    width={300} 
                                    height={25}
                                    borderColor='#80847e99'
                                />
                            </View>
                        )}
                    </TouchableOpacity> 
                )}
                { option === "destination" && location && (
                    <View className="self-center">
                        <TouchableOpacity 
                            onPress={() => {
                                handlePress(
                                    { description: location?.address },
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
                        <Text className="text-sm font-light mb-2 text-center">{location?.address}</Text>
                    </View>
                )}
            </View>
            { !toggle && (
                <View 
                    style={{ 
                        borderColor: "#80847e", 
                        backgroundColor: "#80847eee", 
                    }}
                    className="h-1/6 border-t-2"
                >
                    <FavouritesCard 
                        option={option} 
                        handlePress={handlePress} 
                    />
                </View>
            )}
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