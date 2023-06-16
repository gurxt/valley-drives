import { View, Text, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import Taxi1 from '../assets/taxi_01.png'
import Taxi2 from '../assets/taxi_02.png'
import Taxi3 from '../assets/taxi_03.png'
import Taxi4 from '../assets/taxi_04.png'
import { TouchableOpacity } from 'react-native'
import { useEffect } from 'react'
import { StarIcon } from 'react-native-heroicons/solid'

const TaxiOptionsCard = () => {
    useEffect(() => {
                                //CHARGE_RATE /
                                //100 +
                                //SERVICE_FEE
    }, [])

    const taxis = [
        {
            name: "Timmy's Taxi",
            logo: Taxi1,
            colors: { text: "#875300", bg: "#705600" },
            rating: 4.5,
            rpm: 1.10
        },
        {
            name: "Danny's Taxi",
            logo: Taxi2,
            colors: { text: "#00690b", bg: "#00690b" },
            rating: 4,
            rpm: 1.12
        },
        {
            name: "Anthony's Taxi",
            logo: Taxi3,
            colors: { text: "#7d2e00", bg: "#7d2e00" },
            rating: 3.9,
            rpm: 1.15
        },
        {
            name: "Mitch's Taxi",
            logo: Taxi4,
            colors: { text: "#000", bg: "#000" },
            rating: 4.8,
            rpm: 1.20
        },
    ]
    // #80847e
    // #9fc9becc
    return (
        <ScrollView horizontal className="w-full flex-1 my-2">
            { taxis.map((taxi, index) => (
                <TouchableOpacity 
                    style={{ borderColor: "#80847e99" }}
                    className="mx-1 border-2 border-r-4 border-b-4 rounded-xl" 
                    key={taxi.name} 
                    onPress={() => alert("hello")}
                >
                    <View className="w-54 px-1 pt-1 rounded-t-xl flex-row">
                        <View borderColor="#80847e99" className="w-32 border-b-2 border-r-2 mr-2">
                            <Text 
                                style={{ color: `${taxi.colors.text}` }}
                                className="uppercase text-sm text-center"
                            >
                                {taxi.name}
                            </Text>
                        </View>
                        <View className="flex-row flex-1 justify-end items-end">
                            <Text style={{ color: `${taxi.colors.text}`}} className="text-xs">{ taxi.rating }</Text>
                            <StarIcon size={20} color={taxi.colors.text} />
                        </View>
                    </View>
                    <View className="flex-1 justify-center items-center">
                        <Image 
                            source={taxi.logo} 
                            className="h-32 w-40 self-center"
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={{ borderBottomColor: "#80847e99" }} className="mx-1 border-b-2"></Text>
                    <View className=" rounded-b-xl p-1">
                        <Text style={{ color: `${taxi.colors.text}`}}>
                            Rate: 
                            {   new Intl.NumberFormat('en-ca', {
                                    style: 'currency',
                                    currency: 'CAD'
                                }).format(taxi.rpm)
                            }/m
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default TaxiOptionsCard