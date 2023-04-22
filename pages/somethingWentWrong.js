import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import NavBar from "../components/NavBar";
import Face from "../assets/errorFace.svg";
import Arrow from "../assets/leftArrow.svg";

const Oops = () => {

    return(
        <View style={styles.mainContainer}>
                <View style={styles.up}>
                    <TouchableOpacity>
                        <Arrow />
                    </TouchableOpacity>
                </View>
                <View style={styles.down}>
                    <Face/>
                    <Text style={styles.text}>Something went wrong</Text>
                    <Text style={styles.text2}>Try again later</Text>
                </View>
            {/* <View style={styles.navbar}>
                <NavBar active="Menu"/>
            </View> */}
        </View>
    );
};

export default Oops;

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#EFEEFA',
        width:"100%",
        height:"100%",
    },
    // main:{
    //     height:"100%",
    //     width:"100%",
    //     marginTop: 33,
    //     // marginBottom: 64,
    //     justifyContent: "center",
    //     alignItems: "center",
    // },
    up:{
        marginTop: 33,
        height:76,
        width:"100%",
        paddingLeft: 33,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
        flexDirection:'row',
        alignItems:'center',
    },
    down:{
        width:"100%",
        height:"100%",
        // justifyContent: "center",
        top: "30%",
        alignItems: "center",
     },
    text2:{
        fontSize: 14,
        fontWeight: 400,
        color: "#6F6F6F",
    },
    text:{
        fontSize: 18,
        fontWeight: 500,
        color: "#6F6F6F",
        marginTop: 14.5,
        marginBottom: 4,
    },
    // navbar: {
    //     position:'absolute', 
    //     bottom:0, 
    //     width:'100%', 
    //     height:64,
    // },
});