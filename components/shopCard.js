import React from "react";
import {Text, Image, View, StyleSheet} from 'react-native';
import Star from '../assets/star.svg';

const ShopCard = (props) => {

    return (
            <View style={styles.container}>         
                <View style={styles.container1}>              
                    <Image source={props.img} style={{width: "100%", height: "100%"}} />
                </View>             
                <View style={styles.container2}>
                    <View style={styles.container3}>
                        <Text style={styles.name}> {props.name} </Text>
                        <View style={styles.rate}>     
                            <Text style={styles.rating}> {props.rating} </Text>
                            <Star />                          
                        </View> 
                    </View>
                    <Text style={styles.type}>{props.type} </Text>
                </View> 
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        height: 204,
        backgroundColor: "#FFFFFF", 
        borderRadius: 16, 
        display: "flex", 
        flexDirection: "column",
    },
    container1: {
        height: 132,
        width: "100%", 
        borderRadius: 12, 
        overflow: "hidden",
    },
    container2: {
        width: "100%",
        flexDirection:'column',
        justifyContent:'space-between',
        paddingRight: 16, 
        paddingTop: 15,
        paddingBottom: 16,
    },   
    container3: {
        width: "100%",
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 4,
        paddingLeft: 12,
    },     
    rate: {
        height: 20, 
        width: 43, 
        backgroundColor: "#45BD58", 
        borderRadius: 8, 
        alignItems: "center",
        flexDirection: "row", 
        justifyContent: "center",
    },
    name: {
        fontWeight: 500, 
        fontSize: 16, 
        color: "#020314", 
    },
    rating: {
        fontSize: 12, 
        fontWeight: 500, 
        color: "#FFFFFF",
    },
    type: {
        fontWeight: 400, 
        fontSize: 12, 
        color: "#6F6F6F", 
        paddingLeft: 16,
    },
});

export default ShopCard;