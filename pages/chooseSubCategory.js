import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
import Arrow from "../assets/leftArrow.svg";
import Line from "../assets/horizontalLine.svg";
import { RadioButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

const SubCategory = () => {
    const navigation = useNavigation(); 
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (value) => {
        setSelectedOption(value);
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
            <View style={styles.head}>
                <Text style={styles.heading}>Choose sub-category</Text>
            </View>
            <View style={styles.op}>
                <Text style={styles.heading}>Starters</Text>
                <View style={styles.row} key="1">
                    <Text style={styles.opText}>Chinese</Text>
                    <RadioButton
                            key="1"
                            value="1"
                            uncheckedColor= "#5736B5"
                            status={selectedOption === 1 ? 'checked' : 'unchecked'}
                            onPress={() => handleOptionSelect(1)}
                            // style={styles.radiobutton}
                    />
                </View>
                <Line />
                <View style={styles.row} key="2">
                    <Text style={styles.opText}>Indian</Text>
                    <RadioButton
                            key="2"
                            value="2"
                            uncheckedColor= "#5736B5"
                            status={selectedOption === 2 ? 'checked' : 'unchecked'}
                            onPress={() => handleOptionSelect(2)}
                            // style={styles.radiobutton}
                    />
                </View>
            </View>
            <View style={styles.op}>
                <Text style={styles.heading}>Snacks</Text>
                <View style={styles.row} key="3">
                    <Text style={styles.opText}>Indian</Text>
                    <RadioButton
                            key="3"
                            value="3"
                            uncheckedColor= "#5736B5"
                            status={selectedOption === 3 ? 'checked' : 'unchecked'}
                            onPress={() => handleOptionSelect(3)}
                            // style={styles.radiobutton}
                    />
                </View>
                <Line />
                <View style={styles.row} key="4">
                    <Text style={styles.opText}>Oriental</Text>
                    <RadioButton
                            key="4"
                            value="4"
                            uncheckedColor= "#5736B5"
                            status={selectedOption === 4 ? 'checked' : 'unchecked'}
                            onPress={() => handleOptionSelect(4)}
                            // style={styles.radiobutton}
                    />
                </View>
            </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("AddItem")}}>
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
    paddingRight: 14,
    alignSelf:'center',
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
 },
heading:{
    fontSize: 16,
    fontWeight: 500,
    color: "#020314",
},
head:{
    width:"100%",
    marginBottom: 16,
},
op:{
    width:"100%",
    justifyContent:'space-between',
    alignContent:'center',
    marginTop: 8,
},
opText:{
    fontSize: 14,
    fontWeight: 500,
    color: "#6F6F6F",
}, 
row:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:"100%",
    marginVertical: 16,
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

export default SubCategory;
