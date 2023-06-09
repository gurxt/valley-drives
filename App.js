import React from 'react'
import {  Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Provider store={store}>
        <HomeScreen />
    </Provider>
  )
}

export default App