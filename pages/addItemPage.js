import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import NavBar from "../components/NavBar";
import Arrow from "../assets/leftArrow.svg";
import Image from "../assets/shopItem.png";
import AddPhoto from "../assets/largeAddPhoto.svg";

const AddItem = () => {

    return (
        <View style={styles.mainContainer}>
        <ScrollView style={styles.main}>
            <View style={styles.up}>
                <TouchableOpacity>
                    <Arrow />
                </TouchableOpacity>
            </View>
            <View style={styles.down}>
                {/* <View> */}
                    <ImageBackground source={Image} style={styles.img}>
                        <AddPhoto />
                        <View style={styles.imgContainer}>
                            <Text style={styles.imgText}>Add photo</Text>
                        </View>
                    </ImageBackground>
                {/* </View> */}
            </View>
        </ScrollView>
        {/* <View style={styles.navbar}>
            <NavBar active="Menu"/>
        </View> */}
        </View>
    );
};

export default AddItem;

const styles = StyleSheet.create({
    up:{
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
        padding: 16,
        // alignSelf:'center',
        backgroundColor: "#EFEEFA",
        // borderRadius: 16,
     },
    img:{
        width:"100%",
        height: 200,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        overflow: "hidden",
    },
    imgContainer:{
        width: "79%",
        height: 35,
        backgroundColor: "#EEEDFA",
        marginTop: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#D7D2E9",
        alignItems: "center",
        justifyContent: "center",
        // alignSelf: "center",
    },
    imgText:{
        fontSize: 14,
        fontWeight: 500,
        color: "#020314",
    },
    btn1:{
        width:"35%",
        height:36,
        backgroundColor: "#EEEDFA",
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        // alignSelf:'center',
        // marginVertical: 16,
        borderWidth: 1,
        borderColor: "#D7D2E9",
    },
    btn2:{
        width:"61%",
        height:36,
        backgroundColor: "#5736B5",
        justifyContent:'center',
        alignItems:'center',
        // alignSelf:'center',
        borderRadius: 20,
        // marginVertical: 16,
    },
    btnText1:{
        color: "#6F6F6F",
        fontSize: 14,
        fontWeight: 500,
    },
    btnText2:{
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: 500,
    },
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
    },
    navbar: {
        position:'absolute', 
        bottom:0, 
        width:'100%', 
        height:64,
    },
});        