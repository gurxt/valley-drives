import { View, Text } from 'react-native'
import React from 'react'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectSelectedTaxi, selectTaxiInformation, setSelectedTaxi } from '../slices/taxiSlice'
import TaxiOptionsCard from './TaxiOptionsCard'
import RideInformation from './RideInformation'
import { TouchableOpacity } from 'react-native'
import { ArrowLongRightIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const RideCard = () => {
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const taxiInformation = useSelector(selectTaxiInformation)
    const selectedTaxi = useSelector(selectSelectedTaxi)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const handleTaxiSwap = (idx) => dispatch(setSelectedTaxi(taxiInformation[idx]))

    return (
        <View backgroundColor="azure" className="flex-1">
            <View className="flex-1 px-1" backgroundColor="azure">
                <RideInformation 
                    travelTimeInformation={travelTimeInformation}
                    origin={origin}
                    destination={destination}
                    selectedTaxi={selectedTaxi}
                    swapDisabled={false}
                />
                <View className="px-2 pb-1">
                    <TouchableOpacity
                        style={{ backgroundColor: "#80847e33" }} 
                        className="w-full rounded-lg flex-row"
                        onPress={() => navigation.navigate("OrderCard")} 
                    >
                        <Text className="text-color-900 uppercase font-light p-3 text-base">Review Order</Text>
                        <View className="flex-1 items-end justify-center pr-2">
                            <ArrowLongRightIcon size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <TaxiOptionsCard 
                    taxiInformation={taxiInformation} 
                    selectedTaxi={selectedTaxi}
                    handleTaxiSwap={handleTaxiSwap}
                />
            </View>
        </View>
    )
}

export default RideCard 