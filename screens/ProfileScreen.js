import { SafeAreaView } from 'react-native'
import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { useSelector } from 'react-redux'
import { selectInfo } from '../slices/userSlice'
import { useNavigation } from '@react-navigation/native'
import { BackgroundImage, Button } from '@rneui/base'
import RideOptionsCard from '../components/RideOptionsCard'

const valley = require('../assets/valley.png')

const ProfileScreen = () => {
    const user = useSelector(selectInfo)
    const navigation = useNavigation()

    return (
        <SafeAreaView className="flex-1">
            <BackgroundImage
                source={valley}
                style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                }}
            >
                <ProfileCard user={user} />
                <RideOptionsCard />
            </BackgroundImage>
        </SafeAreaView>
    )
}

export default ProfileScreen