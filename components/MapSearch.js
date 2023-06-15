import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'

const MapSearch = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <View backgroundColor="#9fc9bebb" className="flex-1 w-full pt-4">
            <GooglePlacesAutocomplete
                placeholder="Start Destination"
                styles={googleStyles}
                textInputProps={{
                    placeholderTextColor: "white"
                }}
                onPress={(data, details = null) => {
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description 
                    }))

                    dispatch(setDestination(null))

                    navigation.navigate("MapScreen")
                }}
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
        )
}

const googleStyles = StyleSheet.create({
    textInput: {
        backgroundColor: "#80847e",
        fontSize: 14,
        color: "white"
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
        backgroundColor: "#0002",
        marginBottom: 2
    },
    description: {
        color: "azure",
        textShadowColor: "rgba(0,0,0,0.5)",
        textShadowOffset: { width: 1, height: 2},
        textShadowRadius: 6
    }
})


export default MapSearch