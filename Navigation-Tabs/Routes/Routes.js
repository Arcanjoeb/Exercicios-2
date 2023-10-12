import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Usuario from '../Pages/Usuario/Usuario';
import Posts from '../Pages/Posts';

const Tab = createBottomTabNavigator();

export default function Router() {
    return (
      
      <Tab.Navigator
          initialRouteName='Posts'
          screenOptions={{
              headerShown: false
          }}
      >

          <Tab.Screen
              name='Usuario'
              component={Usuario}
              options={{
                  tabBarLabel: 'Usuários',
                  tabBarIcon: ({ color, size }) => {
                      return <Ionicons name='people-outline' color={color} size={size} />
                  }
              }}
          />

          <Tab.Screen
              name='Posts'
              component={Posts}
              options={{
                  tabBarLabel: 'Posts',
                  tabBarIcon: ({ color, size }) => {
                      return <Ionicons name='newspaper-outline' color={color} size={size} />
                  }
              }}
          />
      </Tab.Navigator>
  )
}