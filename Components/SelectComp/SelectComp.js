import React from 'react'
import {View,Text,Image} from 'react-native';
import {Select} from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BackIcon1 from './../../asset/back1.svg';

const SelectComp = ({placeholder}) => {
  return (
    <Select
            //   selectedValue={pickupCity}
          variant='filled'
          borderWidth={0}
        //   dropdownOpenIcon={<BackIcon1 />}
          dropdownCloseIcon={<BackIcon1 style={{transform:[{rotate:'270deg'}]}} />}
          placeholder={placeholder}
          placeholderTextColor='#40aa54'
          _selectedItem={{
            bg: "#f9f9f9",
          }}
          backgroundColor='#f9f9f9'
          fontSize={wp(3.7)}
          fontWeight={'600'}
          mt={1}
        >
            {
                ['a','b','c','d'].map((v,i)=>(
                    <Select.Item style={{borderWidth:0}} key={i}  label={v} value={v} />
                ))
            }
        </Select>

    )
}

export default SelectComp