import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/homescreen';
import ProfileScreen from './src/profilescreen';
import detailscreen from './src/detailscreen';
const Stack = createNativeStackNavigator();
const App = () => {
 return(
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Welcome' }}
    />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Detail" component={detailscreen} />
  </Stack.Navigator>
</NavigationContainer>
 )
};


export default App;
