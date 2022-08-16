import React from 'react'
import {View,Text} from 'react-native';
import TransactionCard from './../TransactionCard/TransactionCard.js';

const TransactionList = () => {
  return (
    <View style={{marginBottom:0}}>
        {
            [1,2,3,4,5,6,7,8,9,1,1,1,1].map((v,i)=>{
                return(
                    <View key={i}>
        <TransactionCard />
        </View>
                )
            })
        }
    </View>
    )
}

export default TransactionList