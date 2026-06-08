import React from 'react';
import login from '../screen/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signup from '../screen/signup';
import forgotpassword from '../screen/forgotpassword';
import product from '../screen/product';
import tabnavigation from './tabnavigation';
import TabNavigation from './tabnavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='login' component={login} options={{ headerShown: false }} />
      <Stack.Screen name='signup' component={signup} options={{ headerShown: false }} />
      <Stack.Screen name='forgotpassword' component={forgotpassword} options={{ headerShown: false }} />

      {/* Tab Navigation */}
      <Stack.Screen
        name="MainApp"
        component={TabNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen name='product' component={product} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Navigation;