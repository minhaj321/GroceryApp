import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';
import MembershipCard from './../MembershipCard/MembershipCard.js'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MembershipList = () => {
  return (
      <View style={{marginTop:20}}>
          <Text style={{fontWeight:'700',fontSize:wp(4.5),color:'#333333'}}>Membership Offers</Text>
          <MembershipCard />
          <MembershipCard />
          <MembershipCard />
          <MembershipCard />
      </View>

  )
}

export default MembershipList