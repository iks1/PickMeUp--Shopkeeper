import React from "react";
import { StyleSheet, View, Text } from "react-native";
import StarIcon from "../assets/starIcon.svg";

const RatingView = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ratingValue}>{props.rating} </Text>
      <StarIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  ratingValue: {
    color: "white",
    fontSize: 12,
    fontWeight: 500,
    marginTop: 1,
    marginBottom: 2,
  },
  container: {
    height: 20,
    width: 43,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#55AE63",
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default RatingView;
