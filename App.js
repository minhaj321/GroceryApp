import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import NavigationPage from './Navigation/NavigationPage.js';

const App = () => {

  return (
    <NavigationContainer>
    <NativeBaseProvider>
    <NavigationPage />
    </NativeBaseProvider>
    </NavigationContainer>
  );
};


export default App;


