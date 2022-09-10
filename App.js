import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FaIcon from "@expo/vector-icons/FontAwesome5";
import DrawerContent from "./components/drawer-content";
import HomeDrawer from "./screens/drawer/home-drawer";
import AccountDrawer from "./screens/drawer/account-drawer";
import FavoriteDrawer from "./screens/drawer/favorite-drawer";
import SettingsDrawer from "./screens/drawer/settings-drawer";
import ContactDrawer from "./screens/drawer/contact-drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="home" screenOptions={{
        drawerType:"back",   //front, back, slide, permanent
        drawerPosition:"left",
        drawerActiveTintColor:"#ef00ec",
        drawerStyle: styles.drawer,
        drawerLabelStyle: styles.label,
      }}
      drawerContent={ (props)=> <DrawerContent {...props}/>}
      >
        <Drawer.Screen name="home" component={HomeDrawer} options={{
          title:"House",
          drawerIcon: ()=> <FaIcon name="home"/>
        }} />
        <Drawer.Screen name="account" component={AccountDrawer} options={{
          title:"Acount",
          drawerIcon: ()=> <FaIcon name="user"/>
        }} />
        <Drawer.Screen name="favorite" component={FavoriteDrawer} options={{
          title:"Favorites",
          drawerIcon: ()=> <FaIcon name="heart"/>
        }}/>
        <Drawer.Screen name="contact" component={ContactDrawer} options={{
          title:"Contact",
          drawerIcon: ()=> <FaIcon name="users"/>
        }}/>
        <Drawer.Screen name="settings" component={SettingsDrawer} options={{
          title:"Settings",
          drawerIcon: ()=> <FaIcon name="cog"/>
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#addbf6",
  },
  label:{
    marginLeft:-20
  }

});
