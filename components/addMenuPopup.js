import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const PopUp = () => {
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.btn1}>
                <View>
                    <Text style={styles.text}>Add category +</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}>
                <View>
                    <Text style={styles.text}>Add sub category +</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
                <View>
                    <Text style={styles.text2}>Add item +</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}         

const styles = StyleSheet.create({
    main: {
        position: "absolute",
        bottom: 64,
        width: "100%",
        height: 178,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        elevation: 2,
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4.5%",
        paddingBottom: 12,
        borderColor: "#E5E5E5",
        borderWidth: 0.3,
    },
    text: {
        color: "#000000",
        fontSize: 16,
        fontWeight: 500,
    },
    text2: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 500,
    },
    btn1: {
        backgroundColor: "#EEEDFA",
        borderRadius: 20,
        width: "100%",
        height: 38,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#D7D2E9",
    },
    btn2: {
        backgroundColor: "#5736B5",
        borderRadius: 20,
        width: "100%",
        height: 38,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default PopUp;