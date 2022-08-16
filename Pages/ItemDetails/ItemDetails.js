import React,{useState} from 'react'
import {View,Text,Image,ImageBackground,Animated} from 'react-native';
import MainImg from './../../asset/matheus-cenali-wXuzS9xR49M-unsplash1.png'
import MainImg1 from './../../asset/banana1.png'
import MainImg2 from './../../asset/carrot1.png'
import BackIcon1 from './../../asset/back1.svg';
import Addtofavv from './../../asset/addtofavv.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RedStars from './../../asset/RedStars.svg';
import { Pressable } from 'native-base';
import { StatusBar } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentScreen } from '../../Store/action';

const ItemDetails = ({navigation,route}) => {
    
    var [count,setCount] = useState(0);
    
    var Scale = new Animated.ValueXY({x:1,y:1})
    var MovementX = new Animated.Value(1)
    var MovementY = new Animated.Value(1)
    var opac = new Animated.Value(1)
    const dispatch = useDispatch()

    var {value} = route.params;
    var x;
    if(value.title=='Fresh Apple'){
        x=wp(-60)
    }else if(value.title=='Carrots'){
        x=wp(0)
    }else{
        x=wp(60)
    }

console.log(x)
    var anime = Animated.sequence([
            Animated.timing(Scale,{
                toValue:{x:0.35,y:0.45},
                duration:500,
                useNativeDriver:true
            }),
            Animated.parallel([

                Animated.timing(MovementY,{
                    toValue:hp(90),
                    duration:500,
                    useNativeDriver:true
                }),
                Animated.timing(MovementX,{
                    toValue:x,
                    duration:500,
                    useNativeDriver:true
                }),
                Animated.timing(opac,{
                    toValue:0.05,
                    duration:500,
                    useNativeDriver:true
                }),
            ])
    ])

const handleBack = ()=>{

    setTimeout(()=>{
        dispatch(setCurrentScreen('Home'))
        navigation.navigate('Home')
        anime.reset();
    },1000)

    anime.start();
}

    return (
      <View style={{backgroundColor:'white',height:'200%'}}>
          <Animated.View style={{opacity:opac}}>
          <StatusBar backgroundColor={'transparent'}
  barStyle='light-content'
  hidden={false}
translucent={true}
showHideTransition={true} />

<Animated.View style={{height:hp(45),width:'100%',transform:[
    {scaleX:Scale.x},{scaleY:Scale.y},
    {translateX:MovementX},{translateY:MovementY}
]}}>
          <ImageBackground source={value.title=='Fresh Apple' ? MainImg : value.title=='Carrots' ? MainImg2 : MainImg1}
          style={{height:hp(45)}}
          imageStyle={{width:'101%',borderBottomLeftRadius:15,borderBottomRightRadius:15}}>

<Animated.View style={{width:wp('90%'),marginLeft:wp('5%'),opacity:opac}}>

        <View style={{flexDirection:'row',marginTop:40,justifyContent:'space-between'}}>
                <BackIcon1 onPress={()=>handleBack()} />
                <Addtofavv/>
        </View>
        </Animated.View>

          </ImageBackground>
          </Animated.View>
          <View style={{width:wp('90%'),marginHorizontal:wp('5%')}}>

{/* first row container */}

            <View style={{zIndex:-1,flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                <Text style={{color:'#40aa54',fontSize:wp('5%'),fontWeight:'700',marginTop:15}}>Fruits</Text>
                <Text style={{color:'#333333',fontSize:wp('5%'),fontWeight:'700'}}>Fresh Apple</Text>
 
                <View style={{flexDirection:'row',marginTop:7}}>
                    <Text style={{color:'#40aa54',fontWeight:'700',fontSize:wp('3.5%')}}>$50</Text>
                    <Text style={{fontWeight:'700',color:'#c4c4c4',fontSize:wp('3.5%')}}>/KG $70</Text>
                </View>
                
                </View>

                <View style={{justifyContent:'space-around',marginTop:7}}>
                <Pressable onPress={()=>{
                    if(count<99){
                        setCount(count+1)
                    }
                }
                }>
                <View style={{height:wp('5.5%'),width:wp('5.5%'),marginLeft:5,backgroundColor:'white',borderRadius:5,borderColor:'#daf9e0',borderWidth:1}}>
                        <Text style={{textAlign:'center',marginTop:wp(-0.6),color:'#40aa54'}}>+</Text>
                    </View>
                </Pressable>
                    <View style={{height:wp('8%'),width:wp('8%'),backgroundColor:'#daf9e0',borderRadius:5,borderColor:'white',borderWidth:1}}>
                        <Text style={{textAlign:'center',marginTop:wp(0.6),color:'#40aa54'}}>{count}</Text>
                    </View>
                    <Pressable onPress={()=>{
                    if(count>0){
                        setCount(count-1)
                    }
                }
                }>
                    <View style={{height:wp('5.5%'),width:wp('5.5%'),marginLeft:5,backgroundColor:'white',borderRadius:5,borderColor:'#daf9e0',borderWidth:1}}>
                        <Text style={{textAlign:'center',marginTop:wp(-0.6),color:'#c4c4c4'}}>-</Text>
                    </View>
                    </Pressable>

                </View>
            </View>

<Text style={{color:'#333333',fontSize:wp('4%'),marginTop:10,fontWeight:'700'}}>Reviews</Text>

<View style={{backgroundColor:'#f9f9f9',zIndex:-1,borderRadius:10,marginTop:4}}>
{/* second row container */}
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,width:'94%',marginHorizontal:'3%'}}>
<Text style={{color:'#333333',fontWeight:'700'}}>Name</Text>
<RedStars/>
</View>

{/* third container */}
<View style={{marginTop:10,width:'94%',marginHorizontal:'3%'}}>
    <Text>Lorem ipsum dolor sit armet, conseldentation addiction elite. Aenomen commando liquid eget dolor.</Text>
</View>

</View>

<Pressable onPress={()=>{
dispatch(setCurrentScreen('Home'))
    navigation.navigate('Home')
}}>
<View style={{backgroundColor:'#53b175',width:'100%',alignSelf:'center',borderRadius:15,marginTop:30}}>
    <Text style={{color:'white',textAlign:'center',paddingTop:18,paddingBottom:18}}>Add To Cart</Text>
</View>
</Pressable>


          </View>
          </Animated.View>
      </View>
  )
}

export default ItemDetails