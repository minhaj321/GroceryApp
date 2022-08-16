import { Pressable } from 'native-base';
import React from 'react'
import {View,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useDispatch,useSelector } from 'react-redux';
import { setCurrentScreen } from '../../Store/action';

const ConfirmBtn = ({navigation}) => {

  var dispatch = useDispatch();


  return (<Pressable onPress={()=>{
    dispatch(setCurrentScreen('Cart'))
    navigation.navigate('Cart')}}>
    <View style={{marginTop:30,height:hp(9),justifyContent:'center',width:'100%',borderRadius:10,backgroundColor:'#53b175'}}>
        <Text style={{textAlign:'center',color:'white',fontSize:wp(4.5),fontWeight:'700'}}>Confirm</Text>
    </View>
  </Pressable>
    )
}

export default ConfirmBtn