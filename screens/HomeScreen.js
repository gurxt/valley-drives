import { View, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import NavOptions from '../components/NavOptions'
import { useDispatch } from 'react-redux'
import client from '../sanity'
import { setTaxiInformation } from '../slices/taxiSlice'

const logo = require('./../assets/logo.png')
const banner = require('./../assets/banner.png')

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
            dispatch(setTaxiInformation(data.sort((x, y) => y.rating - x.rating)))
        }
        getTaxiData()
    }, [])

    return (
        <SafeAreaView className="h-full">
            <View>
                <Image
                    source={banner}
                    style={{ 
                        width: "100%", 
                        height: 400, 
                        resizeMode: "cover" 
                    }}
                />
                <Image 
                    source={logo}
                    style={{ 
                        width: "100%", 
                        height: 100, 
                        margin: 0, 
                        resizeMode: "cover",
                        backgroundColor: "azure"
                    }}
                />
            </View>
            <NavOptions />
        </SafeAreaView>
    )
}

export default HomeScreen