import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from "../assets/logo.png"

const OrderCard = () => {
        return (
        <SafeAreaView className="flex-1 w-full" backgroundColor="azure">
            <View borderColor="#80847e" className="border-y-2">
                <Image source={Logo} style={{ width: "100%", height: 100 }} />
            </View>
        </SafeAreaView>
    )
}

export default OrderCard