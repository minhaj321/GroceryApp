import React,{useState} from 'react'
import {Animated,View,Text,ImageBackground,Image,Pressable,Dimensions} from 'react-native';
import { ScrollView } from 'native-base';
import CarrotImg from './../../asset/k8-GHRT9j21m2M-unsplash1.png'
import AppleImg from './../../asset/matheus-cenali-wXuzS9xR49M-unsplash1.png'
import BananaImg from './../../asset/banana1.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const GroceryDeals = ({title}) => {


    var navigation=useNavigation()
var a = new Animated.Value(1)
var b = new Animated.Value(1)
var c = new Animated.Value(1)

var d = Animated.timing(a,{
    toValue:2,
    duration:1000,
    useNativeDriver:true
})

    var handleDetails =(v)=>{

    navigation.navigate('ItemDetails',{
        value:v
    });        

}

    var arr=[
        {
            icon:AppleImg,
            title:'Fresh Apple',
            price:'$50'
        },
        {
            icon:CarrotImg,
            title:'Carrots',
            price:'$20'
        },
        {
            icon:BananaImg,
            title:'Bananas',
            price:'$20'
        }
    ]

    var screenWidth = Dimensions.get('window').width

  return (
    <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'94%',marginHorizontal:'3%'}}>
    <Text style={{fontSize:wp(5),fontWeight:'700',color:'#333333'}}>{title}</Text>
    <Text style={{fontSize:wp(4.5),fontWeight:'700',color:'green'}}>See all</Text>

            </View>
<ScrollView horizontal={true} style={{width:'100%'}}
  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
      <View style={{width:screenWidth,marginRight:100,marginLeft:10}}>

    {/* <ScrollView > */}
        <View style={{flexDirection:'row',paddingBottom:10,paddingTop:10,marginLeft:-10}}>

        {
            arr.map((v,i)=>{
                return(
                        <Pressable key={i} 
                            onPress={()=>handleDetails(v)}
                            // onPress={()=>navigation.navigate('ItemDetails')}
                        >
                    <View style={{width:wp(37),height:hp(30),alignItems:'center',marginLeft:10,backgroundColor:'white',borderRadius:10,shadowColor:'red',shadowOpacity:1,elevation:7,shadowOffset:{height:400,width:0}}}>
                        <Image 
                        style={{width:'100%',height:hp(19),borderTopLeftRadius:10,borderTopRightRadius:10}}
                        source={v.icon}
                        />
                        <Text style={{fontWeight:'700',paddingTop:7,color:'#333333',alignSelf:'flex-start',marginLeft:17}}>
                            {v.title}
                        </Text>
                        <View style={{paddingBottom:20,paddingTop:7,flexDirection:'row',alignSelf:'flex-start',marginLeft:17}}>
                        <Text style={{fontWeight:'700',color:'#333333'}}>{v.price}/</Text>
                        <Text style={{fontWeight:'700',color:'#c4c4c4'}}>KG</Text>
                        </View>
                    </View>
                    </Pressable>
                )
            })
        }


        </View>
    {/* </ScrollView> */}
      </View>
</ScrollView>
</View>

    )
}

export default GroceryDeals