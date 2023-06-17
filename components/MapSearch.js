import { View } from 'react-native'
import React, { useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/solid'
import FavouritesCard from './FavouritesCard'

const MapSearch = ({ option }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const searchTextRef = useRef(null)

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
        <View backgroundColor="azure" className="flex-1 pt-4">
            <View className="flex-1 w-full">
                <GooglePlacesAutocomplete
                    placeholder={ option ? 'Start Destination' : 'End Destination' }
                    renderRightButton={() => (
                        <View style={googleStyles.button}>
                            <XMarkIcon 
                                size={20} 
                                color="azure" 
                                onPress={() => searchTextRef.current.clear()}
                            />
                        </View>
                    )}
                    styles={googleStyles}
                    textInputProps={{
                        ref: searchTextRef,
                        placeholderTextColor: "azure"
                    }}
                    onPress={(data, details = null) => handlePress(data, details)}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                        components: "country:ca"
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    enablePoweredByContainer={false}
                    minLength={3}
                    fetchDetails={true}
                    returnKeyType={"search"}
                />
            </View>
            <View 
                style={{ 
                    borderColor: "#80847e", 
                    backgroundColor: "#80847eee", 
                }}
                className="border-t-2 h-1/3"
            >
                <FavouritesCard option={option} handlePress={handlePress} />
            </View>
        </View>
    )
}

const googleStyles = StyleSheet.create({
    textInput: {
        backgroundColor: "#80847e",
        fontSize: 14,
        color: "white",
        height: "100%",
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
        color: "azure",
        textShadowColor: "rgba(0,0,0,0.5)",
        textShadowOffset: { width: 1, height: 2},
        textShadowRadius: 6
    },
    button: {
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        width: "10%",
        backgroundColor: "#80847eaa",
    }
})


export default MapSearch