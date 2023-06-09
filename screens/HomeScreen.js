import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'

const logo = require('./../assets/logo.png')
const banner = require('./../assets/banner.png')

const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-black h-full">
            <View>
                <Image
                    source={banner}
                    style={{ 
                        width: "100%", 
                        height: 400, 
                        resizeMode: "cover" 
                    }}
                />
                <Image 
                    source={logo}
                    style={{ 
                        width: "100%", 
                        height: 100, 
                        margin: 0, 
                        resizeMode: "contain",
                        backgroundColor: "#000"
                    }}
                />
            </View>
            <NavOptions />
        </SafeAreaView>
    )
}

export default HomeScreen