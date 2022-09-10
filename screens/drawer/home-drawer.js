import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FaIcon from "@expo/vector-icons/FontAwesome5";
import HousesScreen from '../HousesScreen';
import FavoriteHousesScreen from '../FavoriteHousesScreen';
import AccountDrawer from './account-drawer';

const Tab = createBottomTabNavigator();

const HomeDrawer = () => {
  return (
    <Tab.Navigator initialRouteName="houses" screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.label,
        headerShown: false,
    }}>
      <Tab.Screen name="houses" component={HousesScreen} options={{
        tabBarLabel:"Houses",
        tabBarIcon: ()=> <FaIcon name="home" size={20}/>
      }}/>
      <Tab.Screen name="favorites" component={FavoriteHousesScreen} options={{
        tabBarLabel:"Favorite Houses",
        tabBarIcon: ()=> <FaIcon name="heart" size={20}/>
      }}/>
        <Tab.Screen name="account" component={AccountDrawer} options={{
        tabBarLabel:"Account",
        tabBarIcon: ()=> <FaIcon name="user" size={20}/>
      }}/>
    </Tab.Navigator>
  )
}

export default HomeDrawer

const styles = StyleSheet.create({
    tabBar:{
        height:70
    },
    label:{
        fontSize:15,
        marginBottom:5
    }
})