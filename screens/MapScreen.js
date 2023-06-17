import { View, SafeAreaView } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Map from '../components/Map'
import RideCard from '../components/RideCard'
import MapSearch from '../components/MapSearch'
import OrderCard from '../components/OrderCard'

const MapScreen = () => {
    const Stack = createStackNavigator() 

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1">
                <View borderColor="#80847e" className="h-1/3 border-b-2">
                    <Map />
                </View>
                <Stack.Navigator>
                    <Stack.Screen
                        name="MapSearch" 
                        component={MapSearch}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="RideCard" 
                        component={RideCard}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="OrderCard" 
                        component={OrderCard}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </View>
        </SafeAreaView>
    )
}

export default MapScreen