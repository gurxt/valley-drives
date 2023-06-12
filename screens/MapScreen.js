import { View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideCard from '../components/RideCard'

const MapScreen = () => {
    const Stack = createStackNavigator() 

    return (
        <View className="flex-1">
            <View className="h-1/2">
                <Map />
            </View>
            <View className="h-1/2">
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard" 
                        component={NavigateCard}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="RideOptionsCard" 
                        component={RideOptionsCard}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen