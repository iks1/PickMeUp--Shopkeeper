import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import chickenImage from '../assets/shopImage.png';

// components
import FoodItemCard from "../components/FoodItemCard";
import ShopCardInFocus from "../components/ShopCardInFocus";
import ToggleSwitch from "toggle-switch-react-native";
import SearchBar from "../components/SearchBar2";
import NavBar from "../components/NavBar";
import Arrow from "../assets/leftArrow.svg";
import PopUp from "../components/addMenuPopup";

// icons
import UpArrowIcon from "../assets/upArrow";
import Dots from "../assets/dots";

const Menu = () => {
  const navigation = useNavigation();
  const [outOfStock, setOutOfStock] = useState(true);
  const label = "Out of stock";
  const arr = [
    {
      heading: "Chicken Tikka Masala",
      price: "₹265",
      ratingValue: "4.0",
      bestSeller: 1,
      veg: 0,
      id: 12,
      image:{chickenImage}
    },
    {
      heading: "Butter Panner",
      price: "₹400",
      ratingValue: "2.0",
      bestSeller: 0,
      veg: 1,
      image:{chickenImage},
      id: 432,
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.main}>
      <View style={styles.up}>
            <TouchableOpacity onPress={()=>{navigation.goBack();}}>
                <Arrow />
            </TouchableOpacity>
        </View>
        <View style={styles.UpperParent}>
          <ShopCardInFocus />
          <View style={styles.searchArea}>
            <SearchBar textInput="Search for food items..." />
          </View>
          <View style={styles.toggleView}>
            <ToggleSwitch
              isOn={outOfStock}
              onColor="#5736B5"
              offColor="white"
              thumbOnStyle={{ backgroundColor: "white" }}
              thumbOffStyle={{ backgroundColor: "#EEEDFA" }}
              label={label}
              labelStyle={{ color: "#020314", fontWeight: "500" }}
              size="medium"
              onToggle={() => {
                console.log("changed to : ", outOfStock);
                setOutOfStock(!outOfStock);
              }}
            />
          </View>
        </View>
        <View style={styles.foodItemCardsContainerStyle}>
          <View style={styles.recommendedHeader}>
            <Text style={styles.recommendedTextStyle}>Recommended</Text>
            <View style={styles.row1}>
                <TouchableOpacity>
                    <UpArrowIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Dots />
                </TouchableOpacity>
            </View>
          </View>
          <FoodItemCard heading="Chicken Tikka" Price="250" veg={true}  image={chickenImage} inStock={true} vis={outOfStock}/>
          <FoodItemCard heading="Chicken Tikka" Price="250" veg={false}  image={null} inStock={false} vis={outOfStock}/>
          <FoodItemCard heading="Chicken Tikka" Price="250" veg={false}  image={chickenImage} inStock={true} vis={outOfStock}/>
        </View>
      </ScrollView>
      <View style={styles.popup}>
        <TouchableOpacity style={styles.btn1}>
          <View >
                <Text style={styles.text1}>Rearrange</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <View>
                <Text style={styles.text2}>Add +</Text>
          </View>
        </TouchableOpacity>
      </View>
        <View style={styles.navbar}>
                <NavBar active="Menu"/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recommendedTextStyle: {
    color: "#6F6F6F",
    fontSize: 16,
    fontWeight: 500,
  },
  up:{
    height:76,
    width:"100%",
    paddingLeft: 33,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection:'row',
    alignItems:'center',
},
  recommendedHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "6%",
    paddingTop: 24,
  },
  UpperParent: {
    display: "flex",
    alignItems: "center",
  },
  toggleView: {
    alignSelf: "flex-end",
    paddingRight: "5%",
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchArea: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex:2,
    marginTop: 8,
  },
  foodItemCardsContainerStyle: {
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: "white",
    marginTop: 10,
    width: "100%",
    marginBottom: 117,
  },
  shopCardParent: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer:{
    backgroundColor:'#EFEEFA',
    width:"100%",
    height:"100%",
},
main:{
    height:"100%",
    width:"100%",
    marginTop: 33,
},
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 50,
  },
  line: {
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
  price: {
    fontSize: 18,
  },
  tag: {
    color: "#5736B5",
    fontWeight: 500,
  },
  right: {
    alignItems: "flex-end",
    justifyContent: "center",
    // backgroundColor: "black",
  },
  left: {
    // backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    alignSelf: "flex-start",
  },
  image: {
    marginRight: 0,
    borderRadius: 20,
    // marginLeft: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 500,
  },
  addBtn: {
    fontWeight: 500,
    backgroundColor: "#EEEDFA",
    textAlign: "center",
    borderRadius: 30,
    width: "80%",
    paddingVertical: 7,
    marginTop: -10,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
  },
  headingDecorator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },
  ratingValue: {
    color: "white",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#55AE63",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 1,
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: "blue",
  },
  container: {
    position: "relative",
    width: "100%",
    height: 170,
    marginVertical: 0,
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    padding: "6%",
    justifyContent: "space-between",
  },
  foodCardMainContainer: {
    backgroundColor: "#FFFFFF",
  },
  popup: {
    position: "absolute",
    bottom: 64,
    width: "100%",
    height: 70,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "4.5%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderColor: "#E5E5E5",
    borderWidth: 0.3,
    // elevation: 2,
    elevation: 5,
  },
  text1: {
    color: "#000000",
    fontSize: 16,
    fontWeight: 500,
  },
  text2: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 500,
  },
  btn1: {
    backgroundColor: "#EEEDFA",
    borderRadius: 20,
    width: "47%",
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  btn2: {
    backgroundColor: "#5736B5",
    borderRadius: 20,
    width: "47%",
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    position:'absolute', 
    bottom:0, 
    width:'100%', 
    height:64,
    // elevation: 40,
  },
});

export default Menu;
