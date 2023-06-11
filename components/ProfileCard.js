import { View, Text } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
import { Image } from 'react-native'
import { useEffect } from 'react'

const ProfileCard = ({ user }) => {
    useEffect(() => {
        console.log(user)
    }, [])

    return (
        <View className="w-full px-5">
            <View className="justify-center items-center px-4">
                <Text className="text-white m-4 text-lg">
                    Welcome, <Text className="font-thin">{ user?.name }!</Text>
                </Text>
                <Image
                    source={{ uri: urlFor(user?.avatar) }} 
                    className="h-32 w-32 rounded-full" 
                />
            </View>
            <View className="w-full h-1/2 justify-start">
                <Text className="text-white">{ user.email }</Text>
                <Text className="text-white">{ user.address }</Text>
            </View>
        </View>
    )
}

export default ProfileCard