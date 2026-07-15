import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './UserProvider';
import Navigation from './src/navigation/navigation';

const App = () => {
  return (
    <UserProvider>
      <StatusBar
        backgroundColor="#ffffff"
        barStyle="dark-content"
        translucent={false}
      />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;