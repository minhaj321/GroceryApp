import React from 'react'
import {View,Text} from 'react-native'
import TransactionList from './../TransactionList/TransactionList.js';

const TransactionHistory = () => {
  return (
<View style={{backgroundColor:'white'}}>
    <Text style={{color:'#333333',fontWeight:'700',marginTop:20}}>Transaction History</Text>
    <TransactionList />
</View>
    )
}

export default TransactionHistory