import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';
import { VStack,HStack,Box,Container } from 'native-base';
import Header from './../../Components/Header/Header.js';
import MembershipCategory from './../../Components/MembershipCategory/MembershipCategory.js';
import MembershipList from './../../Components/MembershipList/MembershipList.js';
import { StatusBar } from 'react-native';


const Membership = () => {
  return (
    <View style={{backgroundColor:'white',height:'200%'}}>
<StatusBar backgroundColor={'white'}
  barStyle='dark-content'
  hidden={false}
  translucent={false}
showHideTransition={true} />
    <View style={styles.container}>
          <Header heading={'Membership'} back={'Account'} />
          <MembershipCategory />
          <MembershipList />
          </View>
      </View>
  )
}

export default Membership

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        width:'92%',
        marginLeft:'4%'
    },
})