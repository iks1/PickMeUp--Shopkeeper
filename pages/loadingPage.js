import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import NavBar from "../components/NavBar";

const Loading = () => {

    return(
        <View style={styles.mainContainer}>
            <View style={styles.main}>
                    <ActivityIndicator size="large" color="#5736B5" style={styles.indicator} />
                    <Text style={styles.text}>Loading...</Text>
                </View>
            {/* <View style={styles.navbar}>
                <NavBar active="Menu"/>
            </View> */}
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#EFEEFA',
        width:"100%",
        height:"100%",
    },
    main:{
        height:"100%",
        width:"100%",
        marginTop: 33,
        marginBottom: 64,
        justifyContent: "center",
        alignItems: "center",
    },
    indicator: {
        transform: [{scaleX:2},{scaleY:2}],
        padding: 20,
    },
    text:{
        fontSize: 18,
        fontWeight: 500,
        color: "#6F6F6F",
    },
    navbar: {
        position:'absolute', 
        bottom:0, 
        width:'100%', 
        height:64,
    },
});