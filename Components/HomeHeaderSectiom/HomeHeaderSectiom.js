import React from 'react'
import {View,Text,Image,ImageBackground,TextInput} from 'react-native';
import MainFlowerImg from './../../asset/whiteFlower.svg';
import BackIcon1 from './../../asset/Vector-3.svg';
import Notification2 from './../../asset/notification.svg';
import Filter from './../../asset/filter.svg';
import Location from './../../asset/location.svg';
import Search from './../../asset/searchhomepage.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BgImg from './../../asset/Vector111.png';
import CarouselComp from './../Carousel/CarouselComp.js'
import { StatusBar } from 'react-native';

const HomeHeaderSectiom = ({navigation}) => {
  return (

<ImageBackground source={BgImg} style={{height:hp(57),zIndex:-1}}>
<StatusBar backgroundColor={'#40aa54'}
hidden={true}
showHideTransition={true} />


<MainFlowerImg
height={hp(10)}
style={{alignSelf:'center',marginTop:40,marginBottom:10}}
width={wp(30)}
/>

<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'96%',marginHorizontal:'2%'}}>
<BackIcon1 onPress={()=>navigation.navigate('Login')} style={{transform:[{rotate:'90deg'}]}} />

<View style={{width:'76%',backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:10,flexDirection:'row'}}>

<Search />

<TextInput placeholder='Search for fruits, vegetables...' 
placeholderTextColor={'lightgray'}

style={{fontSize:wp(3.5),width:'80%',paddingTop:5,paddingBottom:5}} />
<Filter onPress={()=>navigation.navigate('Filter')}/>

</View>


<Notification2  />
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20,width:'96%',marginHorizontal:'2%'}}>

<Location style={{marginLeft:5}}/>

<Text style={{color:'white',fontSize:wp(3.1),marginLeft:wp(-9.8)}}>Pamulang Barat Residence No.5, RT 05/ ...</Text>
<BackIcon1 style={{marginRight:15}} />

</View>

<CarouselComp/>


</ImageBackground>

  )
}

export default HomeHeaderSectiom