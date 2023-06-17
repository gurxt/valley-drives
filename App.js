import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import 'react-native-gesture-handler'
import 'react-native-url-polyfill/auto'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import MapScreen from './screens/MapScreen'
import ProfileScreen from './screens/ProfileScreen'

const App = () => {
    const Stack = createStackNavigator()

    return (
        <Provider store={store}>
            <StatusBar style="dark" />
            <NavigationContainer>
                <SafeAreaProvider>
                    <KeyboardAvoidingView 
                        className="flex-1"
                        behavior={ Platform.OS === "ios" ? "padding" : "height" }
                    >
                        <Stack.Navigator>
                            <Stack.Screen
                                name="HomeScreen"
                                component={HomeScreen}
                                options={{
                                    headerShown: false
                                }}
                            />
                            <Stack.Screen
                                name="ProfileScreen"
                                component={ProfileScreen}
                                options={{
                                    headerShown: false
                                }}
                            />
                            <Stack.Screen
                                name="SearchScreen"
                                component={SearchScreen}
                                options={{
                                    headerShown: false
                                }}
                            />
                            <Stack.Screen
                                name="MapScreen"
                                component={MapScreen}
                                options={{
                                    headerShown: false
                                }}
                            />
                        </Stack.Navigator>
                    </KeyboardAvoidingView>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    )
}

export default App