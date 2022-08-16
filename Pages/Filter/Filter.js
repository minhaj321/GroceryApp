import React,{useState} from 'react'
import {View,Text,Image,ImageBackground} from 'react-native';
import BackIcon1 from './../../asset/back1.svg';
import SelectComp from './../../Components/SelectComp/SelectComp.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RangeSlider from 'rn-range-slider';
import { StatusBar } from 'react-native';
import { Pressable } from 'native-base';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentScreen } from '../../Store/action';
const Filter = ({navigation}) => {
  
  const [low,setLow] = useState(0)
  const [high,setHigh] = useState(100)
  const dispatch = useDispatch()
  
  return (
      <>
    <View style={{backgroundColor:'white',height:'200%'}}>
<StatusBar backgroundColor={'white'}
  translucent={false}
  barStyle='dark-content'
  hidden={false}
showHideTransition={true} />
    <View style={{width:'90%',marginHorizontal:'5%'}}>

    <View style={{flexDirection:'row',marginBottom:10,marginTop:15}}>
    <View style={{width:'20%'}}>
      <Pressable onPress={()=>{
        dispatch(setCurrentScreen('Home'))
        navigation.navigate('Home')}
    } >
    <View style={{backgroundColor:'#f9f9f9',height:wp(7.5),width:wp(7.5),borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#40aa54',padding:3,paddingTop:0,textAlign:'center'}}>x</Text>
            </View>
            </Pressable>
          {/* <BackIcon1 /> */}
    </View>
    <View style={{width:'80%'}}>
    <Text style={{textAlign:'center',fontSize:wp(5),color:'#333333',marginRight:'20%'}}>Filter</Text>
    </View>

    </View>


    </View>

<View style={{height:hp(0.05),backgroundColor:'lightgray',marginBottom:20}}></View>

    <View style={{width:'90%',marginHorizontal:'5%'}}>

        <Text style={{color:'#333333',fontWeight:'700'}}>Sort by</Text>
    <SelectComp placeholder={'Sort by'} />

    <Text style={{color:'#333333',fontWeight:'700'}}>Category</Text>
    <SelectComp placeholder={'Category'} />

    <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
    <Text style={{color:'#333333',fontWeight:'700'}}>Price range</Text>
    <Text style={{fontSize:13,fontWeight:'600'}}>${low}  -  ${high}</Text>

    </View>
    </View>

<View style={{width:'90%',marginHorizontal:'5%'}}>
<RangeSlider
    style={{marginTop:10}}
  min={0}
  max={100}
  renderThumb={()=>(<View style={{backgroundColor:'#40aa54',width:wp(9),height:wp(9),borderRadius:10}}></View>)

}

  renderRail={()=>(<View style={{backgroundColor:'#daf9e0',width:'100%',height:wp(6),borderRadius:10}}></View>)}
  renderRailSelected={()=>(<View style={{backgroundColor:'#40aa54',height:wp(6),flex:1}}></View>)}
  renderLabel={(val)=>(<View><Text style={{fontSize:wp(3),color:'#40aa54'}}>${val}</Text></View>)}
  onValueChanged={(l,h)=>
    {
      setLow(l)
      setHigh(h)
    }
}
  step={10}
//   renderNotch={()=>(<View style={{backgroundColor:'red',width:'100%',}}><Text>as</Text></View>)}
  floatingLabel={false}
/>

</View>
</View>
    </>
  )
}

export default Filter