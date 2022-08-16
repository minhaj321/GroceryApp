import React from 'react'
import {View,Text,Image,ImageBackground,TextInput} from 'react-native';
import { Input } from 'native-base';
import BackIcon1 from './../../asset/back1.svg';
import { width } from 'styled-system';
import MainImg from './../../asset/ProfileBg.png'
import Header from '../../Components/Header/Header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import GreenCircle from './../../asset/GreenCircle.png'
import BlackCircle from './../../asset/BlackCircle.png'
import { Pressable } from 'native-base';
import { StatusBar } from 'react-native';


const Profile = ({navigation}) => {

    var arr=[
    {
        type:'Name',
        field:'Minhaj'
    },
    {
        type:'Phone Number',
        field:'12345'
    },
    {
        type:'Email',
        field:'abcdefg@gmail.com'
    },
]

  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
    <StatusBar backgroundColor={'#53b175'}
  barStyle='dark-content'
  translucent={false}
  hidden={false}
    showHideTransition={true} />

    <ImageBackground
    source={MainImg}
    style={{width:'100%',height:hp(23.5)}}
    >
        <View style={{width:wp('90%'),marginHorizontal:wp('5%'),marginTop:20}}>
        <Header heading={'Profile'} back="Account" />
        <Image source={GreenCircle} style={{height:90,width:90,alignSelf:'center',position:'relative',top:50}} />
        </View>
    </ImageBackground>
    <Image 
    source={BlackCircle}
    style={{width:70,height:70,alignSelf:'center',borderRadius:50,position:'relative',top:hp(-6)}}
    />
    <Pressable onPress={()=>navigation.navigate('Address')}>
<View style={{width:wp('33%'),alignSelf:'center',backgroundColor:'#daf9e0',marginTop:hp(-2),borderRadius:10}}>
<Text style={{textAlign:'center',paddingVertical:5,color:'#333333',fontWeight:'700'}}>Edit Profile</Text>
</View>
    </Pressable>
    {
        arr.map((v,i)=>{
            return(
                <View key={i} style={{wdith:wp('90%'),marginHorizontal:wp('5%')}}>
                    <Text style={{fontSize:14,color:'#c4c4c4',marginTop:15}}>{v.type}</Text>
                    <TextInput placeholder={v.type} value={v.field} style={{color:'#333333',paddingHorizontal:10,backgroundColor:'#f9f9f9',borderRadius:10,marginTop:5}} />
                </View>
            )
        })
    }
        <View style={{flexDirection:'row',backgroundColor:'#f9f9f9',borderRadius:5,wdith:wp('90%'),marginHorizontal:wp('5%'),marginTop:30}}>
            <View style={{width:'80%'}}>
        <Input placeholder='Change Password'  placeholderTextColor={'#40aa54'} variant={'unstyled'} style={{width:'100%',fontWeight:'900'}}  />
            </View>
            <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
          <BackIcon1 style={{width:20,height:20,transform:[{scaleX: -1}]}} />
            </View>
        </View>

    </View>
    )
}

export default Profile