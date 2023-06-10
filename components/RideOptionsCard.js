import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { selectTravelTimeInformation } from '../slices/navSlice'
import { useSelector } from 'react-redux'

const RideOptionsCard = () => {
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    const CHARGE_RATE = 1.5
    const SERVICE_FEE = 4.99

    return (
        <View>
            <Text>{ travelTimeInformation?.distance.text }</Text>
            <Text>{ travelTimeInformation?.duration.text }</Text>
            <Text>{ new Intl.NumberFormat('en-ca', {
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
    )
}

export default RideOptionsCard