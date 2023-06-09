import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

const logo = require('./../assets/logo.png')

const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            <View className="p-5">
                <Image 
                    source={logo}
                    style={{ width: 150, height: 100, resizeMode: "contain" }}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen