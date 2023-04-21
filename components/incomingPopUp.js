import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RightArrow from '../assets/rightArrow2';
import IncomingOrdercard from '../components/incomingOrderCard';


const IncomingPopUp = () => {
    const [inc, setInc] = useState(false);
    // const navigation = useNavigation();
        
  return (

    <View style={styles.outer}>

        {inc ? (<IncomingOrdercard orderNumber="2245" list={[{veg: 0,num:1,item:"Bread Omelette", price:30}]} bill="95"/>):(<View style={styles.main}>
            <TouchableOpacity style={styles.container} onPress={()=>{setInc(!inc)}}>
            
                <Text style={styles.text}>1 incoming Order</Text>
                <RightArrow style={styles.arrow}/>
            
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
        width: "91%",
        backgroundColor: '#45BD58',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 500,
        color: '#FFFFFF',
    },
    arrow: {
        marginRight: 16,
    }
});

export default IncomingPopUp;