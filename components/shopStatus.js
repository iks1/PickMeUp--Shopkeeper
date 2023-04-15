import React,{useState} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Calendar from '../assets/calendar.svg';
import Clock from '../assets/clock.svg';
import ToggleSwitch from "toggle-switch-react-native";

const Status = props => {

    const [open, setOpen] = useState(true);
    const [label, setLabel] = useState("Open");

    return (
        <View style={styles.container}>         
            <View style={styles.head}>
                <Text style={styles.HeadText}>
                    Shop status
                </Text>
                <ToggleSwitch
                    isOn={open}
                    onColor="#45BD58"
                    offColor="#EEEDFA"
                    thumbOnStyle={{ backgroundColor: "white" }}
                    thumbOffStyle={{ backgroundColor: "white" }}
                    trackColor={{false: "#EEEDFA", true: "#EEEDFA"}}
                    label={label}
                    labelStyle={{ color: "#6F6F6F", fontWeight: "500", fontSize: 12}}
                    size="medium"
                    onToggle={() => {
                        console.log("changed to : ", open);
                        setOpen(!open);
                        setLabel(open ? "Closed" : "Open");
                    }}
                />
            </View>
            <View style={styles.body}>
                <View style={styles.status}>
                    <Calendar />
                    <Text style={styles.Text}>
                        {props.day}
                    </Text>
                </View>  
                <View style={styles.status}>
                    <Clock />
                    <Text style={styles.Text}>
                        {props.time}
                    </Text>
                </View>  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        flexDirection: 'column',
        borderRadius: 16,
    },
    head:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        alignItems: 'center',
    },
    HeadText:{
        fontSize: 14,
        fontWeight: 500,
        color: '#6F6F6F',
    },
    body:{
        flexDirection: 'column',
        paddingLeft: 18,
    },
    status:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    Text:{
        fontSize: 14,
        fontWeight: 400,
        color: '#020314',
        marginLeft: 15,
    },
});
  
export default Status;
