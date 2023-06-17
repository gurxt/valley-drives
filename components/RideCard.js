import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import { ArrowsUpDownIcon, MapIcon, ClockIcon, CurrencyDollarIcon, ArrowLongRightIcon } from 'react-native-heroicons/solid'
import TaxiOptionsCard from './TaxiOptionsCard'
import { selectTaxiInformation } from '../slices/taxiSlice'
import { TouchableOpacity } from 'react-native'

const RideCard = () => {
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const taxiInformation = useSelector(selectTaxiInformation)

    const [selectedTaxi, setSelectedTaxi] = useState(taxiInformation[0])

    const handleTaxiSwap = (idx) => setSelectedTaxi(taxiInformation[idx])

    return (
        <View backgroundColor="azure" className="flex-1">
            <View  backgroundColor="azure" className="px-2 pb-2">
                <View backgroundColor="azure" className="justify-center rounded-lg mt-2">
                    <Text className="text-gray-900 text-xl font-light py-1 px-2 underline">
                        { selectedTaxi?.name }
                    </Text>
                </View>
                <View className="flex-row w-full p-2 mt-2 items-center rounded-lg">
                    <View>
                        <Text className="uppercase font-light text-m text-gray-900">
                            { origin?.description.split(',')[0]}
                        </Text>
                        <Text className="uppercase text-base text-gray-900">
                            { destination?.description.split(',')[0]}
                        </Text>
                    </View>
                    <View className="flex-1 items-end">
                        <ArrowsUpDownIcon size={20} color="black" />
                    </View>
                </View>
                <View className="flex-row w-full p-2 mt-2 items-center rounded-lg">
                    <View className="">
                        <Text className="text-base text-gray-900">
                            { travelTimeInformation?.distance.text }
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
                            { travelTimeInformation?.duration.text }
                        </Text>
                    </View>
                    <View className="flex-1 items-end">
                        <ClockIcon size={20} color="black" />
                    </View>
                </View>
                <View className="flex-row w-full p-2 my-2 items-center rounded-lg">
                    <View className="flex-row items-center">
                        <Text className="text-base font-bold text-gray-900">
                        { new Intl.NumberFormat('en-ca', {
                                style: 'currency',
                                currency: 'CAD'
                            }).format(
                                travelTimeInformation?.duration.value *
                                selectedTaxi?.rate /
                                100 +
                                selectedTaxi?.fee
                            )}
                        </Text>
                    </View>
                    <View className="flex-1 items-end">
                        <CurrencyDollarIcon size={20} color="black" />
                    </View>
                </View>
                <View>
                    <TouchableOpacity 
                        style={{ backgroundColor: "#80847e33" }} 
                        className="w-full rounded-lg flex-row"
                    >
                        <Text className="text-color-900 uppercase font-light p-3 text-base">Review Order</Text>
                        <View className="flex-1 items-end justify-center pr-2">
                            <ArrowLongRightIcon size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex-1 px-1" backgroundColor="azure">
                <TaxiOptionsCard 
                    selectedTaxi={selectedTaxi}
                    taxiInformation={taxiInformation} 
                    handleTaxiSwap={handleTaxiSwap} 
                />
            </View>
        </View>
    )
}

export default RideCard 