import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {TailwindProvider} from "react-native-tailwindcss"
import HomeScreen from '../screens/HomeScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import store from './store'
import { Stack } from 'expo-router'
import {

  CardStyleInterpolators,
  TransitionPreset,
  TransitionSpecs,
} from "@react-navigation/stack"

export default function index() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name = "Home" component={HomeScreen}/>
          <Stack.Screen name = "Home" component={HomeScreen}/>
        </Stack.Navigator>
      </TailwindProvider>
      </Provider>
    
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})