import React from 'react'
import UseState from './screens/UseState'
import UseEffect from './screens/UseEffect'
import Signup from './screens/Signup'
import Signin from './screens/Signin'
import Splash from './screens/Splash'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'

const App = () => {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="UseState" component={UseState} />
        <Stack.Screen name="UseEffect" component={UseEffect} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App