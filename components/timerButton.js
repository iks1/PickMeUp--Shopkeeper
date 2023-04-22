import React, { useState, useEffect, useRef } from 'react';
import { Animated,View, StyleSheet, Text } from 'react-native';

const TimerButton = (props) => {
  const [width,setWidth] = useState(-2000)
  const animatedValue = useRef(new Animated.Value(0)).current;
  const reactive = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      // duration: 300,
      useNativeDriver: true
    }).start();
  },[]);

  useEffect(() => {
    reactive.setValue(width - (width*props.step)/props.steps);
  },[props.step,width])

    return (
      <>
        <View style={styles.container} 
          onLayout={(e) => {
            const newWidth = e.nativeEvent.layout.width;
            setWidth(newWidth);
          }}
        >   
            <Animated.View style={{height:"100%",width:"100%",backgroundColor:"#8E76D0",transform: [
            {
              translateX: animatedValue,
            }
            ]}} />
            <View style={styles.timer}>
              <Text style={styles.accept}>Accept</Text>
              <Text style={styles.time}>{props.steps-props.step}s</Text>
            </View>
        </View>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#5736B5',
    borderRadius: 20,
    overflow:"hidden",
  },
  timer:{
    flexDirection: "row",
    position: "absolute",
    justifyContent:"center",
    alignContent:"center",
    top:"20%",
    left: "31%"
  },
  accept:{
    fontSize: 16,
    fontWeight: 500,
    color: "#FFFFFF",
  },
  time:{
    fontSize: 16,
    fontWeight: 400,
    marginLeft: 8,
    color: "#FFFFFF",
  },
});

export default TimerButton;