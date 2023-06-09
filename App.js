import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

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
                    </Stack.Navigator>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    )
}

export default App