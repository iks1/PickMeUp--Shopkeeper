import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import ShopCard from "../components/shopCard";
import Arrow from "../assets/leftArrow.svg";
import Edit from "../assets/edit.svg";
import ShopImage from '../assets/shopImage.png';
import Status from "../components/shopStatus";
import Detail from "../components/shopDetail";
import Payment from "../components/payment";
import Bell from "../assets/bell.svg";
import Help from "../assets/help.svg";
import Complaint from "../assets/complaint.svg";
import RightArrow from "../assets/rightArrow.svg";
import NavBar from '../components/NavBar';
import { useNavigation } from "@react-navigation/native";

const Profile=()=>{
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            <ScrollView  style={styles.main}>
                <View style={styles.up}>
                    <TouchableOpacity onPress={()=>{navigation.goBack();}}>
                        <Arrow />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.edit}>
                            <Edit />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.down}>
                    <View style={styles.card}>
                        <ShopCard img={ShopImage} name="Dihing Food Canteen" rating="4.5" type="Restaurant"/>
                    </View>
                    <View style={styles.card}>
                        <Status day="Mon-Fri" time="9:00 AM - 2:00 AM"/>
                    </View>
                    <View style={styles.card}>
                        <Detail phoneNo="+91 9876543210" location="5MQX+8W3, IIT Guwahati, Guwahati, Assam 781039"/>
                    </View>
                    <View style={styles.card}>
                        <Payment list={[{id:1,label:["Google Pay","rajinertia9239111@okhdfcbank"]},{id:2,label:["Google Pay","rajinertia9239111@okhdfcbank"]}]}/>
                    </View>
                    <View style={styles.card2}>
                        <View style={styles.option}>
                            <View style={styles.option1}>
                                <Bell />
                                <Text style={styles.text}>
                                    Manage notifications
                                </Text>
                            </View>
                            <TouchableOpacity>
                                <RightArrow />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.option1}>
                                <Help />
                                <Text style={styles.text}>
                                    Need help?
                                </Text>    
                            </View>
                            <TouchableOpacity>
                                <RightArrow />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.option1}>
                                <Complaint />
                                <Text style={styles.text}>
                                    Raise a complaint
                                </Text>
                            </View>
                            <TouchableOpacity>
                                <RightArrow />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}  onPress={()=>{navigation.navigate("GetStarted");}}>
                        <View>
                            <Text style={styles.buttonText}>
                                Logout
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>         
            </ScrollView>   
            <View style={styles.navbar}>
                    <NavBar active="Home"/>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#EFEEFA',
        width:"100%",
        height:"100%",
        // paddingTop: 33,
    },
    main:{
        height:"100%",
        width:"100%",
        marginTop: 33,
    },
    up:{
        height:76,
        width:"100%",
        paddingLeft: 33,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    edit:{
        width: 48,
        height: 48,
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    down:{
        height:"100%",
        width:"100%",
        flexDirection:'column',
        alignItems:'center',
        marginBottom: 64,
    },
    card:{
        width:"91%",
        marginBottom: 16,
    },
    card2:{
        width:"91%",
        flexDirection:'column',
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        paddingTop: 16,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    option:{
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 16,
    },
    option1:{
        flexDirection: "row",
        alignItems: "center",
    },
    text:{
        fontSize: 14,
        color: "#020314",
        marginLeft: 12,
    },
    button:{
        width:"91%",
        height: 36,
        backgroundColor: "#5736B5",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    buttonText:{
        fontSize: 14,
        fontWeight: 500,
        color: "#FFFFFF",
    },
    navbar: {
        position:'absolute', 
        bottom:0, 
        width:'100%', 
        height:64,
    },
})

