import { SafeAreaView } from 'react-native'
import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { useSelector } from 'react-redux'
import { selectInfo } from '../slices/userSlice'
import RideOptionsCard from '../components/RideOptionsCard'


const ProfileScreen = () => {
    const user = useSelector(selectInfo)

    return (
        <SafeAreaView className="flex-1" backgroundColor="azure">
            <ProfileCard user={user} />
            <RideOptionsCard />
        </SafeAreaView>
    )
}

export default ProfileScreen