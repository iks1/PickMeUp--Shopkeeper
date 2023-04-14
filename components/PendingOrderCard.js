import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Dots from '../assets/dots.svg';
import Line from '../assets/horizontalLine.svg';
import Veg from '../assets/veg.svg';
import NonVeg from '../assets/nonveg.svg';

const PendingOrderCard = props => {
    const handleApply = () => {
        ;
    };
    const handleOptions = () => {
        ;
    };
    return (
        <View style={styles.container}>
            <View style={styles.line1}>
                <View style={styles.view}>
                <Text style={styles.text1}>Order #{props.orderNumber} </Text>
                <Text style={styles.text2}>· {props.orderTime} mins ago</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={handleOptions}>
                        <Dots/>
                    </TouchableOpacity>
                </View> 
            </View>
            <Line style={styles.line}/>
            <View>
                {props.list.map((it) => (
                    <View style={styles.order}>
                        <View style={styles.it}>
                        {it.veg === 1 ? <Veg /> : <NonVeg />}
                        <Text> {it.num} × {it.item}</Text> 
                        </View>
                        <View>
                            <Text>₹ {it.price}</Text>
                        </View>
                    </View>

                ))}
            </View>
            <Line style={styles.line}/>
            <View style={styles.total}>
                <Text style={styles.text2}>Total bill</Text>
                <Text>₹ {props.bill}</Text>    
            </View>
            <View style={styles.buttonbox}>
                    <TouchableOpacity onPress={handleApply}>
                        <Text style={styles.button}>Order Ready</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        backgroundColor: "#FFFFFF",
        display: 'flex',
        width: "95%",
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 16,
        paddingTop: 12,
        paddingBottom: 12,
    },
    line1: {
        paddingLeft: 16,
        paddingTop: 12,
        paddingRight: 16,
        paddingBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    view: {
        flexDirection: 'row',
    },
    text1: {
        color: "#5736B5",
        fontSize: 14,
        fontWeight: 500,
    },
    text2: {
        color: "#6F6F6F",
        fontSize: 14,
        fontWeight: 500,
    },
    line: {
        alignSelf: 'center',
        paddingTop: 12,
        paddingBottom: 12,
    },
    order: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 6,
        paddingBottom: 6,
    },
    it: {
        flexDirection: 'row',
        
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },
    buttonbox: {
        backgroundColor:"#5736B5",
        borderRadius: 16,
        height: 36,
        width: 296,
        justifyContent:"space-around",
        alignSelf:"center",
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 24,
    },
    button: {
        color:"#FFFFFF",
        alignSelf:"center",
        fontWeight: 500,
    }
});
  

export default PendingOrderCard;