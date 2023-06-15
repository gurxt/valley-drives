import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/solid'

const MapSearch = ({ option }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const searchTextRef = useRef(null)

    return (
        <View backgroundColor="#9fc9bebb" className="flex-1 w-full pt-4">
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
                onPress={(data, details = null) => {
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
        backgroundColor: "#0002",
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