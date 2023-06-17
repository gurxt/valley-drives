import { View, SafeAreaView } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import PendingDriverCard from '../components/PendingDriverCard'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice'
import { selectSelectedTaxi, selectTaxiInformation } from '../slices/taxiSlice'
import DriverOnRouteCard from '../components/DriverOnRouteCard'

const Stack = createStackNavigator()

const JourneyScreen = () => {
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const selectedTaxi = useSelector(selectSelectedTaxi)

    return (
        <SafeAreaView className="flex-1">
            <View className="h-1/2">
                <Map />
            </View>
            <Stack.Navigator>
                <Stack.Screen
                    name="PendingDriverCard"
                    component={PendingDriverCard}
                    options={{ headerShown: false }}
                    initialParams={{
                        selectedTaxi: selectedTaxi
                    }}
                />
                <Stack.Screen
                    name="DriverOnRouteCard"
                    component={DriverOnRouteCard}
                    options={{ headerShown: false }}
                    initialParams={{
                        selectedTaxi: selectedTaxi
                    }}
                />
            </Stack.Navigator>
        </SafeAreaView>
    )
}

export default JourneyScreen