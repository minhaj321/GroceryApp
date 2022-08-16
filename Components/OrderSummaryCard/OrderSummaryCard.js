import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OrderSummayCard = ({img,price,title}) => {
  return (
    <View style={{marginTop:10,backgroundColor:'white',padding:4,borderRadius:5,shadowColor:'#333333',shadowOpacity:0.5,shadowOffset:{width:0,height:4},elevation:0.3,display:'flex',flexDirection:'row',height:hp(11)}}>
        <View style={{width:wp(20)}}>
        <Image source={img} style={{backgroundColor:'white',borderRadius:5,height:hp(9),width:hp(8.5),marginTop:hp(0.5),marginLeft:10}} />
        </View>
            <View style={{marginLeft:10,justifyContent:'center'}} >
                <Text style={{fontWeight:'700',color:'#333333'}}>{title}</Text>
                <Text style={{fontSize:wp(3.5)}}>{price}</Text>
            </View>
    </View>
    )
}

export default OrderSummayCard