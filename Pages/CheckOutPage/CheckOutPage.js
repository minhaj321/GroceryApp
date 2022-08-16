import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';
import { VStack,HStack,Box,Container } from 'native-base';
import Header from './../../Components/Header/Header.js';
import MembershipCategory from './../../Components/MembershipCategory/MembershipCategory.js';
import MembershipList from './../../Components/MembershipList/MembershipList.js';
import MyCartList from './../../Components/MyCartList/MyCartList.js';
import GoToNext from './../../Components/GoToNext/GoToNext.js';
import TotalComponent from './../../Components/TotalComponent/TotalComponent.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';

const CheckOutPage = ({navigation}) => {
  return (
          <View style={{backgroundColor:'white'}}>
<StatusBar backgroundColor={'white'}
hidden={false}
  translucent={false}
  barStyle='dark-content'
  showHideTransition={true} />
<View style={{...styles.container,marginBottom:10}}>
          <Header heading={'Checkout'} back={'Cart'} />
      </View>
            <View style={{width:'100%',backgroundColor:'white'}}>
<View style={{height:hp(0.05),backgroundColor:'#333333',width:'100%'}}></View>
        <View style={styles.container1}>
        <MyCartList />
        <TotalComponent />
        <GoToNext navigation={navigation}/>
        </View>
          </View>
      </View>
  )
}

export default CheckOutPage

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