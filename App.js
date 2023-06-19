import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import { color, size } from './styles/styles'
import 'react-native-gesture-handler'
import 'react-native-url-polyfill/auto'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import MapScreen from './screens/MapScreen'
import ProfileScreen from './screens/ProfileScreen'
import JourneyScreen from './screens/JourneyScreen'
import Valley from './assets/logo.png'
import { Bars3Icon } from 'react-native-heroicons/solid'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OptionsScreen from './screens/OptionsScreen'

const LogoTitle = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 2}}>
            <Image 
                source={Valley} 
                style={{ maxWidth: "100%", maxHeight: "100%", resizeMode: "contain" }}
            />
        </View>
    )
}

const Tab = createBottomTabNavigator()

const options = {
    headerTitle: props => <LogoTitle {...props} />,
    headerTitleAlign: 'center',
    headerRight: () => (
        <TouchableOpacity>
            <Bars3Icon size={25} style={{ marginRight: 10}} />
        </TouchableOpacity>
    ),
    headerStyle: {
        backgroundColor: color.green,
    },
    headerTintColor: color.azureT1
}

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="_ProfileScreen" 
                component={ProfileScreen} 
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="SearchScreen" 
                component={SearchScreen} 
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

const App = () => {
    const Stack = createStackNavigator()

    return (
        <Provider store={store}>
            <StatusBar style="dark" />
            <NavigationContainer>
                <SafeAreaProvider>
                    <KeyboardAvoidingView className="flex-1" behavior={ Platform.OS === "ios" ? "padding" : "height" }>
                        <Stack.Navigator>
                            <Stack.Screen
                                name="HomeScreen"
                                component={HomeScreen}
                                options={{
                                    headerShown: false
                                }}
                            />
                            <Stack.Screen 
                                name="OptionsScreen" 
                                component={OptionsScreen}
                                options={options}
                            />
                            <Stack.Screen
                                name="ProfileScreen"
                                options={options}
                            >
                                { () => <MyTabs /> }
                            </Stack.Screen>
                            <Stack.Screen
                                name="SearchScreen"
                                component={SearchScreen}
                                options={options}
                            />
                            <Stack.Screen
                                name="MapScreen"
                                component={MapScreen}
                                options={{
                                    headerShown: false
                                }}
                            />
                            <Stack.Screen
                                name="JourneyScreen"
                                component={JourneyScreen}
                                options={options}
                                 
                            />
                        </Stack.Navigator>
                    </KeyboardAvoidingView>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    )
}

export default App