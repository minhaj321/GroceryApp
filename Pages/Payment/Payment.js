import React from 'react'
import {View,Text} from 'react-native';
import Header from '../../Components/Header/Header';
import CreditCardIcon from './../../asset/Vector.svg';
import Wallet from './../../asset/Wallet_alt_fill.svg';
import Scooty from './../../asset/Group6875.svg';
import BackIcon1 from './../../asset/back1.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';

const Payment = () => {

    var arr=[
        {
            title:'Wallet',
        },
        {
            title:'COD',
        },
        {
            title:'Card',
        },
    ]

    return (
    <View style={{backgroundColor:'white',height:'100%'}}>
    <View style={{width:'92%',marginLeft:'4%',marginTop:20}}>
<StatusBar backgroundColor={'white'}
hidden={false}
  barStyle='dark-content'
  showHideTransition={true} />
        <Header heading={'Payment'} back='Whishlist' />
        <View style={{height:hp(0.05),backgroundColor:'#333333',marginTop:5,width:'100%'}}></View>

        {arr.map((v,i)=>{
            return(
                <View key={i} style={{width:'100%',height:hp('8'),backgroundColor:'#f9f9f9',marginTop:40,borderRadius:10,flexDirection:'row',alignItems:'center'}}>
                    <View style={{width:'15%',justifyContent:'center',alignItems:'center'}}>
                    {
                        v.title=='Wallet' ? 
                        <Wallet /> :
                        v.title=='COD' ?
                        <Scooty /> :
                        <CreditCardIcon />
                    }
                    </View>
                    <View style={{width:'85%'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{color:'#40aa54',fontWeight:'600',marginLeft:10}}>{v.title}</Text>
                    <BackIcon1  style={{marginRight:10,transform:[{scaleX: -1}]}} />
                        </View>
                    </View>
                </View>
            )
        })}

    </View>
    </View>
    )
}

export default Payment