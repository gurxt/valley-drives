import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
import { Image, SafeAreaView } from 'react-native'
import { PencilSquareIcon } from "react-native-heroicons/outline"

const ProfileCard = ({ user }) => {
    return (
        <SafeAreaView className="flex-1 w-full mb-2 px-2">
            <View className="justify-center items-center p-4 rounded-lg">
                <Text className="text-gray-900 m-2 text-lg">
                    <Text className="font-thin">Welcome, </Text>
                    <Text className="font-base">{ user?.name }!</Text>
                </Text>
                <Image
                    source={{ uri: urlFor(user?.avatar) }} 
                    className="w-16 h-16 rounded-full" 
                />
            </View>
        </SafeAreaView>
    )
}

export default ProfileCard