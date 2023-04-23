import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Line from '../assets/horizontalLine.svg';
import Veg from '../assets/veg.svg';
import NonVeg from '../assets/nonveg.svg';
import DurationChangeButton from './durationChangeButton';
import TimerButton from './timerButton';

const IncomingOrderCard = props => {
    const [index,setIndex]=useState(props.over);
  
    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((index+1)%(120 + 1))
        },1000)

        return () => {
        clearInterval(interval);
        }
    },[index])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                    <Text style={styles.text2}>Incoming order</Text>
                    <Text style={styles.text1}>Order #{props.orderNumber} </Text>
            </View>
            <Line style={styles.line}/>
            <View>
                {props.list.map((it) => (
                    <View style={styles.order}>
                        <View style={styles.it}>
                            {it.veg === 1 ? <Veg /> : <NonVeg />}
                            <Text style={styles.text3}> {it.num} × {it.item}</Text> 
                        </View>
                        <View>
                            <Text style={styles.text4}>₹{it.price}</Text>
                        </View>
                    </View>
                ))}
            </View>
            <Line style={styles.line}/>
            <View style={styles.total}>
                <Text style={styles.text5}>Total bill</Text>
                <Text style={styles.text3}>₹{props.bill}</Text>    
            </View>
            <View style={styles.duration}>
                <Text style={styles.text2}>Set duration</Text>
            </View>
            <View style={styles.buttonbox}>
                <DurationChangeButton num={15}/>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1}>
                    <View>
                        <Text style={styles.text3}>
                            Reject
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <TimerButton step={index} steps={120} />
                </TouchableOpacity>
            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        display: 'flex',
        width: "100%",
        flexDirection: 'column',
        borderRadius: 16,
        paddingBottom: 20,
    },
    header: {
        height: 80,
        paddingLeft: 24,
        paddingTop: 20,
        paddingBottom: 4,
        flexDirection: 'column',
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
        fontSize: 16,
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
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 4,
        paddingBottom: 12,
    },
    it: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text3: {
        color: "#020314",
        fontSize: 16,
        fontWeight: 500,
        paddingLeft: 5,
    },
    text4: {
        color: "#020314",
        fontSize: 16,
        fontWeight: 400,
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 4,
    },
    text5: {
        color: "#6F6F6F",
        fontSize: 14,
        fontWeight: 400,
    },
    duration: {
        paddingLeft: 24,
        paddingTop: 20,
        paddingBottom: 16,
    },
    buttonbox: {
        width: "91%",
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 24,
    },
    button1: {
        backgroundColor: "#EEEDFA",
        height: 38,
        width: "37%",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#D7D2E9",
        borderWidth: 1,
        paddingRight: 5,
    },
    button2: {
        height: 38,
        width: "58%",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text6: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 500,
    },
    text7: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 400,
        paddingLeft: 8,
    },
});
  

export default IncomingOrderCard;