import { View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapSearch from '../components/MapSearch'


const SearchScreen = () => {
    const logo = require('../assets/logo.png')

    return (
        <SafeAreaView className="flex-1" backgroundColor="azure">
            <View className="flex-1 items-center pt-2">
                <View 
                    style={{ backgroundColor: "azure", borderColor: "#80847e" }}
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
                <View backgroundColor="azure" className="flex-1 w-full">
                    <MapSearch option="destination" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen 