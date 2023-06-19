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
            route: () => navigation.navigate('OptionsScreen'),
            icon: <ArrowRightOnRectangleIcon color={color.gray} size={size.lg} />
        },
        { 
            name: "Create Account", 
            route: () => navigation.navigate('OptionsScreen'),
            icon: <PlusIcon color={color.gray} size={size.lg} />
        },
        { 
            name: "Help", 
            route: () => navigation.navigate('OptionsScreen'),
            icon: <QuestionMarkCircleIcon color={color.gray} size={size.lg} />
        }
    ]
    
    return (
        <View style={style.container}>
            { options.map(option => (
                <View key={option.name} style={style.buttonContainer}>
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
    },
    buttonContainer: {
        flex: 1,
    },
    buttonStyle: {
        borderColor: "transparent",
        borderRadius: 0,
        outline: 0
    },
    linearGradient: {
        colors: [ color.greenT1, color.azureT1],
        height: "100%",
    },
    textStyle: {
        flex: 1,
        color: color.gray,
        fontSize: size.m,
        fontWeight: "bold"
    },
    iconContainer: {
        width: "10%"
    }
})

export default NavOptions