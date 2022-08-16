import React from 'react'
import {View,Text} from 'react-native';
import OrderSummaryCard from './../OrderSummaryCard/OrderSummaryCard.js';
import AppleIcon from './../../asset/apple1.png';
import BananaIcon from './../../asset/banana1.png';
import CarrotIcon from './../../asset/carrot1.png';

const OrderSummaryList = () => {
  return (
    <View>

        <OrderSummaryCard title={'Fresh Apple'} price={'$4.99'} img={AppleIcon}  />
        <OrderSummaryCard  title={'Carrots'} price={'$6.99'} img={CarrotIcon}  />
        <OrderSummaryCard title={'Bell Pepper Red'} price={'$4.99'} img={BananaIcon}    />
        
    </View>
    )
}

export default OrderSummaryList