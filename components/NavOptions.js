import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon } from "@rneui/themed"
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setInfo } from '../slices/userSlice'
import sanityClient from '../sanity'
import { useEffect } from 'react'

// auto-login for now.

const NavOptions = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const login = async () => {
        const users = await sanityClient.fetch(`
            *[_type == 'user']{
                "id": _id,
                "avatar": avatar.asset._ref,
                phone,
                name,
                email,
                address
            }[0]
        `)

        dispatch(setInfo({...users}))
    }

    useEffect(() => {
        login()
    }, [])
    
    return (
        <View style={{ flex: 1, backgroundColor: "#9fc9bc"}}>
            <View className="flex-1 rounded m-2">
                <Button 
                    type="outline" 
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: ['#9fc9bc', '#80847e'],
                        start: { x: 0.7, y: 0.5 },
                        end: { x: 0.2, y: 0.1 },
                        height: "100%",
                    }}
                    buttonStyle={{
                        borderColor: "transparent",
                        outline: 0,
                    }}
                    onPress={() => {
                        navigation.navigate('ProfileScreen')
                    }}
                >
                    <Text className="flex-1 text-white text-lg font-bold">
                        LOGIN
                    </Text>
                    <View className="w-20">
                        <Icon color="white" name="login" />
                    </View>
                </Button>
            </View>
            <View className="flex-1 rounded m-2">
                <Button 
                    type="outline" 
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: ['#9fc9bc', '#80847e'],
                        start: { x: 0.7, y: 0.5 },
                        end: { x: 0.2, y: 0.1 },
                        height: "100%"
                    }}
                    buttonStyle={{
                        borderColor: "transparent",
                        outline: 0,
                        height: "100%"
                    }}
                    onPress={() => navigation.navigate('ProfileScreen')}
                >
                    <Text className="flex-1 text-white text-lg font-bold">
                        CREATE ACCOUNT
                    </Text>
                    <View className="w-20">
                        <Icon className="flex-end" color="white" name="add" />
                    </View>
                </Button>
            </View>
            <View className="flex-1 rounded m-2">
                <Button 
                    type="outline" 
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: ['#9fc9bc', '#80847e'],
                        start: { x: 0.7, y: 0.5 },
                        end: { x: 0.2, y: 0.1 },
                    }}
                    buttonStyle={{
                        borderColor: "transparent",
                        outline: 0,
                        height: "100%",
                    }}
                    onPress={() => navigation.navigate('ProfileScreen')}
                >
                    <Text className="flex-1 text-white text-lg font-bold">HELP</Text>
                    <View className="w-20">
                        <Icon color="white" name="help" />
                    </View>
                </Button>
            </View>
        </View>
    )
}

export default NavOptions