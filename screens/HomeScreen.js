import { View, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import NavOptions from '../components/NavOptions'
import { useDispatch } from 'react-redux'
import client from '../sanity'
import { setSelectedTaxi, setTaxiInformation } from '../slices/taxiSlice'
import { image } from '../styles/styles'

const logo = require('../assets/logo.png')
const banner = require('../assets/banner.png')

const HomeScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        // loead in taxi information.
        const getTaxiData = async () => {
            const data = await 
                client.fetch(`
                    *[_type == 'taxi']{
                        "id": _id,
                        name,
                        fee,
                        "rate": rpm,
                        rating,
                        theme,
                        "logo": logo.asset._ref
                    }
                `)
            const sortedData = data.sort((x,y) => y.rating - x.rating)
            dispatch(setTaxiInformation(sortedData))
            dispatch(setSelectedTaxi(sortedData[0]))
        }
        getTaxiData()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={{ height: "75%"}}>
                <View style={{ height: "80%" }}>
                    <Image
                        source={banner}
                        style={image.cover}
                    />
                </View>
                <View style={{ height: "20%" }}>
                    <Image
                        source={logo}
                        style={image.cover}
                    />
                </View>
            </View>
            <NavOptions />
        </SafeAreaView>
    )
}

export default HomeScreen