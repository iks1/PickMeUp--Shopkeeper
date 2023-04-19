import React,{useState} from "react";
import { ScrollView, View, Text, StyleSheet} from "react-native";
import InsightsCard from "../components/InsightsCard";
import NavBar from '../components/NavBar';
import Header from "../components/header";
import ReviewCard from "../components/ReviewCard";
import Image from '../assets/shopImage.png';
import SellingItemCard from "../components/SellingItemCard";

const TodayInsights=()=>{

    const [open, setOpen] = useState(true);
    const [label, setLabel] = useState("Open");

    return (
        <View style={styles.mainContainer}>
            <ScrollView  style={styles.main}>

                <View style={styles.up}>
                    <Header text="Latest insights"/>
                </View>

                <View style={styles.down}>
                    
                    <View style={styles.tabs}>
                        <ScrollView horizontal={true}>
                            <View style={styles.tab1}>
                                <Text style={styles.tabtext1}>Today</Text>
                            </View>
                            <View style={styles.tab2}>
                                <Text style={styles.tabtext2}>Last 7 days</Text>
                            </View>
                            <View style={styles.tab3}>
                                <Text style={styles.tabtext2}>Last 30 days</Text>
                            </View>
                            <View style={styles.tab4}>
                                <Text style={styles.tabtext2}>Select date</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <InsightsCard date="1st june 2001" totalAmount="1000" received="12" accepted="2" cancelled="2" completed="90"/>
                    
                    <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >Reviews</Text>
                        <Text style={styles.LinkText}>See all</Text>
                    </View>

                    <View style={styles.reviews}>
                        <ScrollView horizontal={true}>
                            <ReviewCard image={Image} name="John Doe" review="vhitughoitgihktbthbioiht5oihuoiuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"/>
                            <ReviewCard image={Image} name="John Doe" review="vhitughoitgihktbthbioiht5oihuoiuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"/>
                        </ScrollView>
                    </View>

                    <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >What's selling</Text>
                    </View>

                    <View style={styles.selling}>
                        <SellingItemCard veg="1" bestSeller="1" itemName="Maggi" rating="4.0" image={Image}/>    
                        <SellingItemCard veg="0" bestSeller="1" itemName="Chicken butter masala" rating="4.5" image={Image}/>
                    </View>
                    

                </View>    

            </ScrollView>   

            <View style={styles.navbar}>
                <NavBar/>
            </View>

        </View>
    );
}

export default TodayInsights

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
        height:108,
        width:"100%",
    },
    down:{
        height:"100%",
        width:"100%",
        borderRadius:24,
        backgroundColor:'#EFEEFA',
        flexDirection:'column',
    },
    tabs:{
        marginTop: 32,
        flexDirection:'row',
    },
    tab1:{
        height: 32,
        width: 71,
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
        width: 104,
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
        width: 113,
        backgroundColor: "#EEEDFA",
        borderRadius: 16,
        borderColor: "#D7D2E9",
        borderWidth: 1,
        marginLeft: 4,
        marginRight: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    tab4:{
        height: 32,
        width: 103,
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
    subHead:{
        height:19,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 24,
        marginLeft:"6.66%",
        marginRight:"6.66%",
    },
    subHeadTex:{
        color:'#6F6F6F',
        fontSize:14,
        fontWeight:500,
    },
    LinkText:{
        color:'#5736B5',
        fontSize:14,
        fontWeight:500,
    },
    reviews:{
        marginTop: 16,
        marginLeft: "4%",
        paddingRight: "4%",
    },
    selling:{
        height: "100%",
        width: "100%",
        marginTop: 16,
        marginBottom: 60,
        flexDirection:'column',
        alignItems: "center",
    },
    navbar: {
        position:'absolute', 
        bottom:0, 
        width:'100%', 
        height:64,
    },
})