import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Progress from 'react-native-progress'
import { urlFor } from '../sanity'
import Logo from '../assets/logo.png'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import Map from '../components/Map'

const PendingDriverCard = ({ route }) => {
    const { selectedTaxi } = route.params
    const navigation = useNavigation()

    useEffect(() => {
        const timer = setTimeout(() => {
                navigation.navigate("DriverOnRouteCard")
        }, 7500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <View backgroundColor="azure" className="flex-1">
            <View className="h-1/2">
                <Map />
            </View>
            <View borderColor="#80847e99" className="border-y-2">
                <Image source={Logo} style={{ width: "100%", height: 100, resizeMode: "cover"}} />
            </View>
            <View className="h-1/4 justify-center">
                <Image 
                    source={{ uri: urlFor(selectedTaxi.logo )}} 
                    style={{
                        width: "100%",
                        height: 100,
                        resizeMode: "contain"
                    }}
                />
                <View className="w-full items-center justify-center p-2">
                    <View className="flex-row items-end pb-2">
                        <Text className="text-lg font-light text-gray-900">Pending driver from </Text>
                        <Text className="text-lg font-bold text-gray-900">{ selectedTaxi.name }</Text>
                    </View>
                    <Progress.Bar 
                        color="#80847e99" 
                        indeterminate={true} 
                        indeterminateAnimationDuration={2000}
                        width={300} 
                        height={20}
                        borderColor='#80847e99'
                    />
                </View>
            </View>
            <View className="flex-1 justify-end p-2">
                <TouchableOpacity
                    style={{ backgroundColor: "#80847e33" }}
                    className="h-14 items-center rounded-xl flex-row"
                >
                    <Text className="text-lg uppercase font-light px-2 text-gray-900">Cancel Order</Text>
                    <View className="flex-1 items-end pr-2">
                        <XMarkIcon size={25} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PendingDriverCard