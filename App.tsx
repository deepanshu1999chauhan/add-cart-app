import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './UserProvider';
import Navigation from './src/navigation/navigation';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;