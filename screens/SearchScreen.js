import { View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FavouritesCard from '../components/FavouritesCard'
import MapSearch from '../components/MapSearch'

const logo = require('../assets/logo.png')
const valley = require('../assets/valley.png')

const SearchScreen = () => {
    return (
        <ImageBackground
            className="flex-1"
            source={valley}
        >
            <SafeAreaView style={{ backgroundColor: "#9fc9bcaa", flex: 1 }}>
                <View className="flex-1 items-center">
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
                    <MapSearch option="destination" />
                </View>
                <View 
                    style={{ 
                        borderColor: "#80847e", 
                        backgroundColor: "#80847eee", 
                    }}
                    className="border-t-2 h-1/4"
                >
                    <FavouritesCard />
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SearchScreen 