import React from 'react'
import {View,Text} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Funds = () => {
  return (
      <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
          <Text style={{fontSize:wp(5),fontWeight:'700',color:'#333333'}}>FUNDS</Text>
          <Text style={{fontSize:wp(9),color:'#333333',marginTop:5,fontWeight:'700'}}>$ 200</Text>
          <View style={{backgroundColor:'#daf9e0',height:hp(5),marginTop:5,borderRadius:5,paddingHorizontal:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#333333',fontWeight:'700'}}>Top up wallet</Text>
          </View>
      </View>
  )
}

export default Funds