import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import FavouritesCard from '../components/FavouritesCard'
import { useState } from 'react'
import { useEffect } from 'react'

const logo = require('../assets/logo.png')

const SearchScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [hide, setHide] = useState(null)

    useEffect(() => {
        
    }, [hide])

    return (
        <SafeAreaView style={{ backgroundColor: "#9fc9bc", flex: 1 }}>
            <View backgroundColor="azure" className="flex-1 items-center">
                <View 
                    style={{ borderColor: "#80847e" }}
                    className="w-full border-y-2"
                >
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
                <View backgroundColor="#9fc9bc" className="flex-1 w-full pt-4">
                    <GooglePlacesAutocomplete
                        placeholder="Start Destination"
                        styles={googleStyles}
                        textInputProps={{
                            onPress: () => setHide(!hide),
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
            </View>
            <View 
                style={{ 
                    borderColor: "#80847e", 
                    backgroundColor: "#80847eaa", 
                }}
                className="border-t-2 h-1/4"
            >
                <FavouritesCard hide={hide} />
            </View>
        </SafeAreaView>
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

export default SearchScreen 