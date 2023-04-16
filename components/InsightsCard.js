import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Line from '../assets/horizontalLine.svg';
import Calendar from '../assets/grey_calendar.svg';

const InsightsCard = props => {
    return (
        <View style={styles.container}>
            <View style={styles.date}>
                <Calendar />
                <Text style={styles.datetext}> {props.date}</Text>
            </View>
            <View style={styles.total}>
                <Text style={styles.totaltext1}>Total amount earned</Text>
                <Text style={styles.totaltext2}>₹{props.totalAmount}</Text>
            </View>

            <Line style={styles.line}/>
            
            <View style={styles.orders}>
                <View style={styles.order}>
                    <Text style={styles.ordertext1}>Orders received</Text>
                    <Text style={styles.ordertext2}>{props.received}</Text>
                </View>
                <View style={styles.order}>
                    <Text style={styles.ordertext1}>Orders accepted</Text>
                    <Text style={styles.ordertext2}>{props.accepted}</Text>
                </View>
                <View style={styles.order}>
                    <Text style={styles.ordertext1}>Cancelled</Text>
                    <Text style={styles.ordertext2}>{props.cancelled}</Text>
                </View>
            </View>

            <Line style={styles.line}/>

            <View style={styles.completed}>
                <Text style={styles.ordertext3}>Orders completed</Text>
                <Text style={styles.ordertext4}>{props.completed}</Text>
            </View>

            <View style={styles.buttonbox}>
                    <TouchableOpacity>
                        <Text style={styles.button}>View orders</Text>
                    </TouchableOpacity>
            </View>

        </View>
    );

}
  
const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        width: "91%",
        height: 356,
        flexDirection: "column",
        alignSelf: "center",
    },
    date: {
        marginLeft: 16,
        marginTop: 16,
        flexDirection: "row",
    },
    datetext: {
        color: "#6F6F6F",
        fontSize: 12,
        fontWeight: 400,
    },
    line: {
        alignSelf: "center",
        marginTop: 20,
    },
    total: {
        marginTop: 20,
        alignSelf: "center",
        alignItems: "center",
    },
    totaltext1: {
        color: "#020314",
        fontSize: 12,
        fontWeight: 400,
    },
    totaltext2: {
        color: "#45BD58",
        fontSize: 28,
        fontWeight: 500,
    },
    orders: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        flexDirection: "column",
        justifyContent: "space-between",
        height: 84,
    },
    order: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ordertext1: {
        color: "#6F6F6F",
        fontSize: 14,
        fontWeight: 400,
    },
    ordertext2: {
        color: "#6F6F6F",
        fontSize: 14,
        fontWeight: 400,
    },
    completed: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ordertext3: {
        color: "#020314",
        fontSize: 14,
        fontWeight: 500,
    },
    ordertext4: {
        color: "#020314",
        fontSize: 14,
        fontWeight: 500,
    },
    buttonbox: {
        backgroundColor:"#5736B5",
        borderRadius: 16,
        height: 36,
        width: "90%",
        justifyContent:"space-around",
        alignSelf:"center",
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 20,
    },
    button: {
        color:"#FFFFFF",
        alignSelf:"center",
        fontWeight: 500,
    }
});

export default InsightsCard;