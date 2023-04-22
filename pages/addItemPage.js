import React,{useState} from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import NavBar from "../components/NavBar";
import Arrow from "../assets/leftArrow.svg";
// import Down from "../assets/downArrow.svg";
import Image from "../assets/shopItem.png";
import AddPhoto from "../assets/largeAddPhoto.svg";
import Nonveg from "../assets/nonveg.svg";
import Veg from "../assets/veg.svg";
import ToggleSwitch from "toggle-switch-react-native";
import ThumbsUp from "../assets/thumbsup";
import { useNavigation } from "@react-navigation/native";

const AddItem = () => {
    const navigation = useNavigation();
    const [inStock, setInStock] = useState(true);
    const label = "In stock";
    const [veg, setVeg] = useState(true);
    const handle1 = () => {
        setVeg(true);
    }
    const handle2 = () => {
        setVeg(false);
    }

    return (
        <View style={styles.mainContainer}>
        <ScrollView style={styles.main}>
            <View style={styles.up}>
                <TouchableOpacity>
                    <Arrow />
                </TouchableOpacity>
            </View>
            <View style={styles.down}>
                    <ImageBackground source={Image} style={styles.img}>
                        <AddPhoto />
                        <View style={styles.imgContainer}>
                            <Text style={styles.imgText}>Add photo</Text>
                        </View>
                    </ImageBackground>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.text}
                    placeholder="Item name"
                    placeholderTextColor="#6F6F6F"
                />
            </View>
            <View style={styles.txts}>
                <Text style={styles.txt}>Category</Text>
            </View>
            <TouchableOpacity style={styles.link} onPress={()=>{navigation.navigate("ChooseCategory");}}>
                <Text style={styles.linkText}>Add new category</Text>
            </TouchableOpacity>

            <View style={styles.txts}>
                <Text style={styles.txt}>Sub-category</Text>
            </View>
            <TouchableOpacity style={styles.link} onPress={()=>{navigation.navigate("ChooseSubCategory");}}>
                <Text style={styles.linkText}>Add new sub-category</Text>
            </TouchableOpacity>

            <View style={styles.buttons}>
                <TouchableOpacity style={{ backgroundColor : veg? "#FFFFFF" : "#EEEDFA",height: 38,width: "48%",borderRadius: 20,borderColor: "#D7D2E9",borderWidth: 1,flexDirection: "row",justifyContent: "center",alignItems: "center",}} onPress={handle1}>
                    <Veg/>
                    <Text style={styles.buttonText}>Veg</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor : veg? "#EEEDFA" : "#FFFFFF",height: 38,width: "48%",borderRadius: 20,borderColor: "#D7D2E9",borderWidth: 1,flexDirection: "row",justifyContent: "center",alignItems: "center",}} onPress={handle2}>
                    <Nonveg/>
                    <Text style={styles.buttonText}>Non Veg</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.txts}>
                <Text style={styles.txt}>Pricing</Text>
            </View>
            <View style={styles.cont}>
                <View style={styles.small}>
                    <Text style={styles.smallText}>₹</Text>
                </View>
                <TextInput
                    style={styles.text}
                    placeholder="Item price"
                    placeholderTextColor="#6F6F6F"
                />
            </View>
            <View style={styles.cont}>
                <View style={styles.small}>
                    <Text style={styles.smallText}>₹</Text>
                </View>
                <TextInput
                    style={styles.text}
                    placeholder="Packing Charges"
                    placeholderTextColor="#6F6F6F"
                />
            </View>
            <View style={styles.txts}>
                <Text style={styles.txt}>Specifications</Text>
            </View>
            <View style={styles.cont}>
                <View style={styles.big}>
                    <Text style={styles.smallText}>Half</Text>
                    <Text style={styles.smallText}>₹</Text>
                </View>
                <TextInput
                    style={styles.text}
                    placeholder="Item Price"
                    placeholderTextColor="#6F6F6F"
                />
            </View>

            <View style={styles.stock}>
                <View style={styles.row1}>
                    <Text style={{fontSize: 14,fontWeight: 500,marginRight: 9, color: inStock ? "#6F6F6F" : "#999999"}}>Recommended</Text>
                    <ThumbsUp />
                </View>
                <View style={styles.toggleView}>
                    <ToggleSwitch
                    isOn={inStock}
                    onColor="#5736B5"
                    offColor="white"
                    thumbOnStyle={{ backgroundColor: "white" }}
                    thumbOffStyle={{ backgroundColor: "#EEEDFA" }}
                    label={label}
                    labelStyle={{ color: "#020314", fontWeight: "500" }}
                    size="medium"
                    onToggle={() => {
                        console.log("changed to : ", !inStock);
                        setInStock(!inStock);
                    }}
                    />
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn1}  onPress={()=>{navigation.navigate("Menu");}}>
                    <Text style={styles.btnText1}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={()=>{navigation.navigate("Menu");}}>
                    <Text style={styles.btnText2}>Save</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
        <View style={styles.navbar}>
            <NavBar active="Menu"/>
        </View>
        </View>
    );
};

export default AddItem;

const styles = StyleSheet.create({
    collapsible: {
        width: "100%",
        height: 76,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    collapsibletext: {
        maxHeight: 1,
        overflow: "hidden",
        borderRadius: 4,
        lineHeight: 1.5,
        position: "relative",
        top: "-100%",
        opacity: 0.5,
        // transition: all 0.3s ease,
    },
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
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16, 
        height: 51,
        width: '91%', 
        alignSelf:'center',
    },
    txts: {
        marginLeft: 24,
        marginTop: 20,
    },
    txt: {
        fontSize: 16,
        fontWeight: 500,
        color: "#020314",
    },
    link: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16, 
        height: 51,
        width: '91%', 
        alignSelf:'center',
        justifyContent:'center',
        marginTop: 12,
    },
    linkText: {
        fontSize: 14,
        fontWeight: 400,
        color: "#020314",
        marginLeft: 20,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        width: "91%",
        marginTop: 20,
        marginBottom: 16,
    },
    button: {
        height: 38,
        width: "48%",
        borderRadius: 20,
        borderColor: "#D7D2E9",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 500,
        color: "#000000",
        marginLeft: 8,
    },
    text: {
        color: "black",
        paddingLeft: 20,
        paddingTop: 16,
        paddingBottom: 16,
        fontSize: 14,
    },
    cont: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16, 
        height: 51,
        width: '91%', 
        alignSelf:'center',
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    small: {
        width: 10,
        marginLeft: 20,
    },
    smallText: {
        fontSize: 16,
        fontWeight: 400,
        color: "#020314",
    },

    big: {
        width: "65%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 20,
    },
    stock: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 24,
        marginRight: 24,
        marginTop: 20,
        marginBottom: 5,
    },
    row1: {
        flexDirection: "row",
    },
    btn1:{
        width:"35%",
        height:36,
        backgroundColor: "#EEEDFA",
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor: "#D7D2E9",
    },
    btn2:{
        width:"61%",
        height:36,
        backgroundColor: "#5736B5",
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 20,
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
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
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