import * as React from 'react';
import { Text, View , StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Perfil from './Perfil';
import Busca from './Busca';
import Produtos from './Produtos';
import Servicos from './Servicos';
import Cadastrar from './Cadastrar';

const Tab = createBottomTabNavigator();

export default function Principal() {

  const stl = { iconColor: '#e91e63' }

  return (
    <Tab.Navigator
      initialRouteName="Busca"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {backgroundColor: "yellow"},
      }}
    >
      <Tab.Screen
        name="Busca"
        component={Busca}
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