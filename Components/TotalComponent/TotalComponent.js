import React from 'react'
import {View,Text,Image,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TotalComponent = () => {
  return (
      <View style={{marginTop:hp(9),paddingHorizontal:8,paddingVertical:10,width:'94%',marginHorizontal:'3%',backgroundColor:'#f9f9f9',borderRadius:10,justifyContent:'space-between',flexDirection:'row'}}>
          <View>
              <Text style={{color:'#333333',fontSize:wp(3.5)}}>Sub Total</Text>
              <Text style={{color:'#333333',fontSize:wp(3.5)}}>Shipping fee</Text>
              <Text style={{color:'#40aa54',marginTop:10,fontSize:wp(4.5),fontWeight:'700'}}>Total</Text>
          </View>
          <View>
          <Text style={{textAlign:'right',color:'#333333',fontSize:wp(3.5)}}>$16.97</Text>
          <Text style={{textAlign:'right',color:'#333333',fontSize:wp(3.5)}}>$20</Text>
          <Text style={{textAlign:'right',color:'#40aa54',marginTop:10,fontSize:wp(4.5),fontWeight:'700'}}>$36.97</Text>

          </View>
      </View>
  )
}

export default TotalComponent