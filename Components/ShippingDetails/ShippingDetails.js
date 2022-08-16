import React from 'react';
import {View,Text} from 'react-native';
import Vector from './../../asset/Vector.svg';
import Homeicon from './../../asset/Group6898.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ShippingDetails = () => {
  return (
    <View style={{marginTop:20,paddingBottom:20,backgroundColor:'white'}}>

        <Text style={{color:'#333333',fontWeight:'700',fontSize:wp(4.5),paddingLeft:2,paddingTop:5}}>Shipping Details</Text>
        <View style={{marginTop:30,display:'flex',flexDirection:'row'}}>
            <Homeicon />
            <View style={{marginLeft:20}}>
                <Text style={{color:'#c4c4c4'}}>Alexandra Smith</Text>
                <Text style={{color:'#c4c4c4'}}>Cesu 31 k-2 st,SIA Chill</Text>
                <Text style={{color:'#c4c4c4'}}>Riga</Text>
                <Text style={{color:'#c4c4c4'}}>LV-1012</Text>
                <Text style={{color:'#c4c4c4'}}>Latvia</Text>
            </View>
        </View>

        <Text style={{color:'#333333',fontWeight:'700',fontSize:wp(4.5),paddingLeft:2,paddingTop:5}}>Payment Details</Text>
        <View style={{marginTop:30,display:'flex',flexDirection:'row'}}>
            <Vector />
            <View style={{marginLeft:20}}>
                <Text style={{color:'#c4c4c4'}}>**** **** **** 1234</Text>
            </View>
        </View>


    </View>
    )
}

export default ShippingDetails