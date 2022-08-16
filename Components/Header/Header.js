import React from 'react'
import { HStack } from 'native-base';
import BackIcon1 from './../../asset/back1.svg';
import NotiIcon from './../../asset/notification2.svg';
import {View,Text,StyleSheet,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentScreen } from '../../Store/action';

const Header = ({heading,back}) => {

var navigation = useNavigation();

var dispatch = useDispatch();

  return (
    <View>
    <HStack>
    <View style={{width:'10%',display:'flex',alignItems:'flex-start'}}>
          <BackIcon1 style={{}} onPress={()=>{
dispatch(setCurrentScreen(back))
navigation.navigate(back)}
            } />
    </View>
    <View style={{width:'80%'}}>
  <Text style={{textAlign:'center',fontSize:wp('5'),color:'#333333'}}>{heading}</Text>                  
    </View>
    <View style={{width:'10%',display:'flex',alignItems:'flex-end'}}>
      <NotiIcon style={{}} />
  </View>
  
</HStack>
</View>

    )
}

export default Header
