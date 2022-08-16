import React,{useState} from 'react'
import {View,Text,ImageBackground,Image,Pressable} from 'react-native';
import FirstImg from './../../asset/1.svg';
import SecondImg from './../../asset/3.svg';
import ThirdImg from './../../asset/4.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MembershipDeals = () => {

    var [selected,setSelected] = useState('Fruits')

    var arr=[
        {
            icon:<FirstImg height={hp(9)} width={wp(20)} />,
            price:50,
            title:'Vegetables',
            packName:'Silver Package'
        },
        {
            icon:<SecondImg height={hp(9)} width={wp(20)} />,
            price:100,
            title:'Fruits',
            packName:'Silver Package'
        },
        {
            icon:<ThirdImg height={hp(9)} width={wp(20)} />,
            price:200,
            title:'Meat',
            packName:'Silver Package'
        }
    ]

    var BoxStyle={borderColor:'#daf9e0',borderWidth:1,paddingBottom:10,width:'32%',borderRadius:5,justifyContent:'center',alignItems:'center',paddingTop:20}

return (
<View style={{width:'92%',marginHorizontal:'4%',paddingBottom:20}}>
    <Text style={{fontSize:wp(5),fontWeight:'700',color:'#333333'}}>Membership Grocery Deals</Text>

    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

        {
            arr.map((v,i)=>{
                return(
                    <View key={i} style={selected==v.title ?  {...BoxStyle,borderColor:'#40aa54',borderWidth:2} : BoxStyle }>
                        <Pressable style={{alignContent:'center',alignItems:'center'}} onPress={()=>setSelected(v.title)}>
                        {v.icon}
                        <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#40aa54',fontSize:wp(2.5),fontWeight:'700',marginLeft:-5}}>$</Text>
                        <Text style={{color:'#40aa54',fontSize:wp(6),fontWeight:'700'}}>{v.price}</Text>
                        </View>
                        <Text style={{color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:10}}>{v.title}</Text>
                        <Text style={{color:'#333333',fontSize:wp(3.4),marginTop:10}}>{v.packName}</Text>
                    </Pressable>
                    </View>
                )

            })
        }

    </View>

</View>
  )
}

export default MembershipDeals