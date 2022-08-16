import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';
import CardImg from './../../asset/3.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MembershipCard = () => {
  return (
    <View style={{marginTop:15,backgroundColor:'#f9f9f9',padding:4,borderRadius:5,display:'flex',flexDirection:'row'}}>
        <View style={{width:'20%'}}>
        <CardImg style={{backgroundColor:'white',borderRadius:5}} />
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'80%'}}>
            <View style={{marginLeft:10}}>
                <Text style={{fontWeight:'700',color:'#333333'}}>Platinum</Text>
                <Text style={{fontSize:wp(3.5)}}>Fruits</Text>
            </View>
            <View>
            <Text style={{textAlign:'right',color:'#40aa54',fontWeight:'700',marginRight:10}}>$100</Text>
            </View>
        </View>
    </View>
    )
}

export default MembershipCard