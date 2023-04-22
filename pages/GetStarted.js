import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import Logo from '../assets/logo.png'
import Logo from '../assets/logo.svg'

import { useNavigation } from "@react-navigation/native";
const Start=()=>{
    const navigation = useNavigation();
    return(
        <View style={styles.mainContainer}>
            
            <View style={styles.up}>
                    <Logo />
                    {/* <Image source={Logo} style={styles.logo}/> */}
                <Text style={styles.Tex2}>Ordering on Campus made easier than ever</Text>
            </View>
            <View style={styles.down}>
                <TouchableOpacity style={styles.but} onPress={()=>{navigation.navigate("Login");}}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{navigation.navigate("Login");}}>
                    <Text style={styles.Tex}>
                        Already have an account? Log in
                    </Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

export default Start;

const styles=StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%',
        backgroundColor:'#5736B5'
    },
    up:{
        width:'100%',
        height:'70%',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center'
    },
    down:{
        width:"100%",
        height:'30%',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center'
    },
    // logo:{
    //     width:"40%",
    //     height: "27.2%",
    // },
    but:{
        width:'90%',
        height:38,
        borderRadius:20,
        backgroundColor:'#EEEDFA',
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#020314',
        fontSize:16,
        fontWeight:500
    },
    Tex:{
        fontSize:16,
        fontWeight:500,
        color:'white',
        width:"70%",
        textAlign:'center',
        marginTop:20
    },
    Tex2:{
        fontSize:20,
        fontWeight:500,
        color:'white',
        width:'70%',
        textAlign:'center',
        marginTop:53,
    }
})