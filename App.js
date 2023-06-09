import React from 'react'
import {  Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store'

// configure redux.

const App = () => {
  return (
    <Provider store={store}>
        <View>
            <Text>LOL</Text>
        </View>
    </Provider>
  )
}

export default App