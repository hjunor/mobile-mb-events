import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Main from './pages/Main/index';
import Login from './pages/Login/index';
import Profile from './pages/Profile/index';
import Register from './pages/Register/index';
import Home from './pages/Home/index';
import Event from './pages/Event/index';
import EventRegister from './pages/EventRegister/index';

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
        name="Event"
        options={{
          title: 'Evento',
          headerStyle: {
            backgroundColor: '#FFF',
            elevation: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#2f55d0',
          },
          headerTitleAlign: 'center',
        }}
        component={Event}
      ></Stack.Screen>
      <Stack.Screen
        name="EventRegister"
        options={{
          title: 'Cadastro de Evento',
          headerStyle: {
            backgroundColor: '#FFF',
            elevation: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#2f55d0',
          },
          headerTitleAlign: 'center',
        }}
        component={EventRegister}
      ></Stack.Screen>
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
          <Tabs.Navigator
            tabBarOptions={{
              style: {
                backgroundColor: '#1A1946',
              },
              tabStyle: {
                width: 100,
                height: 60,
              },
            }}
          >
            <Tabs.Screen
              options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                  <SimpleLineIcons name="home" color="#FFF" size={30} />
                ),
              }}
              name="Main"
              component={Main}
            />
            <Tabs.Screen
              options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="user-o" color="#FFF" size={30} />
                ),
              }}
              name="Profile"
              component={Profile}
            />
          </Tabs.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
