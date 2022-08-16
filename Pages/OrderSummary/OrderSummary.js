import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import Header from '../../Components/Header/Header';
import OrderSummaryList from '../../Components/OrderSummaryList/OrderSummaryList.js';
import ShippingDetails from '../../Components/ShippingDetails/ShippingDetails.js';
import ConfirmBtn from '../../Components/ConfirmBtn/ConfirmBtn.js';
import { StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={{backgroundColor:'white',height:'200%'}}>
    <StatusBar backgroundColor={'white'}
  translucent={false}
  hidden={false}
  barStyle='dark-content'
  showHideTransition={true} />
    <View style={{marginTop:20,width:'92%',marginLeft:'4%',marginBottom:50}}>
        <Header heading={'Order Summary'} back={'CheckOutPage'} />
        <View style={{height:hp(0.05),backgroundColor:'#333333',marginTop:5,width:'100%'}}></View>
        <OrderSummaryList />
        <ShippingDetails />
        <ConfirmBtn navigation={navigation}/>
    </View>
    </ScrollView>
    )
}

export default OrderSummary