import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { urlFor } from '../sanity'
import { size, color } from '../styles/styles'
import { useSelector } from 'react-redux'
import { selectInfo } from '../slices/userSlice'

const ProfileScreen = () => {
    const user = useSelector(selectInfo)
    
    return (
        <View style={style.container}>
            <Text className="text-gray-900 m-2 text-lg">
                <Text style={style.textThin}>Welcome, </Text>
                <Text style={style.textBold}>{ user?.name }!</Text>
            </Text>
            <Image
                source={{ uri: urlFor(user?.avatar) }} 
                className="w-16 h-16 rounded-full" 
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.azure,
        width: "100%",
        paddingHorizontal: 2,
        alignItems: "center"
    },
    textThin: {
        fontWeight: 200,
        fontSize: size.m
    },
    textBold: {
        fontWeight: 400,
        fontSize: size.m
    }
})

export default ProfileScreen