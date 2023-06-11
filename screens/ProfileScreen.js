import { View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { useSelector } from 'react-redux'
import { selectInfo } from '../slices/userSlice'
import { useNavigation } from '@react-navigation/native'
import { BackgroundImage, Button } from '@rneui/base'
import { Text } from 'react-native'

const car = require('../assets/get_ride.png')
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
                <View className="w-full flex-row justify-center px-3 mb-2">
                    <View 
                        style={{ backgroundColor: "#9fc9bc" }}
                        className="w-1/2 mr-1 rounded-lg"
                    >
                        <View 
                            style={{ backgroundColor: "#80847e44"}} 
                            className="w-full justify-center items-center rounded-t-xl"
                        >
                            <Text className="text-gray-900 text-lg font-light">GET RIDE</Text>
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
                        style={{ backgroundColor: "#9fc9bc" }}
                        className="w-1/2 ml-1 rounded-lg"
                    >
                        <View 
                            style={{ backgroundColor: "#80847e44"}} 
                            className="w-full justify-center items-center rounded-t-xl"
                        >
                            <Text className="text-gray-900 text-lg font-light">GET RIDE</Text>
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
                </View>
            </BackgroundImage>
        </SafeAreaView>
    )
}

export default ProfileScreen