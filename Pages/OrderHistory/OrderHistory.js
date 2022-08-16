import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';
import { VStack,HStack,Box,Container } from 'native-base';
import Header from './../../Components/Header/Header.js';
import OrderHistoryCardList from './../../Components/OrderHistoryCardList/OrderHistoryCardList.js';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';

const OrderHistory = ({navigation}) => {

    const [type,setType] = useState('All')

  return (
    <View style={{backgroundColor:'white',marginBottom:hp(25)}}>
<StatusBar backgroundColor={'white'}
  barStyle='dark-content'
  translucent={false}
  hidden={false}
showHideTransition={true} />
    <View style={{...styles.container,marginBottom:10}}>
        <Header heading={'Order History'} back={'Home'} />
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Pressable  onPress={()=>setType('All')}>
            <View style={{alignItems:'center'}}>
            <Text style={styles.tag}>All</Text>
            {   type=='All' &&
            <View style={{height:hp(1),backgroundColor:'#40aa54',position:'relative',top:hp(1.2),width:'100%',borderRadius:10,zIndex:2}}></View>
            }

            </View>
            </Pressable>
            <Pressable  onPress={()=>setType('Pending')}>

            <View style={{alignItems:'center'}} >
            <Text style={styles.tag}>Pending</Text>
            {   type=='Pending' &&
            <View style={{height:hp(1),backgroundColor:'#40aa54',width:'60%',position:'relative',top:hp(1.2),borderRadius:10}}></View>
            }
            </View>
            </Pressable>
            <Pressable  onPress={()=>setType('Processing')}>
            <View style={{alignItems:'center'}}>
            <Text style={styles.tag}>Processing</Text>
            {   type=='Processing' &&
            <View style={{height:hp(1),backgroundColor:'#40aa54',width:'60%',position:'relative',top:hp(1.2),borderRadius:10}}></View>
            }
            </View>
            </Pressable>
            <Pressable  onPress={()=>setType('Shipped')}>
            <View style={{alignItems:'center'}} onPress={()=>setType('Shipped')}>
            <Text style={styles.tag}>Shipped</Text>
            {   type=='Shipped' &&
            <View style={{height:hp(1),backgroundColor:'#40aa54',width:'60%',position:'relative',top:hp(1.2),borderRadius:10}}></View>
            }
            </View>
            </Pressable>

        </View>
<View style={{height:hp(0.05),backgroundColor:'#333333',width:'100%',marginTop:hp(0.6),zIndex:-1}}></View>
    

    <OrderHistoryCardList type={type} />
    </View>

    </View>
  )
}

export default OrderHistory


const styles = StyleSheet.create({
    container:{
        marginTop:20,
        width:'92%',
        marginLeft:'4%'
    },
    tag:{
        color:'#333333',
        fontSize:14,
        marginTop:10,
        fontWeight:'700',
    }

})