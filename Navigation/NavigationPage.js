import React from 'react';
import {View} from 'react-native';
import Wallet from './../Pages/Wallet/Wallet.js';
import Login from './../Pages/login/login.js';
import Profile from './../Pages/Profile/Profile.js';
import ItemDetails from './../Pages/ItemDetails/ItemDetails.js';
import Payment from './../Pages/Payment/Payment.js';
import OrderSummary from './../Pages/OrderSummary/OrderSummary.js';
import Membership from './../Pages/Membership/Membership';
import MainPage from './../Pages/MainPage/MainPage.js';
import Filter from './../Pages/Filter/Filter.js';
import CheckOutPage from './../Pages/CheckOutPage/CheckOutPage.js';
import Address from './../Pages/Address/Address.js';
import Footer from './../Components/Footer/Footer';
import Splash from './../Components/Splash/Splash.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from '../Store/index.js';

const Stack = createNativeStackNavigator();

const NavigationPage = ({navigation}) => {

  return (
    <Provider store={store}>
      <Stack.Navigator 
      screenOptions={{
          headerShown:false
      }}>

        <Stack.Screen name="/" component={Splash} />
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="CheckOutPage" component={CheckOutPage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Membership" component={Membership} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />

        
        <Stack.Screen name="Payment" component={Payment} />
        
        <Stack.Screen name="Footer" component={Footer} />
      </Stack.Navigator>
    </Provider>

    )
}

export default NavigationPage