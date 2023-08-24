import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { generalSettings } from '../util/Colors';
import Header from '../components/Header';

import Login from '../screens/Login';
import Principal from '../screens/Principal';
import Cadastro from '../screens/Cadastro';
import CadastroProduto from '../screens/CadastroProduto';
import CadastroServico from '../screens/CadastroServico';


const Stack = createStackNavigator();

export default function StackRoutes() {
  return (


    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="CadastroProduto" component={CadastroProduto} />
      <Stack.Screen name="CadastroServico" component={CadastroServico} />
    </Stack.Navigator>
  );
}