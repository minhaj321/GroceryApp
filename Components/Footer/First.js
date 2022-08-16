import React,{useEffect} from 'react';
import {View,Text} from 'react-native'

const First = () => {
  
  useEffect(()=>{
  console.log('first')
  })
  return (
    <Text>First</Text>
  )
}

export default First