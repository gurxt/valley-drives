import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import MapScreen from './screens/MapScreen'

const App = () => {
    const Stack = createStackNavigator()

    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="HomeScreen"
                            component={HomeScreen}
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
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    )
}

export default App