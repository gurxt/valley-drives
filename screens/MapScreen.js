import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'
import Map from '../components/Map'

const valley = require('./../assets/valley.png')

const MapScreen = () => {
    const dispatch = useDispatch()

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
                />
            </View>
            <View className="h-2/4">
                <View className="flex-1 bg-red-300">
                    <Map />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MapScreen