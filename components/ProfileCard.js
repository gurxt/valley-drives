import { View, Text } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
import { Image, SafeAreaView } from 'react-native'
import { PencilSquareIcon } from "react-native-heroicons/outline"

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
                className="flex-1 w-full mt-2 rounded-lg"
            >
                <View 
                    style={{ backgroundColor: "#80847e44"}} 
                    className="w-full flex-row justify-center items-center h-10 rounded-t-lg "
                >
                    <Text className="w-full absolute text-center flex-1 text-gray-900 text-lg font-light">Account Information</Text>
                    <View className="w-full items-end pr-2">
                        <PencilSquareIcon 
                            name="edit" 
                            size={24} 
                            color="azure" 
                        />
                    </View>
                </View>
                <View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProfileCard