import React from 'react'
import {  Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store'
import HomeScreen from './screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <HomeScreen />
            </Provider>
        </SafeAreaProvider>
    )
}

export default App