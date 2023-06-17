import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import { ArrowsUpDownIcon, MapIcon, ClockIcon, CurrencyDollarIcon, ArrowLongRightIcon } from 'react-native-heroicons/solid'
import TaxiOptionsCard from './TaxiOptionsCard'
import { selectTaxiInformation, setTaxiInformation } from '../slices/taxiSlice'
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
            <View borderColor="#80847e" backgroundColor="azure" className="px-2 pb-2 border-b-2">
                <View backgroundColor="azure" className="justify-center rounded-lg mt-2">
                    <Text style={{color: "#80847e"}} className="text-xl font-lightp py-1 text-center">
                        { selectedTaxi?.name }
                    </Text>
                </View>
                <View backgroundColor="#80847ebb" className="flex-row w-full p-2 mt-2 items-center rounded-lg">
                    <View>
                        <Text style={{color: "azure"}} className="uppercase font-light text-m">
                            { origin?.description.split(',')[0]}
                        </Text>
                        <Text style={{color: "azure"}} className="uppercase text-base">
                            { destination?.description.split(',')[0]}
                        </Text>
                    </View>
                    <View className="flex-1 items-end">
                        <ArrowsUpDownIcon size={20} color="azure" />
                    </View>
                </View>
                <View backgroundColor="#80847ebb" className="flex-row w-full p-2 mt-2 items-center rounded-lg">
                    <View className="">
                        <Text style={{color: "azure"}} className="text-base">
                            { travelTimeInformation?.distance.text }
                        </Text>
                    </View>
                    <View className="flex-1 items-end">
                        <MapIcon size={20} color="azure" />
                    </View>
                </View>
                <View backgroundColor="#80847ebb" className="flex-row w-full p-2 mt-2 items-center rounded-lg">
                    <View className="flex-row items-center">
                        <Text style={{color: "azure"}} className="italic font-light text-xs">est. </Text> 
                        <Text style={{color: "azure"}} className="text-base">
                            { travelTimeInformation?.duration.text }
                        </Text>
                    </View>
                    <View className="flex-1 items-end">
                        <ClockIcon size={20} color="azure" />
                    </View>
                </View>
                <View backgroundColor="#80847ebb" className="flex-row w-full p-2 my-2 items-center rounded-lg">
                    <View className="flex-row items-center">
                        <Text className="text-base font-bold text-white">
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
                        <CurrencyDollarIcon size={20} color="azure" />
                    </View>
                </View>
                <View>
                    <TouchableOpacity 
                        style={{ backgroundColor: "#9fc9be" }} 
                        className="w-full rounded-lg flex-row"
                    >
                        <Text style={{ color: "#80847e" }} className="uppercase font-bold p-3 text-base">Review Order</Text>
                        <View className="flex-1 items-end justify-center pr-2">
                            <ArrowLongRightIcon size={20} color="#80847e" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex-1" backgroundColor="#9fc9becc">
                <TaxiOptionsCard taxiInformation={taxiInformation} handleTaxiSwap={handleTaxiSwap} />
            </View>
        </View>
    )
}

export default RideCard 