import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import HomeIcon from '../assets/homeNav.svg';
import MenuIcon from '../assets/menuNav.svg';
import InsightsIcon from '../assets/insightsNav.svg';
import UpdatesIcon from '../assets/updatesNav.svg';
import HomeIconActive from '../assets/homeNavActive.svg';
import MenuIconActive from '../assets/menuNavActive.svg';
import InsightsIconActive from '../assets/insightsNavActive.svg';
import UpdatesIconActive from '../assets/updatesNavActive.svg';
import { useNavigation } from "@react-navigation/native";
const NavBar = (props) => {
    const navigation = useNavigation();
  
    return (
      <View style={[styles.navBar]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Pending");
          }}
          style={styles.tab}
        >
          {props.active === "Home" ? <HomeIconActive /> : <HomeIcon />}
  
          <Text style={props.active === "Home" ? styles.activeText : styles.text}>
            Home
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Menu");
          }}
          style={styles.tab}

        >
          {props.active === "Menu" ? <MenuIconActive /> : <MenuIcon />}
  
          <Text style={props.active === "Menu" ? styles.activeText : styles.text}>
            Menu
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Insights");
          }}
          style={styles.tab}
        >
          {props.active === "Insights" ? <InsightsIconActive /> : <InsightsIcon />}
  
          <Text style={props.active === "Insights" ? styles.activeText : styles.text}>
            Insights
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Updates");
          }}
          style={styles.tab}
        >
          {props.active === "Updates" ? <UpdatesIconActive /> : <UpdatesIcon />}
  
          <Text style={props.active === "Updates" ? styles.activeText : styles.text}>
            Updates
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    navBar: {
      flexDirection: "row",
      position: "absolute",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderTopWidth: 1,
      borderTopColor: "#eee",
      width: "100%",
      height: 64,
      bottom: 0,
    },
    tab: {
      flex: 1,
      alignItems: "center",
    },
    text: {
      fontSize: 12,
      fontWeight: 500,
      marginTop: 4,
      color: "#999999",
    },
    activeText: {
      fontSize: 12,
      fontWeight: 500,
      marginTop: 4,
      color: "#5932E6",
    },
  });
  
  export default NavBar;
  