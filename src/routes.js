import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main/index';
import Login from './pages/Login/index';
import Profile from './pages/Profile/index';
import Register from './pages/Register/index';
import Home from './pages/Home/index';
import { Settings } from 'react-native';

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
          headerShown: false,
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
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={Login}
      ></Stack.Screen>
      <Stack.Screen
        name="Register"
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
          },
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={Register}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
          },
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Tab"
      >
        {() => (
          <Tabs.Navigator>
            <Tabs.Screen name="Main" component={Main} />
            <Tabs.Screen name="Profile" component={Profile} />
          </Tabs.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

// export function TabNavigation() {
//   return (
//     <Tabs.Navigator>
//       <Tabs.Screen name="Profile" component={Profile} />
//       <Tabs.Screen name="Main" component={Main} />
//     </Tabs.Navigator>
//   );
// }
