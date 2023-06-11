import { View, Text } from 'react-native'
import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { useSelector } from 'react-redux'
import { selectInfo } from '../slices/userSlice'

const ProfileScreen = () => {
    const user = useSelector(selectInfo)

    return (
        <View className="flex-1 bg-black">
            <ProfileCard user={user} />
        </View>
    )
}

export default ProfileScreen