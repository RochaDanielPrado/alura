import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { generalSettings } from '../util/Colors';

import SignIn from '../screens/SignIn';
import Main from '../screens/Main';
import NewUser from '../screens/NewUser';



const Stack = createStackNavigator();

export default function StackRoutes() {
    return (


    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="NewUser" component={NewUser} />
      
    </Stack.Navigator>
  );
}