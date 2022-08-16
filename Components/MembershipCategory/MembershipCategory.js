import React from 'react'
import {View,Text,StyleSheet,ImageBackground} from 'react-native';
import { VStack,HStack,Container } from 'native-base';
import BgImg from './../../asset/Group6896.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MembershipCategory = () => {
  return (
    <View style={{width:'100%',borderRadius:10,marginTop:20}}>
      <ImageBackground
      source={BgImg}
      style={{paddingTop:60,paddingBottom:20,width:'100%'}}
      >
        <Text style={{textAlign:'center',fontSize:wp(8),color:'#333333',fontWeight:'800'}}>Silver</Text>

            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <VStack>
            <Text style={{marginLeft:20,color:'#333333',fontSize:wp(3.5)}}>Name</Text>
            <Text style={{marginLeft:20,fontSize:wp(4),color:'#333333',fontWeight:'700'}}>MM/YYYY</Text>
            </VStack>
            <VStack>
            <Text style={{marginRight:20,color:'#333333',fontSize:wp(3.5),textAlign:'right'}}>Expiry date</Text>
            <Text style={{marginRight:20,fontSize:wp(4),color:'#333333',textAlign:"right",fontWeight:'700'}}>MM/YYYY</Text>
            </VStack>
            </View>
            </ImageBackground>
    </View>
    )
}

export default MembershipCategory