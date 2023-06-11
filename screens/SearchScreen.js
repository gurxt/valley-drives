import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { selectInfo } from '../slices/userSlice'

//const valley = require('./../assets/valley.png')
const user_img = require("./../assets/female_01.png")

const SearchScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const user = useSelector(selectInfo)

    return (
        <SafeAreaView className="flex-1 bg-black">
            <StatusBar />
            <View className="flex-1 justify-center items-center">
                <View className="justify-center items-center">
                    <Text className="text-white m-4 text-lg">
                        Welcome, { user?.name }
                    </Text>
                    <Image 
                        source={{ uri: urlFor(user?.avatar) }} 
                        className="h-32 w-32 rounded-full" 
                    />
                </View>
                <View className="flex-1 w-full m-4">
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