import React from "react";
import { ScrollView, View, Text, StyleSheet} from "react-native";
import PendingOrderCard from "../components/PendingOrderCard";
import SearchBar from '../components/SearchBar'
import NavBar from '../components/Navbar'
import Header from "../components/header";

const PrintDash=()=>{
    return (
        <View style={styles.mainContainer}>
            <ScrollView  style={styles.main}>

                <View style={styles.up}>
                    <Header text="Dashboard"/>
                    <SearchBar textInput="Search for orders"/>
                </View>

                <View style={styles.down}>
                    
                    <View style={styles.subHead}>
                            <Text style={styles.subHeadTex} >
                                What are you looking for?
                            </Text>
                    </View>
                    
                    
                    <View style={styles.tabs}>
                        <ScrollView horizontal={true}>
                            <View style={styles.tab1}>
                                <SmallShopCard img={canteen} line1="Kapili Hostel Juice Centre" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>
                            </View>
                            <View style={styles.tab1}>
                                <SmallShopCard img={canteen} line1="Kapili Hostel Juice Centre" dist="200 m" line2="Snacks, Multi Cuisine" rating="4.0"/>
                            </View>
                        </ScrollView>
                    </View>
                    
                    <View style={styles.cards}>
                        <PendingOrderCard orderNumber="1002" orderTime="17" bill="1000" list={[{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:0,num:2,item:"pizza",price:200}]}/>
                        <PendingOrderCard orderNumber="1002" orderTime="17" bill="1000" list={[{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:1,num:1,item:"maggi",price:20},{veg:0,num:2,item:"pizza",price:200}]}/>
      
                    </View>

                </View>          
            </ScrollView>   

            <View style={styles.navbar}>
                    <NavBar/>
            </View>

        </View>
    );
}

export default PrintDash

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
    },
    down:{
        height:"100%",
        width:"100%",
        borderRadius:16,
        backgroundColor:'#EFEEFA',
        flexDirection:'column',
        alignItems:'center',
        marginBottom: 64,
    },
    head:{
        marginTop:48,
        marginLeft:24,
        marginRight:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headTex:{
        fontSize:20,
        fontWeight:500,
        color:'white',
    },
    subHeadTex:{
        color:'#6F6F6F',
        fontSize:14,
        fontWeight:500,
    },
    subHead:{
        width:"90%",
        height:19,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
    },
    tabs:{
        width:"100%",
        flexDirection:'row',
        alignItems: "center",
        paddingTop:16,
        // marginRight: 16,
        // marginLeft: 16,
    },
    tab1:{
        // height: "100%",
        // padding: 16
    },
    cards:{
        flexDirection:'column',
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    navbar: {
        position:'absolute', 
        bottom:0, 
        width:'100%', 
        height:64,
    },
})