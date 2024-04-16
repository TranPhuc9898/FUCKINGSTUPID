/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react'
import {} from 'react-native'

import {} from 'react-native/Libraries/NewAppScreen'

import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import HomeTabNavigator from './src/navigation/HomeStack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <HomeTabNavigator />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
