import React,{useState} from "react";
import { ScrollView, View, Text, StyleSheet} from "react-native";
import PendingOrderCard from "../components/PendingOrderCard";
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import Header from "../components/header";
//import ToggleSwitch from "toggle-switch-react-native";
import ToggleSwitch from "rn-toggle-switch";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const PendingHomePage=()=>{

    const [open, setOpen] = useState(true);
    const [label, setLabel] = useState("Open");
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            <ScrollView  style={styles.main}>

                <View style={styles.up}>
                    <Header text="Dashboard"/>
                    <SearchBar textInput="Search for orders"/>
                </View>

                <View style={styles.down}>
                    <View style={styles.open}>
                        {/* <ToggleSwitch
                            isOn={open}
                            onColor="green"
                            offColor="white"
                            thumbOnStyle={{ backgroundColor: "#EEEDFA" }}
                            thumbOffStyle={{ backgroundColor: "#EEEDFA" }}
                            label={label}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={() => {
                                console.log("changed to : ", open);
                                setOpen(!open);
                                setLabel(open ? "Closed" : "Open");
                            }}
                        /> */}

                         <ToggleSwitch
                           text={{on: 'OPEN', off: 'CLOSED', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
                           textStyle={{fontWeight: 'bold'}}
                           color={{ indicator: 'white', active: '#45BD58', inactive:  'rgba( 247, 247, 247, 1)', activeBorder: '#41B4A4', inactiveBorder: '#E9E9E9'}}
                           active={true}
                           disabled={false}
                           width={108}
                            radius={12}
                          onValueChange={(val) => {
                                 /* your handler function... */
                              }}
                           />
                    </View>

                    <View style={styles.tabs}>
                        <ScrollView horizontal={true}>
                            <TouchableOpacity style={styles.tab1} onPress={()=>{navigation.navigate("Pending");}}>
                                <Text style={styles.tabtext1}>Pending Orders</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tab2} onPress={()=>{navigation.navigate("Ready");}}>
                                <Text style={styles.tabtext2}>Ready Orders</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tab3} onPress={()=>{navigation.navigate("Completed");}}>
                                <Text style={styles.tabtext2}>Completed Orders</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    <View style={styles.cards}>
                        
                    <PendingOrderCard orderNumber="1002" orderTime="17" bill="1000" list={[{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:0,num:2,item:"pizza",price:200}]}/>
                    <PendingOrderCard orderNumber="1002" orderTime="17" bill="1000" list={[{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:0,num:2,item:"pizza",price:200}]}/>
                    <PendingOrderCard orderNumber="1002" orderTime="17" bill="1000" list={[{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:0,num:2,item:"pizza",price:200}]}/>
                    
                    </View>

                </View>    

            </ScrollView>   

            <View style={styles.navbar}>
                <NavBar active="Home"/>
            </View>

        </View>
    );
}

export default PendingHomePage

const styles = StyleSheet.create({
    main:{
        height:"100%",
        width:"100%",
    },
    mainContainer:{
        backgroundColor:'#5736B5',
        width:"100%",
        height:"100%"
    },
    up:{
        height:180,
        width:"100%",
        flexDirection:"column",
        alignItems:"center"
    },
    down:{
        height:"100%",
        width:"100%",
        borderRadius:24,
        backgroundColor:'#EFEEFA',
        flexDirection:'column',
    },
    open: {
        marginLeft: "1%",
        marginTop: 24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    tabs:{
        marginTop: 12,
        flexDirection:'row',
    },
    tab1:{
        height: 32,
        width: 134,
        backgroundColor: "#5736B5",
        borderRadius: 16,
        marginLeft: 4,
        marginRight: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    tabtext1: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: 500,
    },
    tab2:{
        height: 32,
        width: 121,
        backgroundColor: "#EEEDFA",
        borderRadius: 16,
        borderColor: "#D7D2E9",
        borderWidth: 1,
        marginLeft: 4,
        marginRight: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    tab3:{
        height: 32,
        width: 144,
        backgroundColor: "#EEEDFA",
        borderRadius: 16,
        borderColor: "#D7D2E9",
        borderWidth: 1,
        marginLeft: 4,
        marginRight: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    tabtext2: {
        color: "#6F6F6F",
        fontSize: 14,
        fontWeight: 500,
    },
    cards:{
        marginTop: 20,
        marginBottom: 84,
        marginLeft: "2%",
        marginRight: "2%",
        flexDirection:'column',
        alignItems: "center",
        height: "100%"
    },
    navbar: {
        position:'absolute', 
        bottom:0, 
        width:'100%', 
        height:64,
    },
})