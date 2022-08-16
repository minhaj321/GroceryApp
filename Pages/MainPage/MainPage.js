import React from 'react'
import {View,Text,Image,Button,Animated} from 'react-native';
import MainImg from './../../asset/clipmaskwithpicture.png'
import MainFlowerImg from './../../asset/ea403560-f2e8-4884-9084-74f2ef2e7c43.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Pressable } from 'native-base';
import { StatusBar } from 'react-native';
const MainPage = ({navigation}) => {


  const a = new Animated.Value(1);
  const b = new Animated.Value(1);
  const c = new Animated.Value(1);

var me = Animated.sequence([
  
  // zoom in 
  Animated.timing(a,{
    toValue:1.03,
    duration:700,
    useNativeDriver:true
  }),
    // zoom out 
    Animated.parallel([

    Animated.timing(a,{
      toValue:0.9,
      duration:700,
      useNativeDriver:true
    }),
    // zoom out 
    Animated.timing(b,{
      toValue:-50,
      duration:700,
      useNativeDriver:true
    }),
    Animated.timing(c,{
      toValue:0.2,
      duration:700,
      useNativeDriver:true
    })
  ]),
      // reset 
      Animated.parallel([

        Animated.timing(a,{
          toValue:1,
          duration:500,
          useNativeDriver:true
        }),
        // zoom out 
        Animated.timing(b,{
          toValue:0,
          duration:500,
          useNativeDriver:true
        }),
        Animated.timing(c,{
          toValue:1,
          duration:500,
          useNativeDriver:true
        })
      ]),

])


const handleAnim=()=>{
console.log('yes')
setTimeout(()=>{
navigation.navigate('Login')
me.reset();
},1400)

me.start();
}

return (
<View>
  <Animated.View style={{opacity:c}}>
  <StatusBar
  barStyle='light-content'
backgroundColor={'transparent'}
hidden={false}
translucent={true}
showHideTransition={true} />

<Animated.View style={{height:hp(55),transform:[{scaleY:a},{translateY:b}]}}>
<Image source={MainImg} style={{width:'100%',height:'100%'}} />
</Animated.View>
<MainFlowerImg height={hp(15)} width={wp(40)} style={{alignSelf:'center',marginTop:-30}} />
<Text style={{fontSize:wp(11),color:'#333333',textAlign:'center',marginBottom:0}}>Welcome</Text>
<Text style={{fontSize:wp(11),color:'#333333',textAlign:'center',marginTop:-10}}>to our store</Text>
<Pressable onPress={()=>handleAnim()}>
{/* <Pressable onPress={()=>navigation.navigate('Login')}> */}
<View style={{backgroundColor:'#53b175',width:'80%',alignSelf:'center',marginTop:10,borderRadius:10}} >
    <Text style={{color:'white',textAlign:'center',paddingTop:18,paddingBottom:18}}>Get Started</Text>
</View>
</Pressable>
</Animated.View>
</View>
    )
}

export default MainPage