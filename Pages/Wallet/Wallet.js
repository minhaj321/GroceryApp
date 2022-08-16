import React from 'react'
import {View,Text} from 'react-native';
import Header from '../../Components/Header/Header';
import Funds from '../../Components/Funds/Funds.js';
import TransactionHistory from '../../Components/TransactionHistory/TransactionHistory.js';
import { ScrollView } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';

const Wallet = () => {
  return (
    <View style={{backgroundColor:'white'}}>
<StatusBar backgroundColor={'white'}
  barStyle='dark-content'
  translucent={false}
  hidden={false}
showHideTransition={true} />
      <ScrollView 
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{width:wp('90%'),marginLeft:wp('5%'),marginTop:20,marginBottom:20,paddingBottom:20}}>
          <Header heading={'Wallet'} back={'Account'} />
          <View style={{height:hp(0.05),backgroundColor:'#333333',marginTop:5,width:'100%'}}></View>
        <Funds />
        <TransactionHistory />
      </ScrollView>
      </View>
  )
}

export default Wallet