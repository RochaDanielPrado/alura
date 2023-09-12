import * as React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import TabRoutes from './tab.routes';
import Perfil from '../screens/Perfil';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (


    <Drawer.Navigator screenOptions={{ title: ''}}>
      <Drawer.Screen 
      name="homeXXXXX" 
      component={TabRoutes}
      options={{
        drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
        drawerLabel: 'Inicio'
      }} /> 

<Drawer.Screen 
      name="prof" 
      component={Perfil}
      options={{
        drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
        drawerLabel: 'Perfil'
      }} /> 
    </Drawer.Navigator>
  );
}