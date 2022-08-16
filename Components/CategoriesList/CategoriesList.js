import React,{useState} from 'react'
import {View,Text,ImageBackground,Image,Pressable,Dimensions} from 'react-native';
import { ScrollView } from 'native-base';
import FirstImg from './../../asset/1.svg';
import SecondImg from './../../asset/3.svg';
import ThirdImg from './../../asset/4.svg';
import FourthImg from './../../asset/5.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CategoriesList = () => {

    
    var arr=[
        {
            icon:<FirstImg height={hp(10)} width={wp(20)} style={{marginTop:10,marginLeft:5}} />,
            title:'Vegetables'
        },
        {
            icon:<SecondImg height={hp(10)} width={wp(20)} style={{marginTop:10,marginLeft:5}} />,
            title:'Fruits'
        },
        {
            icon:<ThirdImg  height={hp(10)} width={wp(20)} style={{marginTop:10,marginLeft:5}} />,
            title:'Meat'
        },
        {
            icon:<FourthImg height={hp(10)} width={wp(20)} style={{marginTop:10,marginLeft:5}} />,
            title:'Seafoods'
        }
    ]


  return (

    <View style={{zIndex:-1,width:'96%',marginHorizontal:'2%',paddingBottom:20,marginTop:50}}>
    <Text style={{fontSize:18,fontWeight:'700',color:'#333333'}}>Categories</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

    {
        arr.map((v,i)=>{
            return(
                <View key={i} style={{width:wp(23),marginTop:10}}>
                <View style={{paddingBottom:7,paddingTop:7,height:wp(23),justifyContent:'center',alignItems:'center',borderRadius:10,width:'100%',backgroundColor:'#daf9e0'}}>
                    <View style={{width:'70%',height:'70%',overflow:'hidden',justifyContent:'center',alignItems:'center'}}>
                    {v.icon}
                    </View>
                </View>
                <Text style={{textAlign:'center',marginTop:3,color:'#333333',fontWeight:'600',fontSize:12}}>
                    {v.title}
                </Text>
                </View>
            )
        })
    }

</View>

        </View>
    )
}

export default CategoriesList