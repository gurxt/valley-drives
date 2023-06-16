import { View, Text } from 'react-native'
import React  from 'react'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import { ArrowsUpDownIcon, MapIcon, ClockIcon, CurrencyDollarIcon } from 'react-native-heroicons/solid'
import TaxiOptionsCard from './TaxiOptionsCard'

const RideCard = () => {
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)

    const CHARGE_RATE = 1.5
    const SERVICE_FEE = 4.99

    return (
        <View backgroundColor="azure" className="flex-1">
            <View borderColor="#80847e" backgroundColor="#9fc9becc" className="px-2 pb-2 border-b-2">
                <View backgroundColor="azure" className="justify-center rounded-lg mt-2">
                    <Text style={{color: "#80847e"}} className="text-xl font-lightp py-1 text-center">Ride Information</Text>
                </View>
                <View backgroundColor="#80847ebb" className="flex-row w-full p-2 mt-2 items-center rounded-lg">
                    <View className="">
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
                                CHARGE_RATE /
                                100 +
                                SERVICE_FEE
                            )}
                        </Text>
                    </View>
                    <View className="flex-1 items-end">
                        <CurrencyDollarIcon size={20} color="azure" />
                    </View>
                </View>
            </View>
            <View className="flex-1" backgroundColor="azure">
                <TaxiOptionsCard />
            </View>
        </View>
    )
}

export default RideCard 