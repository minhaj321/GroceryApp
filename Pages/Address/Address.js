import React from 'react'
import {View,Text} from 'react-native';
import { Input, Pressable } from 'native-base';
import Header from '../../Components/Header/Header';
import BackIcon1 from './../../asset/back1.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { setCurrentScreen } from '../../Store/action';


const Address = ({navigation}) => {

  var dispatch = useDispatch();

  return (
    <View style={{backgroundColor:'white',height:'200%'}}>
<StatusBar backgroundColor={'white'}
  translucent={false}
  barStyle='dark-content'
  hidden={false}
showHideTransition={true} />
    <View style={{marginTop:20,width:'92%',marginLeft:'4%'}}>
        <Header heading={'Address'} back={'Profile'}/>
        <View style={{height:hp(0.05),backgroundColor:'#333333',marginTop:5,width:'100%'}}></View>

        <Text style={{marginTop:10,color:'#c4c4c4'}}>Name</Text>
        <Input placeholder='Name' placeholderTextColor={'#333333'} variant={'unstyled'} style={{borderBottomColor:'#e2e2e2',borderBottomWidth:0.5}} />

        <Text style={{marginTop:10,color:'#c4c4c4'}}>Shipping Address</Text>
        <Input placeholder='Address' placeholderTextColor={'#333333'} variant={'unstyled'} style={{borderBottomColor:'#e2e2e2',borderBottomWidth:0.5}} />

        <Text style={{marginTop:10,color:'#c4c4c4'}}>Phone Number</Text>
        <Input placeholder='Phone Number' placeholderTextColor={'#333333'} variant={'unstyled'} style={{borderBottomColor:'#e2e2e2',borderBottomWidth:0.5}} />

        <Text style={{marginTop:10,color:'#c4c4c4'}}>Pervious Address</Text>
        <View style={{flexDirection:'row',backgroundColor:'#f9f9f9',borderRadius:5}}>
            <View style={{width:'80%'}}>
        <Input placeholder='Previous Address' placeholderTextColor={'#333333'} variant={'unstyled'} style={{width:'100%'}}  />
            </View>
            <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
          <BackIcon1 style={{transform:[{scaleX: -1}]}} />
            </View>
        </View>
        <Pressable onPress={()=>{
          dispatch( setCurrentScreen('Account') )
          navigation.navigate('Account')}
          }>
        <View style={{marginTop:60,height:hp(9),justifyContent:'center',width:'100%',borderRadius:10,backgroundColor:'#53b175'}}>
            <Text style={{fontWeight:'700',fontSize:wp(4.5),color:'white',textAlign:'center'}}>Save</Text>
        </View>
        </Pressable>
    </View>
    </View>
    )
}

export default Address