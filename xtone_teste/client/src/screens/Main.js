import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DrawerRoutes from '../routes/drawer.routes';

export default function Main() {

  return (
    <DrawerRoutes />
  );
}
