import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
import Arrow from "../assets/leftArrow.svg";
import Line from "../assets/horizontalLine.svg";
import Tick from "../assets/tick.svg";
import { useNavigation } from "@react-navigation/native";

const Category = () => {
    const navigation = useNavigation();
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);
    const [checked8, setChecked8] = useState(false);
    const [checked9, setChecked9] = useState(false);

    const handlePress1 = () => {
        setChecked1(!checked1);
    };
    const handlePress2 = () => {
        setChecked2(!checked2);
    };
    const handlePress3 = () => {
        setChecked3(!checked3);
    };
    const handlePress4 = () => {
        setChecked4(!checked4);
    };
    const handlePress5 = () => {
        setChecked5(!checked5);
    };
    const handlePress6 = () => {
        setChecked6(!checked6);
    };
    const handlePress7 = () => {
        setChecked7(!checked7);
    };
    const handlePress8 = () => {
        setChecked8(!checked8);
    };
    const handlePress9 = () => {
        setChecked9(!checked9);
    };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.main}>
        <View style={styles.up}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Arrow />
            </TouchableOpacity>
        </View>
        <View style={styles.down}>
            <Text style={styles.heading}>Choose category</Text>
            <View style={styles.op}>
                <Text style={styles.opText}>Starters</Text>
                <TouchableOpacity >
                    <View style={[{backgroundColor : checked1 ? "#5736B5" : "white"},styles.checkbox]}>
                        {checked1 ? <Tick /> : null}
                    </View>
                </TouchableOpacity> 
            </View>
            <Line />
            <View style={styles.op}>
                <Text style={styles.opText}>Appetizers</Text>
                <TouchableOpacity onPress={handlePress2}>
                    <View style={[{backgroundColor : checked2 ? "#5736B5" : "white"},styles.checkbox]}>
                        {checked2 ? <Tick /> : null}
                    </View>
                </TouchableOpacity> 
            </View>
            {/* <Line /> */}
            <Line />
            <View style={styles.op}>
                <Text style={styles.opText}>Rolls</Text>
                <TouchableOpacity onPress={handlePress3}>
                    <View style={[{backgroundColor : checked3 ? "#5736B5" : "white"},styles.checkbox]}>
                        {checked3 ? <Tick /> : null}
                    </View>
                </TouchableOpacity> 
            </View>
            <Line />
            <View style={styles.op}>
                <Text style={styles.opText}>Maggi</Text>
                <TouchableOpacity onPress={handlePress4}>
                    <View style={[{backgroundColor : checked4 ? "#5736B5" : "white"},styles.checkbox]}>
                        {checked4 ? <Tick /> : null}
                    </View>
                </TouchableOpacity> 
            </View>
            <Line />
            <View style={styles.op}>
                <Text style={styles.opText}>Paratha</Text>
                <TouchableOpacity onPress={handlePress5}>
                    <View style={[{backgroundColor : checked5 ? "#5736B5" : "white"},styles.checkbox]}>
                        {checked5 ? <Tick /> : null}
                    </View>
                </TouchableOpacity> 
            </View>
            <Line />
            <View style={styles.op}>
                <Text style={styles.opText}>Starters</Text>
                <TouchableOpacity onPress={handlePress6}>
                    <View style={[{backgroundColor : checked6 ? "#5736B5" : "white"},styles.checkbox]}>
                        {checked6 ? <Tick /> : null}
                    </View>
                </TouchableOpacity> 
            </View>
            <Line />
            <View style={styles.op}>
                <Text style={styles.opText}>Appetizers</Text>
                <TouchableOpacity onPress={handlePress7}>
                    <View style={[{backgroundColor : checked7 ? "#5736B5" : "white"},styles.checkbox]}>
                        {checked7 ? <Tick /> : null}
                    </View>
                </TouchableOpacity> 
            </View>
            <Line />
            <View style={styles.op}>
                <Text style={styles.opText}>Rolls</Text>
                <TouchableOpacity onPress={handlePress8}>
                    <View style={[{backgroundColor : checked8 ? "#5736B5" : "white"},styles.checkbox]}>
                        {checked8 ? <Tick /> : null}
                    </View>
                </TouchableOpacity> 
            </View>
            <Line />
            <View style={styles.op}>
                <Text style={styles.opText}>Maggi</Text>
                <TouchableOpacity onPress={handlePress9}>
                    <View style={[{backgroundColor : checked9 ? "#5736B5" : "white"},styles.checkbox]}>
                        {checked9 ? <Tick /> : null}
                    </View>
                </TouchableOpacity> 
            </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("AddItem");}}>
            <View>
                <Text style={styles.buttonText}>Proceed</Text>
            </View>
        </TouchableOpacity>
      </ScrollView>
      
        <View style={styles.navbar}>
                <NavBar active="Menu"/>
        </View>
    </View>
  );
};

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
    width:"90%",
    padding: 20,
    paddingBottom: 4,
    paddingRight: 18,
    alignSelf:'center',
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
 },
heading:{
    fontSize: 16,
    fontWeight: 500,
    color: "#020314",
    marginBottom: 8,
},
op:{
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    alignContent:'center',
    marginVertical: 16,
},
opText:{
    fontSize: 14,
    fontWeight: 500,
    color: "#6F6F6F",
}, 
checkbox: {
    borderRadius: 4,
    width: 18, 
    height: 18, 
    borderColor: "#5736B5",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
button:{
    width:"91%",
    height:36,
    backgroundColor: "#5736B5",
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius: 16,
    marginVertical: 16,
},
buttonText:{
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

export default Category;
