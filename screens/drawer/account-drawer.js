import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FaIcon from "@expo/vector-icons/FontAwesome5";
import HousesScreen from '../HousesScreen';
import FavoriteHousesScreen from '../FavoriteHousesScreen';
import LoginScreen from '../LoginScreen';

const Tab = createBottomTabNavigator();


const AccountDrawer = () => {
  return (
    <Tab.Navigator initialRouteName="Login" screenOptions={{
      tabBarStyle: styles.tabBar,
      tabBarLabelStyle: styles.label,
      headerShown: false,
  }}>
    <Tab.Screen name="Login" component={LoginScreen} options={{
      tabBarLabel:"Login",
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

export default AccountDrawer

const styles = StyleSheet.create({})