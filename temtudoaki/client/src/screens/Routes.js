import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { generalSettings } from '../util/Colors';
import Header from '../components/Header';


import { Buscar, Produtos, Servicos, Cadastrar, Perfil } from './index';


const Tab = createBottomTabNavigator();

export default function Routes() {

  const screenOptions = {
    tabBarShowLabel: true,
    headerTitle: '', // some com o texto default da pagina
    headerShown: true,
    headerTitleAlign: 'left',
    headerTransparent: false,
    headerBackground: () => (
      <Header/>
    ),

    tabBarActiveTintColor: generalSettings.buttonColor,
    tabBarStyle: {
      paddingTop: 5,
      backgroundColor: generalSettings.primaryColor,
      borderTopWidth: 1,
      borderTopColor: generalSettings.buttonColor,
    },
  };

  return (
    <>
      {/* <Header /> */}

      <Tab.Navigator
        initialRouteName="Buscar"
        screenOptions={screenOptions}>

        <Tab.Screen
          name="Buscar"
          component={Buscar}
          options={{
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Produtos"
          component={Produtos}
          options={{
            tabBarLabel: 'Produtos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="shopping" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Serviços"
          component={Servicos}
          options={{
            tabBarLabel: 'Serviços',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="human-greeting" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{
            tabBarLabel: 'Cadastrar',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />

      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,   
    backgroundColor: generalSettings.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: generalSettings.buttonColor,
      // height:60,
  }
})
