import React from 'react';

import {DeliverooHomePage, ProductPage} from './Screens';
import 'react-native-gesture-handler';
import {enableScreens} from "react-native-screens";
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

enableScreens();
const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' headerMode='none'>
        <Stack.Screen name="Home" component={DeliverooHomePage}/>
        <Stack.Screen name="Product" component={ProductPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
