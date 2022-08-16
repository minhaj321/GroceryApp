import React,{useState,useEffect} from 'react'
import {Text,View,StyleSheet,ImageBackground} from 'react-native';
import HomeIcon from './../../asset/homeicon.svg'
import Accountlogo from './../../asset/accountlogo.svg'
import Orderhistoy from './../../asset/orderhistoy.svg'
import Wishlist from './../../asset/wishlist.svg'
import Cart from './../../asset/cart.svg'
import { alignItems } from 'styled-system';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cartbar from './../../asset/cartbar.svg';
import Orderhistorybar from './../../asset/orderhistorybar.svg';
import Homescreenbar from './../../asset/homescreenbar.svg';
import Wishlistbar from './../../asset/wishlistbar.svg';
import Accountbar from './../../asset/accountbar.svg';
import { useNavigation } from '@react-navigation/native';
import {Pressable} from 'native-base';
import HomeGreen from './../../asset/HomeGreen.svg'
import OrderGreen from './../../asset/OrderGreen.svg'
import CartGreen from './../../asset/CartGreen.svg'
import WishListGreen from './../../asset/WishListGreen.svg'
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentScreen } from '../../Store/action';
import AccountGreen from './../../asset/AccountGreen.svg'

import WhishList from '../../Pages/WhishList/WhishList.js';
import OrderHistory from './../../Pages/OrderHistory/OrderHistory.js';
import Home from './../../Pages/Home/Home.js';

import Account from './../../Pages/Account/Account.js';
import MyCart from './../../Pages/MyCart/MyCart';


const Tab = createBottomTabNavigator();

const Footer = ({navigation,route}) => {
  
  // const route = useRoute();
  const navigate = useNavigation();
  const [screen,setScreen] = useState('Home')
  var currentScreen = useSelector(state=>state.screen)
  var dispatch = useDispatch();

  useEffect(()=>{
    setScreen(currentScreen)

  },[currentScreen])


  return (

        <Tab.Navigator
          
        sceneContainerStyle={{backgroundColor:'white',marginBottom:20}}
        screenOptions={({route})=>(
          {tabBarShowLabel:false,tabBarStyle:{width:'100%',borderColor:'transparent'},
        tabBarBackground:()=>{ 
          if(screen=='Account'){
            return(<Accountbar style={{marginLeft:-44,marginTop:-19}}  />) 
          }else if(screen=='Order History'){            
            return(<Orderhistorybar style={{marginLeft:-17,marginTop:-19}} />)
          }else  if(screen=='Cart'){
            return(<Cartbar style={{marginLeft:-24,marginTop:-19}}  />) 
          }else  if(screen=='Whishlist'){
            return(<Wishlistbar style={{marginLeft:-38,marginTop:-19}}  />) 
          }else{
            return(<Homescreenbar style={{marginLeft:-13,marginTop:-19}}  />) 
          }
      },
      tabBarIcon:({focused,color,size})=>{
        if(route.name=='Home'){
          if(focused){
            return(
              <Pressable
              onPress={()=>{
                dispatch(setCurrentScreen('Home'))
                setScreen('Home')
                navigate.navigate('Home')            
              }
              }
              >
              <View>
              {/* <Home  style={{alignSelf:'center'}} /> */}
              <HomeGreen  style={{alignSelf:'center'}} />
              <Text style={{fontSize:10,color:'#333333'}}>Home</Text>
              </View>
              </Pressable>
            )
          }else{
            return(
              <Pressable
              style={{alignItems:'center',height:'100%',width:'100%'}}
              onPress={()=>{
                dispatch(setCurrentScreen('Home'))
                setScreen('Home')
                navigate.navigate('Home')            
              }
              }>
              <View>
              {/* <HomeGreen  style={{alignSelf:'center'}} /> */}
              <HomeIcon  style={{alignSelf:'center'}} />
              <Text style={{fontSize:10,color:'#333333'}}>Home</Text>
              </View>
              </Pressable>
            )
          }
        }
        if(route.name=='Order History'){
          if(focused){
            return(
              <Pressable onPress={()=>{setScreen('Order')
              dispatch(setCurrentScreen('Order History'))
              navigate.navigate('Order History')            
            } } >
              <View style={{alignItems:'center'}}>
            <OrderGreen   style={{alignSelf:'center'}} />
          <Text style={{fontSize:10,color:'#333333'}}>Order History</Text>
          </View>
          </Pressable>
            ) 
          }else{
            return(
              <Pressable onPress={()=>{setScreen('Order History')
              dispatch(setCurrentScreen('Order History'))
              navigate.navigate('Order History')            
            } } 
            style={{alignItems:'center',height:'100%',width:'100%'}}>
              <View style={{alignItems:'center'}}>
            <Orderhistoy   style={{alignSelf:'center'}} />
          <Text style={{fontSize:10,color:'#333333'}}>Order History</Text>
          </View>
          </Pressable>
            ) 
          }
        }
        if(route.name=='Cart'){
          if(focused){
            return(
              <Pressable  onPress={()=>{setScreen('Cart')  
              dispatch(setCurrentScreen('Cart'))
              navigate.navigate('Cart')            
              }
            } >
              <View>
              <CartGreen style={{alignSelf:'center'}} />
              <Text style={{fontSize:10,color:'#333333'}}>My Cart</Text>
              </View>
              </Pressable>
            )
          }else{
            return(
              <Pressable  onPress={()=>{setScreen('Cart')  
              dispatch(setCurrentScreen('Cart'))
              navigate.navigate('Cart')            
              }
            } 
            style={{alignItems:'center',height:'100%',width:'100%'}}>
              <View>
              <Cart  style={{alignSelf:'center'}} />
            <Text style={{fontSize:10,color:'#333333'}}>My Cart</Text>
            </View>
            </Pressable>
              )
          }
        }
        if(route.name=='Whishlist'){
          if(focused){
            return(
              <Pressable onPress={
                ()=>{
              setScreen('Wishlist')
              dispatch(setCurrentScreen('Whishlist'))
              navigate.navigate('Whishlist')            
            }}  >
              <View>
              <WishListGreen  style={{alignSelf:'center'}} />
            <Text style={{fontSize:10,color:'#333333'}}>Wishlist</Text>
            </View>
            </Pressable>
              )
          }else{
            return(
              <Pressable onPress={
                ()=>{
              setScreen('Whishlist')
              dispatch(setCurrentScreen('Whishlist'))
              navigate.navigate('Whishlist')            
            }}  
            style={{alignItems:'center',height:'100%',width:'100%'}}>
              <View>
              <Wishlist  style={{alignSelf:'center'}} />
            <Text style={{fontSize:10,color:'#333333'}}>Wishlist</Text>
            </View>
            </Pressable>
              )
          }
        }
        if(route.name=='Account'){
          if(focused){
            return(
              <Pressable onPress={()=>{setScreen('Account')
              dispatch(setCurrentScreen('Account'))
              navigate.navigate('Account')            
            }} >
              <View>
              <AccountGreen  style={{alignSelf:'center'}} 
                />
                <Text style={{fontSize:10,color:'#333333'}}>Account</Text>
                </View>
                </Pressable>
              )
          }else{
            return(
              <Pressable onPress={()=>{setScreen('Account')
              dispatch(setCurrentScreen('Account'))
              navigate.navigate('Account')            
            }} 
            style={{alignItems:'center',height:'100%',width:'100%'}}>
              <View>
              <Accountlogo  style={{alignSelf:'center'}} 
                />
                <Text style={{fontSize:10,color:'#333333'}}>Account</Text>
                </View>
                </Pressable>
              )
          }
        }
      },

        tabBarLabelStyle:{textTransform:'capitalize',color:'#333333',fontSize:10,fontWeight:'700'}}
  )}        
        >
          <Tab.Screen
          options={{header:()=>{},
          }}   name='Home' 
          // children={()=><Home />}
          component={Home} 
          />

          <Tab.Screen options={{header:()=>{},
          }}  name='Order History' 
          // children={()=><OrderHistory />}
          
          component={OrderHistory}
           />

          <Tab.Screen options={{header:()=>{},
          }}  
          name='Cart' 
          component={MyCart}
          // children={()=><MyCart />}
           />

          <Tab.Screen options={{header:()=>{},
          }}  name='Whishlist' 
          component={WhishList} 
          // children={()=><WhishList />}
          />

          <Tab.Screen options={{header:()=>{},
          }}  name='Account' 
          component={Account} 
          // children={()=><Account />}
          />
        </Tab.Navigator>
  )
}


export default Footer;


// import React,{useState} from 'react'
// import {Text,View,StyleSheet,ImageBackground} from 'react-native';
// import HomeIcon from './../../asset/homeicon.svg'
// import Accountlogo from './../../asset/accountlogo.svg'
// import Orderhistoy from './../../asset/orderhistoy.svg'
// import Wishlist from './../../asset/wishlist.svg'
// import Cart from './../../asset/cart.svg'
// import { alignItems } from 'styled-system';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Cartbar from './../../asset/cartbar.svg';
// import Orderhistorybar from './../../asset/orderhistorybar.svg';
// import Homescreenbar from './../../asset/homescreenbar.svg';
// import Wishlistbar from './../../asset/wishlistbar.svg';
// import Accountbar from './../../asset/accountbar.svg';
// import { useNavigation } from '@react-navigation/native';
// import {Pressable} from 'native-base';
// import HomeGreen from './../../asset/HomeGreen.svg'
// import OrderGreen from './../../asset/OrderGreen.svg'
// import CartGreen from './../../asset/CartGreen.svg'
// import WishListGreen from './../../asset/WishListGreen.svg'
// import AccountGreen from './../../asset/AccountGreen.svg'
// import {useRoute} from '@react-navigation/native';

// import WhishList from '../../Pages/WhishList/WhishList.js';
// import OrderHistory from './../../Pages/OrderHistory/OrderHistory.js';
// import Home from './../../Pages/Home/Home.js';

// import Account from './../../Pages/Account/Account.js';
// import MyCart from './../../Pages/MyCart/MyCart';


// const Tab = createBottomTabNavigator();

// const Footer = ({navigation}) => {
  
//   const route = useRoute();
//   const navigate = useNavigation();
//   const [screen,setScreen] = useState('Home')
//   return (
//         <Tab.Navigator
        
//         sceneContainerStyle={{backgroundColor:'white',marginBottom:20}}
//         screenOptions={{tabBarShowLabel:false,tabBarStyle:{marginLeft:-5,width:'100%',borderColor:'transparent'},

//         tabBarBackground:()=>{ 
//           if(screen=='Home'){
            
//             return(<Homescreenbar style={{marginLeft:-13,marginTop:-19}}  />) 
//           }else if(screen=='Order'){            
//             return(<Orderhistorybar style={{marginLeft:-17,marginTop:-19}} />)
//           }else  if(screen=='Cart'){
//             return(<Cartbar style={{marginLeft:-24,marginTop:-19}}  />) 
//           }else  if(screen=='Wishlist'){
//             return(<Wishlistbar style={{marginLeft:-38,marginTop:-19}}  />) 
//           }else{
//             return(<Accountbar style={{marginLeft:-44,marginTop:-19}}  />) 
//           }
//       },

//         tabBarLabelStyle:{textTransform:'capitalize',color:'#333333',fontSize:10,fontWeight:'700'}}}        
//         >
//           <Tab.Screen
//           options={{header:()=>{},
//           tabBarIcon:()=>{
//             if(screen!=='Home'){
//               return(
//                 <Pressable
//                 onPress={()=>{
//                   setScreen('Home')
//                   navigate.navigate('Home')            
//                 }
//                 }>
//                 <View>
//             <HomeIcon   style={{alignSelf:'center'}}
//              />
//              <Text style={{fontSize:10,color:'#333333'}}>Home</Text>
//              </View>
//              </Pressable>
//              ) 
//             }
//             else{
//               return(
//                 <Pressable
//                 onPress={()=>{
//                   setScreen('Home')
//                   navigate.navigate('Home')            
//                 }
//                 }>
//                 <View>
//                 <HomeGreen  style={{alignSelf:'center'}} />
//                 <Text style={{fontSize:10,color:'#333333'}}>Home</Text>
//                 </View>
//                 </Pressable>
//               )
//             }
//           }
//           }}   name='Home' component={Home} />

//           <Tab.Screen options={{header:()=>{},
//           tabBarIcon:()=>{
//             if(screen!=='Order'){
            
//             return(
//               <Pressable onPress={()=>{setScreen('Order')
//               navigate.navigate('Order History')            
//             } } >
//               <View style={{alignItems:'center'}}>
//             <Orderhistoy   style={{alignSelf:'center'}} />
//           <Text style={{fontSize:10,color:'#333333'}}>Order History</Text>
//           </View>
//           </Pressable>
//             ) 
//         }else{
//           return(
//             <Pressable onPress={()=>{setScreen('Order')
//             navigate.navigate('Order History')            
//           } } >
//             <View>
//             <OrderGreen   style={{alignSelf:'center'}} />
//             <Text style={{fontSize:10,color:'#333333'}}>Order History</Text>
//             </View>
//             </Pressable>

//           )
//         }
//           }
//           }}  name='Order History' component={OrderHistory} />

//           <Tab.Screen options={{header:()=>{},
//           tabBarIcon:()=>{
//             if(screen!='Cart'){
//               return(
//                 <Pressable  onPress={()=>{setScreen('Cart')  
//                 navigate.navigate('Cart')            
//                 }
//               } >
//                 <View>
//                 <Cart  style={{alignSelf:'center'}} />
//               <Text style={{fontSize:10,color:'#333333'}}>My Cart</Text>
//               </View>
//               </Pressable>
//                 )
//             }else{
//               return(
//                 <Pressable  onPress={()=>{setScreen('Cart')  
//                 navigate.navigate('Cart')            
//                 }
//               } >
//                 <View>
//                 <CartGreen style={{alignSelf:'center'}} />
//                 <Text style={{fontSize:10,color:'#333333'}}>My Cart</Text>
//                 </View>
//                 </Pressable>
//               )
//             }
//         }
//           }}  
//           name='Cart' component={MyCart} />

//           <Tab.Screen options={{header:()=>{},
//           tabBarIcon:()=>{
//             if(screen!='Wishlist'){
//               return(
//                 <Pressable onPress={
//                   ()=>{
//                 setScreen('Wishlist')
//                 navigate.navigate('Whishlist')            
//               }}  >
//                 <View>
//                 <Wishlist  style={{alignSelf:'center'}} />
//               <Text style={{fontSize:10,color:'#333333'}}>Wishlist</Text>
//               </View>
//               </Pressable>
//                 )
//             }else{
//               return(
//                 <Pressable onPress={
//                   ()=>{
//                 setScreen('Wishlist')
//                 navigate.navigate('Whishlist')            
//               }}  >
//                 <View>
//                 <WishListGreen  style={{alignSelf:'center'}}/>
//                 <Text style={{fontSize:10,color:'#333333'}}>Wishlist</Text>
//                 </View>
//                 </Pressable>
//               )
//             }
//  }
//           }}  name='Whishlist' component={WhishList} />

//           <Tab.Screen options={{header:()=>{},
//           tabBarIcon:()=>{
//             if(screen!='account'){
//               return(
//                 <Pressable onPress={()=>{setScreen('account')
//                 navigate.navigate('Account')            
//               }} >
//                 <View>
//                 <Accountlogo  style={{alignSelf:'center'}} 
//                   />
//                   <Text style={{fontSize:10,color:'#333333'}}>Account</Text>
//                   </View>
//                   </Pressable>
//                 ) 
//             }else{
//               return(
//                 <Pressable onPress={()=>{setScreen('account')
//                 navigate.navigate('Account')            
//               }} >
//                 <View>
//                 <AccountGreen style={{alignSelf:'center'}} />
//                 <Text style={{fontSize:10,color:'#333333'}}>Account</Text>
//                 </View>
//                 </Pressable>
//               )
//             }
// }
//           }}  name='Account' component={Account} />
//         </Tab.Navigator>
//   )
// }


// export default Footer;