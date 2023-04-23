import React,{useState,useEffect,useRef} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RightArrow from '../assets/rightArrow2';
import IncomingOrdercard from '../components/incomingOrderCard';
import Sound from '../assets/sound.svg';

const IncomingPopUp = () => {
    const [inc, setInc] = useState(false);
    // const navigation = useNavigation();
    const [index,setIndex]=useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((index+1)%(120 + 1))
        },1000)

        return () => {
        clearInterval(interval);
        }
    },[index])

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
    reactive.setValue(width - (width*index)/120);
  },[index,width])
        
  return (

    <View style={styles.outer}>

        {inc ? (<IncomingOrdercard over={index} orderNumber="2245" list={[{veg: 0,num:1,item:"Bread Omelette", price:30}]} bill="95"/>):(<View style={styles.main}>
            <TouchableOpacity onPress={()=>{setInc(!inc)}} style={{width:"90%"}}>
            <View style={styles.container} 
            onLayout={(e) => {
                const newWidth = e.nativeEvent.layout.width;
                setWidth(newWidth);
            }}
            >   
                <Animated.View style={{height:"100%",width:"100%",backgroundColor:"#7CD78A",transform: [
                {
                translateX: animatedValue,
                }
                ]}} />
                <View style={styles.timer}>
                    <View style={styles.row}>
                        <Sound style={{marginLeft: 16}}/>
                        <Text style={styles.text}>1 incoming order</Text>
                    </View>
                    <RightArrow style={styles.arrow}/>
                </View>
            </View>
            </TouchableOpacity>
            </View>
            )}
    </View>
        
      
  );
}

const styles = StyleSheet.create({
    outer: {
        bottom: 64,
        position: 'absolute',
        width: "100%",
    },
    main: {
        height: 98,
        width: "100%",
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 64,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        height: 62,
        width: "100%",
        backgroundColor: '#45BD58',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        overflow: 'hidden',
    },
    text: {
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 500,
        color: '#FFFFFF',
    },
    timer:{
        flexDirection: "row",
        width: "100%",
        position: "absolute",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems: 'center',
        top:"31%",
        // left: "10%",
      },
        row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrow: {
        marginRight: 16,
    }
});

export default IncomingPopUp;