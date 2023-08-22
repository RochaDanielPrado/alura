import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View , StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { generalSettings } from '../util/Colors';

import Perfil from './Perfil';
import Buscar from './Buscar';
import Produtos from './Produtos';
import Servicos from './Servicos';
import Cadastrar from './Cadastrar';

const Drawer = createDrawerNavigator();

export default function Teste() {

    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Buscar" component={Buscar} />
        <Drawer.Screen name="Produtos" component={Produtos} />
        <Drawer.Screen name="Servicos" component={Servicos} />
        <Drawer.Screen name="Cadastrar" component={Cadastrar} />

      </Drawer.Navigator>
    );
  }