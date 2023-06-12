import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView } from 'react-native'

const logo = require('../assets/logo.png')

const SearchScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ backgroundColor: "#9fc9bc", flex: 1 }}>
            <View className="flex-1 items-center">
                <View className="w-full">
                    <Image 
                        source={logo}
                        style={{
                            width: "100%", 
                            height: 100, 
                            margin: 0, 
                            resizeMode: "cover"
                        }}
                    />
                </View>
                <View className="w-full m-4">
                    <GooglePlacesAutocomplete
                        placeholder="Start Destination"
                        styles={googleStyles}
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
            </View>
            <View style={{ backgroundColor: "#80847e" }} className="h-1/2">
            </View>
        </SafeAreaView>
    )
}

const googleStyles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDD",
        borderRadius: 10,
        fontSize: 14
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20
    }
})

export default SearchScreen 