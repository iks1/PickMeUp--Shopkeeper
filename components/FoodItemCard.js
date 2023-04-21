import React, { useState } from "react";
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground} from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import NonVegIcon from "../assets/nonveg";
import VegIcon from "../assets/veg";
import ThumbsUp from "../assets/thumbsup";
import SmallAddPhoto from "../assets/smallAddPhoto";
import AddPhoto from "../assets/addPhoto"; 
import Edit from "../assets/edit";
import HorizontalDashedLine from "../assets/horizontalLine";

const FoodCard = (props) => {
  const [inStock, setInStock] = useState(props.inStock);
  const label = "In stock";

  return (
    <View>
    {props.vis || inStock ?
    <View style={styles.foodCardMainContainer}>
      <View style={styles.container}>
        <View style={styles.left}>
          <View>
            <View style={styles.headingDecorator}>
              {props.veg ? <VegIcon /> : <NonVegIcon />}
            </View>
            <Text style={{fontSize: 16,fontWeight: 500, color: inStock ? "#020314" : "#999999"}}>{props.heading}</Text>
            <Text style={{fontSize: 16,fontWeight: 400, color: inStock ? "#020314" : "#999999"}}>₹{props.Price}</Text>
            {inStock ? 
              (null)
            :
              <View style={styles.stock}>
                <Text style={styles.text1}>Out of stock</Text>
              </View>
            } 
          </View>
        </View>
        <View style={styles.right}>
          {props.image ? 
            (<View style={styles.image}>
              <ImageBackground source={props.image} style={{width: "100%", height:"100%"}}>
                  <TouchableOpacity>
                    <View style={styles.image3}>
                      <SmallAddPhoto />
                    </View>
                  </TouchableOpacity>
              </ImageBackground>
            </View>) 
          : 
            (<TouchableOpacity>
                <View style={styles.image2}>
                  <AddPhoto />
                  <Text style={{fontSize: 14, fontWeight:500, color: inStock ? "#6F6F6F" : "#999999"}}>Add photo</Text>
              </View>
            </TouchableOpacity>)
          }
        </View>
      </View>
        <View style={styles.row}>
          <View style={styles.row1}>
            <Text style={{fontSize: 14,fontWeight: 500,marginRight: 9, color: inStock ? "#6F6F6F" : "#999999"}}>Recommended</Text>
            <ThumbsUp />
          </View>
          <View style={styles.toggleView}>
            <ToggleSwitch
              isOn={inStock}
              onColor="#5736B5"
              offColor="#EEEDFA"
              thumbOnStyle={{ backgroundColor: "white" }}
              thumbOffStyle={{ backgroundColor: "white" }}
              label={label}
              labelStyle={{ color: "#020314", fontWeight: "500" }}
              size="small"
              onToggle={() => {
                console.log("changed to : ", inStock);
                setInStock(!inStock);
              }}
            />
          </View>
          <View>
            <View style={styles.row1}>
              <Text style={{fontSize: 14,fontWeight: 500,marginRight: 9, color: inStock ? "#6F6F6F" : "#999999"}}>Edit</Text>
              <Edit />
            </View>
          </View>
        </View>
      <HorizontalDashedLine style={styles.line} />
    </View>
    :
    (null)
    } 
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    zIndex: 3, // works on ios
    elevation: 3, // works on android
    alignSelf: "center",
  },
  toggleView: {
    alignSelf: "flex-end",
    paddingRight: "5%",
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    alignSelf: "flex-start",
  },
  image: {
    borderRadius: 20,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  image2: {
    marginRight: 0,
    borderRadius: 20,
    width: 100,
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D7D2E9",
    borderWidth: 1,
  },
  image3: {
    position: "absolute",
    width: 28,
    height: 28,
    borderRadius: 24,
    top: 7,
    right: 7,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#FFFFFF",
    fontWeight: 500,
    fontSize: 12,
  },
  stock: {
    backgroundColor: "#FA3440",
    borderRadius: 16,
    marginTop: 8,
    width: 85,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
    paddingRight: 8,
  },
  row1: {
    flexDirection: "row",
  },
  headingDecorator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodCardMainContainer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 16,
    paddingLeft: "6%",
  },
});

export default FoodCard;
