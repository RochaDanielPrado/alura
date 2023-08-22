import * as React from 'react';
import { Text, View , StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { generalSettings } from '../util/Colors';


import {Buscar, Produtos, Servicos, Cadastrar, Perfil} from './index';


const Tab = createBottomTabNavigator();

export default function Routes() {

  const stl = { iconColor: '#e91e63' }

  const screenOptions = {
    tabBarShowLabel: true,
    headerShow: false,
    tabBarActiveTintColor: generalSettings.buttonColor,
    tabBarStyle: {
      position: 'absolute',
      botton: 0,
      rigth: 0,
      left: 0,
      elevation: 0,
      //height: 60,
      backgroundColor: generalSettings.primaryColor, 
      borderTopWidth: '2', 
      borderTopColor: generalSettings.buttonColor,
    },
  }

  return (
  
    <Tab.Navigator
       initialRouteName="Buscar"
      screenOptions={screenOptions}>

      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-search" color={stl.iconColor} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={Produtos}
        options={{
          tabBarLabel: 'Produtos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={stl.iconColor} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Serviços"
        component={Servicos}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="human-greeting" color={stl.iconColor} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{
          tabBarLabel: 'Cadastrar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={stl.iconColor} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={stl.iconColor} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  
  );
}
