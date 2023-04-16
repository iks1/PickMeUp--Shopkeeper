import React from "react";
import { StyleSheet, View, Text } from "react-native";
import StarIcon from "../assets/starIcon.svg";

const RatingView = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ratingValue}>{props.rating}</Text>
      <StarIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  ratingValue: {
    color: "white",
  },
  container: {
    height: 20,
    width: 43,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#55AE63",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 1,
  },
});

export default RatingView;
