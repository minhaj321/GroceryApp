import React from 'react'
import {View,Text,ScrollView} from 'react-native';
import OrderHistoryCardListCard from './../OrderHistoryCardListCard/OrderHistoryCardListCard.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OrderHistoryCardList = ({type}) => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >

        {
            [1,2,3,4,5,6].map((v,i)=>(
                <View key={i}>
                    <OrderHistoryCardListCard type={type} />
                </View>
            ))
        }


        {
            type=='All' &&
            <View style={{width:'100%',marginTop:hp(6)}}>
                <Text style={{color:'#333333',fontWeight:'700'}}>Order Card</Text>
                {
                    [1,2].map((v,i)=>(
                <View key={i} style={{paddingTop:hp(3),marginTop:15,paddingBottom:hp(3),borderColor:'#40aa54',borderWidth:2,borderRadius:10,borderStyle:'dashed',flexDirection:'row',justifyContent:'space-between'}}>

            <View style={{justifyContent:'space-around'}}>
                <Text style={{color:'#333333',marginLeft:10,fontSize:wp(3.5),fontWeight:'700'}}>Order ID (abc123987sad)</Text>
                <Text style={{fontSize:wp(3),marginLeft:10,marginTop:20}}>22 / 09 / 2022</Text>
            </View>

            <View style={{justifyContent:'space-around'}}>
            <Text style={{color:'#40aa54',fontSize:wp(3.5),fontWeight:'700',textAlign:'right',marginRight:10}}>$100</Text>
            <Text style={{color:'#333333',fontSize:wp(3.5),fontWeight:'700',textAlign:'right',marginRight:10,marginTop:hp(3)}}>Status</Text>
            </View>

                </View>
                    ))
                }
            </View>
        }


    </ScrollView>
  )
}

export default OrderHistoryCardList