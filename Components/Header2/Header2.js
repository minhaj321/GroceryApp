import React from 'react'
import {View,Text} from 'react-native';

const Header2 = ({back}) => {
  return (
    <View style={{width:'100%',marginTop:20,marginBottom:20}}>
        <Text style={{textAlign:'center',color:'#333333',fontSize:22,fontWeight:'700'}}>Abdullah</Text>
        <Text style={{textAlign:'center',fontSize:14,color:'#c4c4c4'}}>abcd123@gmail.com</Text>
    </View>
    )
}

export default Header2