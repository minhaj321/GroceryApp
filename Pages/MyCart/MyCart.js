import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';
import { VStack,HStack,Box,Container } from 'native-base';
import Header from './../../Components/Header/Header.js';
import MembershipCategory from './../../Components/MembershipCategory/MembershipCategory.js';
import MembershipList from './../../Components/MembershipList/MembershipList.js';
import MyCartList from './../../Components/MyCartList/MyCartList.js';
import Checkout from './../../Components/Checkout/Checkout.js';
import Footer from './../../Components/Footer/Footer.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
import MyCartCard from '../../Components/MyCartCard/MyCartCard';
import AppleIcon from './../../asset/apple1.png';
import BananaIcon from './../../asset/banana1.png';
import CarrotIcon from './../../asset/carrot1.png';
import BackIcon1 from './../../asset/back1.svg';
import NotiIcon from './../../asset/notification2.svg';
// import {useRoute} from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentScreen } from '../../Store/action.js';
const MyCart = ({navigation}) => {


  var [handle,setHandle] = useState(false);

  const resetHandle = ()=>setHandle(false)
  var dispatch = useDispatch();


  return (
          <View style={{backgroundColor:'white'}}>
<StatusBar backgroundColor={'white'}
  barStyle='dark-content'
  translucent={false}
  hidden={false}
showHideTransition={true} />
      <View style={{...styles.container,marginBottom:10}}>


          {/* <Header heading={'My Cart'} back={'Home'} /> */}
          <View>
    <HStack>
    <View style={{width:'10%',display:'flex',alignItems:'flex-start'}}>
          <BackIcon1 style={{}} onPress={()=>{
            dispatch(setCurrentScreen('Home'))
            setHandle(true)
            setTimeout(()=>{
              setHandle(false)
            },1500)
          }} />
    </View>
    <View style={{width:'80%'}}>
  <Text style={{textAlign:'center',fontSize:wp('5'),color:'#333333'}}>My Cart</Text>                  
    </View>
    <View style={{width:'10%',display:'flex',alignItems:'flex-end'}}>
      <NotiIcon style={{}} />
  </View>
  
</HStack>
</View>

      </View>


            <View style={{width:'100%',backgroundColor:'white'}}>


<View style={{height:hp(0.05),backgroundColor:'#333333',width:'100%'}}></View>



        <View style={styles.container1}>
        {/* <MyCartList /> */}
        <View style={{marginTop:5}}>
        <MyCartCard title={'Fresh Apple'} price={'$4.99'} img={AppleIcon} handle={handle} resetHandle={resetHandle} />
        <MyCartCard  title={'Carrots'} price={'$6.99'} img={CarrotIcon} handle={handle} resetHandle={resetHandle} />
        <MyCartCard title={'Bell Pepper Red'} price={'$4.99'} img={BananaIcon} handle={handle}  resetHandle={resetHandle}  />
    </View>

        <Checkout navigation={navigation} />
        </View>
          </View>
      </View>
  )
}

export default MyCart

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        width:'90%',
        marginLeft:'5%'
    },
    container1:{
        width:'90%',
        marginLeft:'5%'
    }

})