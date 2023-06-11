import { View, Text } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
import { Image } from 'react-native'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native'

const ProfileCard = ({ user }) => {

    return (
        <SafeAreaView className="flex-1 w-full mt-10 mb-2 px-2">
            <View className="justify-center items-center p-4 rounded-lg">
                <Text className="text-gray-900 m-2 text-lg">
                    <Text className="font-thin">Welcome, </Text>
                    <Text className="font-bold">{ user?.name }!</Text>
                </Text>
                <Image
                    source={{ uri: urlFor(user?.avatar) }} 
                    className="h-32 w-32 rounded-full" 
                />
            </View>
            <View 
                style={{ backgroundColor: "#9fc9bc" }}
                className="flex-1 w-full justify-start mt-2 rounded-lg p-2"
            >
                <Text className="text-gray-900">{ user.email }</Text>
                <Text className="text-gray-900">{ user.address }</Text>
            </View>
        </SafeAreaView>
    )
}

export default ProfileCard