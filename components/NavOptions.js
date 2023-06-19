import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setInfo } from '../slices/userSlice'
import sanityClient from '../sanity'
import { useEffect } from 'react'
import { size, color } from '../styles/styles'
import { ArrowRightOnRectangleIcon, PlusIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid'

const NavOptions = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(() => {
        const login = async () => {
            const users = await sanityClient.fetch(`
                *[_type == 'user']{
                    "id": _id,
                    "avatar": avatar.asset._ref,
                    phone,
                    name,
                    email,
                    address
                }[2]
            `)

            dispatch(setInfo({...users}))
        }
        login()
    }, [])

    const options = [
        { 
            name: "Login", 
            route: () => navigation.navigate('ProfileScreen'),
            icon: <ArrowRightOnRectangleIcon color={color.gray} size={size.lg} />
        },
        { 
            name: "Create Account", 
            route: () => navigation.navigate('ProfileScreen'),
            icon: <PlusIcon color={color.gray} size={size.lg} />
        },
        { 
            name: "Help", 
            route: () => navigation.navigate('ProfileScreen'),
            icon: <QuestionMarkCircleIcon color={color.gray} size={size.lg} />
        }
    ]
    
    return (
        <View style={style.container}>
            { options.map(option => (
                <View style={style.buttonContainer}>
                    <Button
                        type="outline" 
                        ViewComponent={LinearGradient}
                        linearGradientProps={style.linearGradient}
                        buttonStyle={style.buttonStyle}
                        onPress={() => option.route()}
                    >
                        <Text style={style.textStyle}>{ option.name }</Text>
                        <View style={style.iconContainer}>{ option.icon }</View>
                    </Button>
                </View>
            ))}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.green
    },
    buttonContainer: {
        flex: 1,
        marginTop: 1
    },
    buttonStyle: {
        borderColor: "transparent",
        outline: 0
    },
    linearGradient: {
        colors: ['#9fc9bc', '#80847e'],
        start: { x: 0.7, y: 0.5 },
        end: { x: 0.2, y: 0.1 },
        height: "100%",
    },
    textStyle: {
        flex: 1,
        color: color.azure,
        fontSize: size.m,
        fontWeight: "bold"
    },
    iconContainer: {
        width: "10%"
    }
})

export default NavOptions