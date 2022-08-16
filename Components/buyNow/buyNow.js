import React from 'react'
import {Text,View ,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Pressable } from 'native-base';
const BuyNow = ({navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate('Payment')}>
      <View style={{width:'100%',backgroundColor:'#53b175',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:hp(9),borderRadius:20,marginTop:70}}>
          <Text style={{textAlign:'center',color:'white',fontSize:wp(4.5)}}>Buy Now</Text>
      </View>
    </Pressable>
  )
}

export default BuyNow