import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const valley = require('./../assets/valley.png')

const SearchScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView className="flex-1 bg-white">
            <Image source={valley} className="w-full h-40" />
            <View className="flex-1 justify-center pt-2 pb-2 bg-black">
                <GooglePlacesAutocomplete
                    placeholder="Enter Location"
                    styles={{
                        container: {
                            justifySelf: 'center'
                        },
                        textInput: {
                            fontSize: 14
                        }
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
        </SafeAreaView>
    )
}

export default SearchScreen 