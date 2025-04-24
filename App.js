import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Homescreen from './src/screen/Homescreen';
import Detailscreen from './src/screen/Detailscreen';
import ListScreen from './src/screen/ListScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name == 'Home') {
              iconName = 'home-outline';
            }
            else if (route.name == 'Pokemon List') {
              iconName = 'list-outline';
            }
            else if (route.name == 'Pokemon Detail') {
              iconName = 'alert-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>
          },

        })}
      >
        <Tab.Screen name='Home' component={Homescreen}/>
        <Tab.Screen name='Pokemon List' component={ListScreen}/>
        <Tab.Screen name='Pokemon Detail' component={Detailscreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

