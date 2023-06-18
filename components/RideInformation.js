import { View, Text } from 'react-native'
import React from 'react'
import { 
    ArrowsUpDownIcon, 
    ClockIcon, 
    CurrencyDollarIcon, 
    MapIcon 
} from 'react-native-heroicons/solid'
import { priceCalculation } from '../scripts/priceCalculation'

const RideInformation = ({ travelTimeInformation, origin, destination, selectedTaxi, swapDisabled }) => {
    return (
        <View backgroundColor="azure" className="px-2">
            <View backgroundColor="azure" className="justify-center rounded-lg mt-2">
                <Text className="text-gray-900 text-xl font-light py-1 px-2 underline">
                    { selectedTaxi?.name || "..." }
                </Text>
            </View>
            <View className="flex-row w-full p-2 mt-2 items-center rounded-lg">
                <View>
                    <Text className="uppercase font-light text-m text-gray-900">
                        { origin?.description.split(',')[0] || "..."}
                    </Text>
                    <Text className="uppercase text-base text-gray-900">
                        { destination?.description.split(',')[0] || "..." }
                    </Text>
                </View>
                <View className="flex-1 items-end">
                    <ArrowsUpDownIcon disabled={swapDisabled} onPress={() => alert("hello")} size={20} color="black" />
                </View>
            </View>
            <View className="flex-row w-full p-2 mt-2 items-center rounded-lg">
                <View className="">
                    <Text className="text-base text-gray-900">
                        { travelTimeInformation?.distance.text || "..." }
                    </Text>
                </View>
                <View className="flex-1 items-end">
                    <MapIcon size={20} color="black" />
                </View>
            </View>
            <View className="flex-row w-full p-2 mt-2 items-center rounded-lg">
                <View className="flex-row items-center">
                    <Text className="italic font-light text-xs text-gray-900">est. </Text> 
                    <Text className="text-base">
                        { travelTimeInformation?.duration.text || "..."}
                    </Text>
                </View>
                <View className="flex-1 items-end">
                    <ClockIcon size={20} color="black" />
                </View>
            </View>
            <View className="flex-row w-full p-2 my-2 items-center rounded-lg">
                <View className="flex-row items-center">
                    <Text className="text-base font-bold text-gray-900">
                    { priceCalculation(
                        selectedTaxi?.fee,
                        selectedTaxi?.rate,
                        travelTimeInformation?.duration.value
                    ) || "..."}
                    </Text>
                </View>
                <View className="flex-1 items-end">
                    <CurrencyDollarIcon size={20} color="black" />
                </View>
            </View>
        </View>
    )
}

export default RideInformation

