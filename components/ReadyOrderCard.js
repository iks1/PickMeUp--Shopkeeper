import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Dots from '../assets/dots.svg';
import Line from '../assets/horizontalLine.svg';
import Veg from '../assets/veg.svg';
import NonVeg from '../assets/nonveg.svg';

const ReadyOrderCard = props => {
    
    return (
        <View style={styles.container}>
            <View style={styles.line1}>
                <View style={styles.view}>
                <Text style={styles.text1}>Order #{props.orderNumber} </Text>
                <Text style={styles.text3}>·</Text>
                <Text style={styles.text2}> {props.orderTime} mins ago</Text>
                </View>
                <View>
                    <TouchableOpacity>
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
                            <Text style={styles.bold}> {it.num} × {it.item}</Text> 
                        </View>
                        <View>
                            <Text style={styles.normal}>₹ {it.price}</Text>
                        </View>
                    </View>

                ))}
            </View>
            <Line style={styles.line2}/>
            <View style={styles.total}>
                <Text style={styles.text2}>Total bill</Text>
                <Text style={styles.bold}>₹ {props.bill}</Text>    
            </View>
            <View style={styles.buttonbox}>
                    <TouchableOpacity>
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
    },
    line1: {
        marginLeft: 16,
        marginTop: 19,
        marginRight: 16,
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
    text3: {
        color: "#6F6F6F",
        fontSize: 14,
        fontWeight: 900,
    },
    line: {
        alignSelf: 'center',
        marginTop: 19,
        marginBottom: 20,
    },
    order: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
    },
    it: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line2: {
        alignSelf: 'center',
        marginTop: 9,
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
    },
    normal: {
        fontSize: 16,
        fontWeight: 400,
    },
    bold: {
        fontSize: 16,
        fontWeight: 500,
    },
    buttonbox: {
        backgroundColor:"#EEEDFA",
        borderRadius: 16,
        height: 36,
        width: "90%",
        justifyContent:"space-around",
        alignSelf:"center",
        marginLeft: 16,
        marginRight: 16,
        marginTop: 24,
        marginBottom: 16,
    },
    button: {
        color:"#020314",
        alignSelf:"center",
        fontWeight: 500,
    }
});
  
export default ReadyOrderCard;