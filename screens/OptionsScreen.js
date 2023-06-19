import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Taxi from '../assets/taxi_04.png'
import Profile from '../assets/male_01.png'
import { color } from '../styles/styles'

const OptionsScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("SearchScreen")}
                style={style.rideContainer}
            >
                <Text>Get a ride</Text>
                <View style={style.imageContainer}>
                    <Image source={Taxi} style={style.car} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("ProfileScreen")}
                style={style.rideContainer}
            >
                <Text>View profile</Text>
                <View style={style.imageContainer}>
                    <Image source={Profile} style={style.profile} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.azure
    },
    rideContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "25%",
        width: "100%"
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "75%",
        width: "100%",
        padding: 5
    },
    car: {
        width: "50%",
        resizeMode: "contain"
    },
    profile: {
        width: "50%",
        height: "90%",
        resizeMode: "contain",
        borderRadius: 100
    }
})

export default OptionsScreen