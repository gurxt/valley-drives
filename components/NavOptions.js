import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon } from "@rneui/themed"

const NavOptions = () => {
    return (
        <View className="flex-1 bg-black border-2 rounded">
            <View className="flex-1 rounded m-2">
                <Button 
                    type="outline" 
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: ['#222', '#000'],
                        start: { x: 1, y: 0.5 },
                        end: { x: 0.5, y: 0.5 },
                        height: "100%",
                    }}
                    buttonStyle={{
                        borderColor: "transparent",
                        outline: 0,
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
                        colors: ['#222', '#000'],
                        start: { x: 1, y: 0.5 },
                        end: { x: 0.5, y: 0.5 }
                    }}
                    buttonStyle={{
                        borderColor: "transparent",
                        outline: 0,
                        height: "100%"
                    }}
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
                        colors: ['#222', '#000'],
                        start: { x: 1, y: 0.5 },
                        end: { x: 0.5, y: 0.5 }
                    }}
                    buttonStyle={{
                        borderColor: "transparent",
                        outline: 0,
                        height: "100%",
                    }}
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