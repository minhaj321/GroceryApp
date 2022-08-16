import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,Pressable,Animated} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CheckOutCard = ({img,price,title,handle,resetHandle}) => {

var navigation = useNavigation();
var [count,setCount] = useState(0);


    var styleA={
        height:hp(13.5),width:'100%' 
    }


return (
    <View style={{marginTop:10,backgroundColor:'white',padding:4,borderRadius:5,shadowColor:'#333333',shadowOpacity:0.5,shadowOffset:{width:0,height:4},elevation:0.3,display:'flex',flexDirection:'row',height:hp(15)}}>
        <View style={{width:'20%'}}>

        <Image source={img} style={{backgroundColor:'white',borderRadius:5,height:hp(13.5),width:'100%'}} />
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
            <View style={{marginLeft:10}}>
                <Text style={{fontWeight:'700',color:'#333333'}}>{title}</Text>
                <Text style={{fontSize:wp(3.5)}}>{price}</Text>
                <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
                <Pressable onPress={()=>{
                    if(count>0){
                        setCount(count-1)
                    }
                }
                }>
                    <View style={{height:wp(5.5),width:wp(5.5),backgroundColor:'white',borderRadius:5,borderColor:'#daf9e0',borderWidth:1,marginRight:4}}>
                        <Text style={{textAlign:'center',marginTop:wp(-0.6),color:'#c4c4c4'}}>-</Text>
                    </View>
                </Pressable>
                    <View style={{height:wp(8),width:wp(8),backgroundColor:'#daf9e0',borderRadius:5,borderColor:'white',borderWidth:1,marginRight:4,marginTop:-5}}>
                        <Text style={{textAlign:'center',color:'#40aa54',marginTop:wp(0.6)}}>
                            {count}
                        </Text>
                    </View>
                    <Pressable onPress={()=>{
                    if(count<99){
                        setCount(count+1)
                    }
                }
                }>
                    <View style={{height:wp(5.5),width:wp(5.5),backgroundColor:'white',borderRadius:5,borderColor:'#daf9e0',borderWidth:1}}>
                        <Text style={{textAlign:'center',marginTop:wp(-0.6),color:'#40aa54'}}>+</Text>
                    </View>
                    </Pressable>
                </View>
            </View>
            <View style={{backgroundColor:'#daf9e0',height:wp(5.5),width:wp(5.5),borderRadius:5}}>
                <Text style={{color:'#40aa54',padding:3,paddingTop:0,textAlign:'center',marginTop:wp(-0.6)}}>x</Text>
            </View>
        </View>
    </View>
    )
}

export default CheckOutCard