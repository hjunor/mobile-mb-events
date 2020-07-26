import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main/index';
import Login from './pages/Login/index';
import Profile from './pages/Profile/index';
import Register from './pages/Register/index';
import Home from './pages/Home/index';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
          },

          headerTintColor: '#000222',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
          },
          headerBackImage: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={Register}
      />
    </Stack.Navigator>
  );
}
