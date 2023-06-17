import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedTaxi } from '../slices/taxiSlice'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice'
import RideInformation from './RideInformation'
import PaymentOptions from './PaymentOptions'
import { CheckIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'


const OrderCard = () => {
    const selectedTaxi = useSelector(selectSelectedTaxi)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const navigation = useNavigation()

    // sample saved payments
    const payments = [
        {
            id: "1",
            type: 'MasterCard',
            name: 'Anthony Pinedo',
            cardNumber: "5457223321319989",
            ccv: 123,
            expireDate: '10-26'
        },
        {
            id: "2",
            type: 'Visa',
            name: 'Anthony Pinedo',
            cardNumber: "4146999912341221",
            ccv: 456,
            expireDate: '11-25'
        },
        {
            id: "3",
            type: 'Visa',
            name: 'Anthony Pinedo',
            cardNumber: "4146999912344567",
            ccv: 456,
            expireDate: '03-25'
        }
    ]

    return (
        <View className="flex-1 w-full" backgroundColor="azure">
            <RideInformation 
                travelTimeInformation={travelTimeInformation}
                origin={origin}
                destination={destination}
                selectedTaxi={selectedTaxi}
                swapDisabled={true}
            />
            {/* integrate payment processor */}
            <View className="flex-1 p-2">
                <PaymentOptions payments={payments}/>
            </View>
            <View className="px-2 pb-1">
                <TouchableOpacity
                    style={{ backgroundColor: "#80847e33" }} 
                    className="h-14 mb-2 w-full rounded-lg flex-row items-center"
                    onPress={() => navigation.navigate("JourneyScreen")}
                >
                    <Text className="text-color-900 uppercase font-light p-3 text-base">Place Order</Text>
                    <View className="flex-1 items-end justify-center pr-2">
                        <CheckIcon size={25} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderCard