import { View } from 'react-native'
import React from 'react'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectSelectedTaxi, selectTaxiInformation, setSelectedTaxi } from '../slices/taxiSlice'
import TaxiOptionsCard from './TaxiOptionsCard'
import RideInformation from './RideInformation'

const RideCard = () => {
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const taxiInformation = useSelector(selectTaxiInformation)
    const selectedTaxi = useSelector(selectSelectedTaxi)
    const dispatch = useDispatch()

    const handleTaxiSwap = (idx) => dispatch(setSelectedTaxi(taxiInformation[idx]))

    return (
        <View backgroundColor="azure" className="flex-1">
            <View className="flex-1 px-1" backgroundColor="azure">
                <RideInformation 
                    travelTimeInformation={travelTimeInformation}
                    origin={origin}
                    destination={destination}
                    selectedTaxi={selectedTaxi}
                />
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