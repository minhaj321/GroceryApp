import React from 'react'
import { ScrollView } from 'native-base';
import MembershipDeals from './../../Components/MembershipDeals/MembershipDeals.js';
import GroceryDeals from './../../Components/GroceryDeals/GroceryDeals.js';
import CategoriesList from './../../Components/CategoriesList/CategoriesList.js';
import HomeHeaderSectiom from './../../Components/HomeHeaderSectiom/HomeHeaderSectiom.js';

const Home = ({navigation}) => {
    
    
    

    return (
        
        <ScrollView 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
            
            <HomeHeaderSectiom navigation={navigation}/>
            <CategoriesList/>
            <GroceryDeals title={'Offers'} navigation={navigation} />
            <GroceryDeals title={'Grocery Deals'} navigation={navigation} />
            <MembershipDeals/>
        </ScrollView>
  )
}


export default Home

