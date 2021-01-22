import React from 'react';

import {DeliverooHomePage, ProductPage} from './Screens';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
      <NavigationContainer>{
        <ProductPage />
      }</NavigationContainer>
  );
};

export default App;
