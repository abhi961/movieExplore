
import React from 'react'
import AppNavigator from './src/Navigator/AppNavigator'
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs(true); // Ignore all log notifications
const App = () => {
  return (
    <AppNavigator />
  )
}

export default App