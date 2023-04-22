import React,{useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Plus from '../assets/plus.svg';
import Minus from '../assets/minus.svg';

const DurationChangeButton = props => {

    const [num, setNum]=useState(props.num);

    const handleSubtract = () => {
        num!==0 && setNum(num-1);
    };
    const handleAdd = () => {
        setNum(num+1);
    };

    return (
        <View style={styles.button1}>
            <TouchableOpacity onPress={handleSubtract} style={styles.touch}>
                <Minus/>
            </TouchableOpacity>
            <Text style={styles.text1}> {num} minutes </Text>
            <TouchableOpacity onPress={handleAdd} style={styles.touch}>
                <Plus/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:"#EEEDFA",
        borderRadius: 20,
        height: 38,
        width: "100%",
        justifyContent:"space-between",
        borderColor: "#D7D2E9",
        borderWidth: 1,
        paddingLeft: 16,
        paddingRight: 16,
    },
    touch:{
        width: "15%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
    },
    text1: {
        color: "#000000",
        fontWeight: 500,
        fontSize: 16,
    },
});

export default DurationChangeButton;