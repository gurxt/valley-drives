import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import "react-native-google-places-autocomplete"
import { GOOGLE_MAPS_APIKEY } from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#9fc9bc"}}>
            <Text className="text-gray-900 text-center py-5 text-xl">Good morning, Timothy!</Text>
                <View>
                    <View>
                        <GooglePlacesAutocomplete 
                            styles={googleStyles}
                            placeholder="Enter destination"
                            nearbyPlacesAPI="GooglePlacesSearch"
                            debounce={400}
                            fetchDetails={true}
                            enablePoweredByContainer={false}
                            returnKeyType={"search"}
                            onPress={(data, details = null) => {
                                dispatch(
                                    setDestination({
                                        location: details.geometry.location,
                                        description: data.description
                                    })
                                ) 

                                navigation.navigate("RideOptionsCard")
                            }}
                            query={{
                                key: GOOGLE_MAPS_APIKEY,
                                language: "en",
                                components: "country:ca"
                            }}
                        /> 
                    </View>
                </View>
        </SafeAreaView>
    )
}

const googleStyles = StyleSheet.create({
    container: {
        paddingTop: 20,
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

export default NavigateCard