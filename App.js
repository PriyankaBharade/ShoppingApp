import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/home/homescreen';
//import ProfileScreen from './src/profilescreen';
//import ProductList from './src/ProudctList';
import ProductDetails from './src/details/ProductDetails';
//import PaymentScreen from './src/items/PaymentScreen';
import Payment from './src/payment/Payment';
import Login from './src/registration/Login';
import CategoryBasedProducs from './src/home/category/CategoryBasedProducts';
import Transaction from './src/transaction/Transaction';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome', headerShown: false}}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        {/* <Stack.Screen name="ProductList" component={ProductList} /> */}
        <Stack.Screen
          options={{title: 'Products'}}
          name="CategoryBasedProducs"
          component={CategoryBasedProducs}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        {/* <Stack.Screen name="PaymentScreen" component={PaymentScreen} /> */}
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Transaction" component={Transaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
