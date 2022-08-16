import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';
import CardImg from './../../asset/BlackCircle.png';
const TransctionCard = () => {
  return (
    <View style={{marginTop:10,backgroundColor:'#f9f9f9',padding:4,borderRadius:5,display:'flex',flexDirection:'row'}}>
        <View style={{width:'20%'}}>
        <Image source={CardImg} style={{height:50,padding:2,width:50,backgroundColor:'white',borderRadius:50}} />
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'80%'}}>
            <View style={{marginLeft:10}}>
                <Text style={{fontWeight:'700',color:'#333333'}}>Name</Text>
                <Text style={{fontSize:12,color:'#c4c4c4'}}>12/2/22</Text>
            </View>
            <View>
            <Text style={{textAlign:'right',color:'#40aa54',fontWeight:'700',marginRight:10}}>$50</Text>
            </View>
        </View>
    </View>
    )
}

export default TransctionCard