import { Pressable } from 'native-base';
import React from 'react'
import {Text,View ,Image} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const GoToNext = ({navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate('OrderSummary')}>
      <View style={{width:'100%',backgroundColor:'#53b175',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:hp(9),borderRadius:15,marginTop:hp(2)}}>
          <Text style={{textAlign:'center',color:'white',fontSize:wp(4.5)}}>Next</Text>
      </View>
    </Pressable>
  )
}

export default GoToNext