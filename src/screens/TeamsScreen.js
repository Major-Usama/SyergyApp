import React,{useState} from "react";
import {
  ImageBackground,
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  Alert,
  TouchableWithoutFeedback
} from "react-native";

import UserLists from "../components/UsersLists";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const users = require("../icons/users.png");
const teams = require("../icons/teams.png");
const background = require("../images/background.png");

export default function TeamsScreen() {

const [Background,setBackground]=useState('#ffffff')
const [Background1,setBackground1]=useState('#EBEBEB')
const [Color,setColor]=useState("#1B2331")
const [Color1,setColor1]=useState("#8D8D8D"),


change = ()=>
{
    {Background==="#EBEBEB"?setBackground("#ffffff"):"#EBEBEB"}
    {Background1==="#ffffff"?setBackground1("#EBEBEB"):"#EBEBEB"}

    {Color==="#8D8D8D"?setColor('#1B2331'):"#8D8D8D"}
    {Color1==="#1B2331"?setColor1('#8D8D8D'):"#1B2331"}

    


},

 changetwo = ()=>
{
    {Background==="#ffffff"?setBackground("#EBEBEB"):"#fffffff"}
    {Background1==="#EBEBEB"?setBackground1("#ffffff"):"#EBEBEB"}

    {Color==="#1B2331"?setColor('#8D8D8D'):"#1B233"}
    {Color1==="#8D8D8D"?setColor1('#1B2331'):"#8D8D8D"}




}




  return (
    <ImageBackground source={background} style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#25D366"
    
      />

      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Feather name="menu" size={26} color="#1B2331" />
          <Text style={styles.logoText}>Utillisateurs</Text>
        </View>

        <View style={styles.rightIcons}>
          <Feather name="search" size={24} color="#1B2331" />
          <View style={styles.badgeContainer}>
            <Feather name="bell" size={24} color="#1B2331" />
            <View style={styles.badge} />
          </View>
          <AntDesign name="reload1" size={24} color="#1B2331" />
        </View>
      </View>

      <View style={styles.userTeamsContainer}>
          <TouchableWithoutFeedback onPress={change}>
        <View style={{...styles.usersContainer,backgroundColor:Background}}>
          <Image source={users} style={styles.usersIcon} />
          <Text style={{ ...styles.logoText, color: Color, fontSize: 17 }}>
            Utillisateurs
          </Text>
        </View>
        </TouchableWithoutFeedback>


         <TouchableWithoutFeedback onPress={changetwo}>
        <View
          style={{
            ...styles.usersContainer,
            backgroundColor: Background1,
            paddingHorizontal: 28,
          }}
        >
          <Image source={teams} style={styles.usersIcon} />
          <Text style={{ ...styles.logoText, color:Color1, fontSize: 17 }}>
            Equipes
          </Text>
        </View>
        </TouchableWithoutFeedback>
      </View>

      <UserLists />
       
       
       <View style={styles.floatButton}>
      <AntDesign onPress={()=>Alert.alert('add user')} name="adduser" size={24} color='#ffffff' />

      </View>
      

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  headerContainer: {
    width: WIDTH,
    height: HEIGHT / 13,
    backgroundColor: "#F8F8F9",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },

  logoText: {
    fontSize: 20,
    color: "#1B2331",
  },

  logoContainer: {
    flexDirection: "row",
    width: WIDTH / 2.8,
    justifyContent: "space-between",
  },

  badge: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#25d366",
    position: "absolute",
    right: 2,
    top: 3,
  },

  rightIcons: {
    flexDirection: "row",
    width: WIDTH / 4,
    justifyContent: "space-between",
  },

  badgeContainer: {
    height: 10,
  },

  userTeamsContainer: {
    width: WIDTH,
    height: HEIGHT / 10,
    backgroundColor: "#EBEBEB",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  usersContainer: {
    width: WIDTH / 2.5,
    height: HEIGHT / 17,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  usersIcon: {
    width: 20,
    height: 20,
  },
  floatButton:
  {
      width:50,
      height:50,
      borderRadius:25,
      backgroundColor:'#25D366',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:HEIGHT/14,
      right:WIDTH/12,
  }
});
