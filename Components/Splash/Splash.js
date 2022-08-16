import React from 'react'
import {View,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SplashImg from './../../asset/splashScreen.jpg';
import { StatusBar } from 'react-native';

const Splash = ({navigation}) => {

    
setTimeout(()=>{
    navigation.navigate('Main')
    },2000)

  return (
    <>
    <StatusBar
     backgroundColor={'transparent'}
hidden={true}
translucent={true}
showHideTransition={true} />
      <Image 
      source={SplashImg}
      style={{height:hp(100),width:wp(100)}}
      />
      </>
  )
}

export default Splash