import React from 'react'
import {View,Text,ImageBackground,Image,TextInput} from'react-native';
import MainImg from './../../asset/clipmaskwithpicture.png'
import Conwithfb from './../../asset/facebook.svg'
import Conwithgoogle from './../../asset/google.svg'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Pressable } from 'native-base';
import { StatusBar ,Animated} from 'react-native';

const Login = ({navigation}) => {

    var opac = new Animated.Value(0)
    var ImageX = new Animated.Value(0)
    var ImageY = new Animated.Value(1)

    var first = Animated.timing(opac,{
        toValue:1,
        duration:500,
        // delay:500,
        useNativeDriver:true
    }).start();

var second=Animated.sequence([

    Animated.timing(ImageY,{
        toValue:0.95,
        duration:600,
        useNativeDriver:true
    }),
    Animated.parallel([

        Animated.timing(ImageY,{
            toValue:1.1,
            duration:600,
            useNativeDriver:true
        }),
        Animated.timing(opac,{
            toValue:0.1,
            duration:1000,
            useNativeDriver:true
        }),
    ]),
    Animated.timing(opac,{
        toValue:1,
        duration:1000,
        useNativeDriver:true
    }),
])

    const handleLogin = ()=>{
        setTimeout(()=>{
            navigation.navigate('Footer')
            second.reset(); 
        },800)
        second.start();
    }

    return (
        <Animated.View style={{opacity:opac}}>
    <View style={{backgroundColor:'white',height:'100%'}}>
            <StatusBar
  barStyle='light-content'
  backgroundColor={'transparent'}
hidden={false}
translucent={true}
showHideTransition={true} />
<Animated.View style={{transform:[{scaleY:ImageY},{translateY:ImageX}]}}>
        <Image source={MainImg} style={{width:'100%',height:hp(50),marginTop:hp(-5)}} />
</Animated.View>
        <View style={{width:wp('96%'),marginHorizontal:wp('2%')}}>
        <View style={{marginHorizontal:wp('11%'),width:wp('78%')}}>
        <Text style={{color:'#333333',fontSize:wp(5),marginTop:-10,fontWeight:'600'}}>Sign in</Text>
        </View>
            <TextInput
            placeholder='Email'
            style={{marginTop:10,paddingHorizontal:30,backgroundColor:'#f9f9f9',width:wp('78%'),paddingVertical:8,borderRadius:100,alignSelf:'center'}} />

            <TextInput
            placeholder='Password'
            style={{marginTop:10,paddingHorizontal:30,backgroundColor:'#f9f9f9',width:wp('78%'),paddingVertical:8,borderRadius:100,alignSelf:'center'}} />
            <View style={{width:wp('78%'),marginTop:10,alignSelf:'center',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
            <Pressable onPress={handleLogin}>
                    <Text style={{backgroundColor:'#40aa54',color:'white',paddingVertical:12,borderRadius:50,paddingHorizontal:wp(12)}}>Sign in</Text>
            </Pressable>
                <Text style={{color:'#c4c4c4',marginLeft:10,fontSize:wp(3.5)}}>Forget Password ?</Text>
            </View>
            <Text style={{textAlign:'center',fontSize:wp(4),color:'#333333',marginTop:10}}>Or connect with social media</Text>
            <Conwithgoogle width={wp('75%')} style={{alignSelf:'center'}}>
                <Text style={{color:'white',textAlign:'center',fontSize:14}}>Continue with Google</Text>
            </Conwithgoogle>
            <Conwithfb width={wp('75%')} style={{alignSelf:'center'}}>
                <Text style={{color:'white',textAlign:'center',fontSize:14}}>Continue with Facebook</Text>
            </Conwithfb>

        </View>
    </View>
    </Animated.View>
    )
}

export default Login