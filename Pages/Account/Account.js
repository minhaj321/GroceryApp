import React from 'react'
import {View,Text} from 'react-native';
import Header2 from './../../Components/Header2/Header2.js';
import SignOut from './../../Components/SignOut/SignOut.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BackIcon1 from './../../asset/back1.svg';
import { Pressable } from 'native-base';
import { StatusBar } from 'react-native';
import {useRoute} from '@react-navigation/native';

const Account = ({navigation}) => {

    var arr=[
        {
            title:'My Profile',
            push:'Profile'
        },
        {
            title:'Wallet',
            push:'Wallet'
        },
        {
            title:'Support Chat',
            push:'Wallet'
        },
        {
            title:'Membership',
            push:'Membership'
        },
    ]


    return (
    <View style={{width:'92%',marginLeft:'4%'}}>
    <StatusBar backgroundColor={'white'}
  translucent={false}
  hidden={false}
  barStyle='dark-content'
  showHideTransition={true} />
    <Header2  />        
        {arr.map((v,i)=>{
            return(
                <Pressable onPress={()=>navigation.navigate(v.push)}>
                <View key={i} style={{width:'100%',height:hp(8),backgroundColor:'#f9f9f9',marginTop:20,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

                    <Text style={{color:'#333333',fontWeight:'600',marginLeft:30}}>{v.title}</Text>

                    <BackIcon1  style={{marginRight:15,transform:[{scaleX: -1}]}} />

                </View>
                </Pressable>
            )
        })}
        <SignOut navigation={navigation} />
    </View>
    )
}

export default Account