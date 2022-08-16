import React from 'react'
import {View,Text,Image} from 'react-native'
import MyCartCard from '../MyCartCard/MyCartCard';
import AppleIcon from './../../asset/apple1.png';
import BananaIcon from './../../asset/banana1.png';
import CarrotIcon from './../../asset/carrot1.png';
import CheckOutCard from './../CheckOutCard/CheckOutCard.js';

const MyCartList = () => {
  return (
    <View style={{marginTop:5}}>
        <CheckOutCard title={'Fresh Apple'} price={'$4.99'} img={AppleIcon}  />
        <CheckOutCard  title={'Carrots'} price={'$6.99'} img={CarrotIcon}  />
        <CheckOutCard title={'Bell Pepper Red'} price={'$4.99'} img={BananaIcon}    />
    </View>
    )
}

export default MyCartList