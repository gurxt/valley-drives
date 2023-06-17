import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

const car = require('../assets/get_ride.png')
const boat = require('../assets/get_boat_ride.png')

const RideOptionsCard = () => {
    const navigation = useNavigation()

    return (
        <View className="w-full flex-row justify-center px-3 mb-2">
            <View 
                style={{ borderColor: "#80847e33", backgroundColor: "azure" }}
                className="border-2 w-1/2 mr-1 rounded-xl"
            >
                <View 
                    style={{ backgroundColor: "#9fc9becc"}} 
                    className="w-full justify-center items-center rounded-t-lg"
                >
                    <Text className="text-lg font-light">CAR RIDE</Text>
                </View>
                <View>
                    <Button 
                        buttonStyle={{ 
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "transparent",
                            width: "100%"
                        }}
                        onPress={() => navigation.navigate('SearchScreen')}
                    >
                        <Image
                            source={car} 
                            className="w-32 h-32" 
                        />
                    </Button>
                </View>
            </View>
            <View 
                style={{ borderColor: "#80847e33", backgroundColor: "azure" }}
                className="border-2 w-1/2 ml-1 rounded-xl"
            >
                <View 
                    style={{ backgroundColor: "#9fc9becc"}} 
                    className="w-full justify-center items-center rounded-t-lg"
                >
                    <Text className="text-gray-900 text-lg font-light">BOAT RIDE</Text>
                </View>
                <View>
                    <Button 
                        buttonStyle={{ 
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "transparent",
                            width: "100%"
                        }}
                        onPress={() => navigation.navigate('SearchScreen')}
                    >
                        <Image 
                            source={boat} 
                            className="w-32 h-32" 
                        />
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default RideOptionsCard