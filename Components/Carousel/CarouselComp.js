import React,{useState} from 'react'
import Carousel,{Pagination} from 'react-native-snap-carousel';
import {View,Text,ImageBackground,Image} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Offerslider from './../../asset/offerslider.png';


const CarouselComp = () => {

const [carouselIndex,setCarouselIndex] = useState(0)

  var _renderItem = ({item, index}) => {
        return(
    <ImageBackground
    source={Offerslider}
    style={{height:hp(24),width:wp(80),borderRadius:30,marginTop:20}}
    >
        <View style={{paddingLeft:15,paddingTop:10}}>
            <Text style={{color:'white'}}>Vegetables & Fruits</Text>
            <Text style={{color:'white',fontWeight:'700',marginTop:10}}>DISCOUNT</Text>
            <Text style={{color:'white',fontWeight:'700',marginTop:hp(-1),fontSize:wp(7)}}>30%</Text>
    <View style={{flexDirection:'row',marginTop:hp(1.5)}}>
            <Text style={{color:'white',fontWeight:'700'}}>$70 </Text>
            <Text style={{color:'white',fontWeight:'700',textDecorationLine:'line-through'}}>$100</Text>
    </View>
        </View>
    </ImageBackground>
    
        )
    }
    
    var arr=[1,2,3,4,5,6]

    return (
    <View style={{alignItems:'center'}}>
        <Carousel
        onSnapToItem={e=>setCarouselIndex(e)}
            inactiveSlideOpacity={0.8}
            data={arr}
              renderItem={_renderItem}
              sliderWidth={wp(100)}
              itemWidth={wp(80)}
            />
            

                 <Pagination
              dotsLength={6}
              activeDotIndex={carouselIndex}
              containerStyle={{ backgroundColor: 'transparent',marginTop:-15 }}
              dotStyle={{
                  width: 40,
                  height: 9,
                  borderRadius: 50,
                  marginHorizontal: -6,
                  backgroundColor: '#40aa54'
              }}
              inactiveDotStyle={{
                width: 15,
                height: 15,
                borderRadius: 50,
                marginHorizontal: -8,
                backgroundColor: '#c4c4c4'
                // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.8}
              inactiveDotScale={0.6}
            />
    </View>
    )
}

export default CarouselComp


