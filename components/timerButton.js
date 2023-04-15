import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import ProgressBar from 'react-native-animated-progress';
import { ProgressBar } from 'react-native-paper';

const TimerButton = () => {
    return (
        <View style={styles.container}>
            <ProgressBar
                progress={0.5}
                color="#2196F3"
                style={styles.progressBar}
                // height={7}
                // backgroundColor="green"
                // trackColor="yellow"
            />
            
        </View>
    );
};

//   const [progress, setProgress] = useState(1);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (progress > 0) {
//         setProgress(progress - 0.01);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [progress]);

//   const handlePress = () => {
//     setProgress(1);
//   };

//   return (
//     <View style={styles.container}>
//       <ProgressBarAndroid
//         styleAttr="Horizontal"
//         color="#2196F3"
//         indeterminate={false}
//         progress={progress}
//         style={styles.progressBar}
//       />
//       <Button title="Reset" onPress={handlePress} />
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  progressBar: {
    width: '90%',
    // marginTop: 20,
    // transform: [{ scaleX: -1 }],
    height: 38,
  },
});
export default TimerButton;

// export default App;


// import React, { useState, useRef } from 'react';
// import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
// // const FILL_duration=5000;
// const TimerButton = () => {
//     const [time, setTime] = useState(60);
//     const [color, setColor] = useState('green');
    
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setTime(prevTime => prevTime - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     }, []);
    
//     useEffect(() => {
//       if (time < 20) setColor('yellow');
//       if (time < 10) setColor('red');
//     }, [time]);
    
//     const handlePress = () => {
//       setTime(60);
//       setColor('green');
//     };
    
//     return (
//       <TouchableOpacity onPress={handlePress} style={{ backgroundColor: color }}>
//         <Text>{time}</Text>
//       </TouchableOpacity>
//     );
//   };

// const FILL_DURATION = 5000; // duration in milliseconds for the fill animation

// const FillButton = ({ text, onPress }) => {
//   const [fillAnim] = useState(new Animated.Value(0)); // create the animated value
//   const animRef = useRef(); // create a ref for the animation

//   const startFill = () => {
//     Animated.timing(fillAnim, {
//       toValue: 1,
//       duration: FILL_DURATION,
//       useNativeDriver: false,
//     }).start(onPress); // start the animation and call onPress after it completes
//   };

//   const resetFill = () => {
//     fillAnim.setValue(0); // reset the animated value
//     animRef.current.stop(); // stop any ongoing animation
//   };

//   const fillStyle = {
//     backgroundColor: fillAnim.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['gray', 'green'], // set the colors to interpolate between
//     }),
//     width: fillAnim.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['0%', '100%'], // set the width to interpolate between
//     }),
//   };

//   return (
//     <TouchableOpacity onPress={startFill} onPressOut={resetFill}>
//       <Animated.View style={[styles.button, fillStyle]}>
//         <Text style={styles.text}>{text}</Text>
//       </Animated.View>
//     </TouchableOpacity>
//   );
// };




  

// const styles = StyleSheet.create({
//     button: {
//       padding: 16,
//       borderRadius: 8,
//     },
//     text: {
//       color: 'white',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//   });
  
//   export default FillButton;
  