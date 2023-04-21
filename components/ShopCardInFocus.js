import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import RatingView from "./RatingView";
import ToggleSwitch from "toggle-switch-react-native";

const ShopCardInFocus = (props) => {
  const label = "Accepting orders";
  const [accept, setAccept] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.head}>{"Dihing Food Canteen"}</Text>
        <RatingView rating="4.0" />
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>
          {"400m · Snacks, Multi Cuisine  "}
        </Text>
      </View>
      <View style={styles.toggleView}>
            <ToggleSwitch
              isOn={accept}
              onColor="#45BD58"
              offColor="#EEEDFA"
              thumbOnStyle={{ backgroundColor: "white" }}
              thumbOffStyle={{ backgroundColor: "white" }}
              label={label}
              labelStyle={{ color: "#6F6F6F", fontWeight: "400", position: "absolute", right:"44%"}}
              size="medium"
              onToggle={() => {
                console.log("changed to : ", accept);
                setAccept(!accept);
              }}
            />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleView: {
    marginVertical: 12,
  },
  row: {
    marginTop: 4,
  },
  description: {
    fontWeight: 400,
    fontSize: 14,
    color: "#6F6F6F",
  },
  head: {
    fontWeight: 500,
    fontSize: 20,
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 16,
    paddingLeft: 22,
    paddingVertical: 16,
    paddingRight: 20,
    height: 122,
    width: "90%",
    backgroundColor: "white",
  },
});

export default ShopCardInFocus;
