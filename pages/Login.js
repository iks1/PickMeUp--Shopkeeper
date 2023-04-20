import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Arrow from "../assets/leftArrow.svg";
import RegisterButton from "../components/registerButton";
import InputField from "../components/InputField";
import Google from "../components/Google";
import { useNavigation } from "@react-navigation/native";
const SignUp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("GetStarted");}}>
                        <Arrow/>
                    </TouchableOpacity>
                </View>
                <View style={styles.input}>
                    <InputField text="Shop ID"/>
                    <InputField text="Email ID"/>
                    <InputField text="Password"/>
                    <View style={styles.password}>
                        <Text style={styles.p1}>Forgot Password or Shop ID?</Text>
                        <TouchableOpacity >
                            <Text style={styles.p2}> Click here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.input2}>
                    <TouchableOpacity style={styles.wrapper} onPress={()=>{navigation.navigate("Pending");}}>
                        <RegisterButton text="Login"/>
                    </TouchableOpacity>
                    <Text style={styles.or}>or</Text>
                    <TouchableOpacity style={styles.wrapper} onPress={()=>{navigation.navigate("Pending");}}>
                        <Google/>
                    </TouchableOpacity>
                </View>
                <View style={styles.text}>
                    <Text style={styles.texts}>
                        By tapping Register, or continue with Outlook or Google, you agree to our Terms of Use and Privacy Policy.
                    </Text>
                </View>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: "100%",
        width: "100%",
        backgroundColor:'#5736B5',
        flexDirection:'row',
        alignItems:'flex-end',
    },
    container:{
        backgroundColor:'#EFEEFA',
        height: "93%",
        width:"100%",
        borderTopLeftRadius:24,
        borderTopRightRadius:24,
        flexDirection:'column',
    },
    arrow: {
        paddingLeft: 28,
        paddingTop: 28,
    },
    input: {
        marginTop: 16,
        width: "100%",
        height: 230,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    input2: {
        marginTop: 8,
        height: 120,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    password: {
        marginTop: 8,
        flexDirection:'row',
        alignItems:'center',
    },
    p1: {
        fontSize: 14,
        color: "#6F6F6F",
    },
    p2: {
        fontSize: 14,
        color: "#6F6F6F",
        fontWeight: 500,
    },
    or: {
        fontSize: 16,
        fontWeight: 500,
        color: "#6F6F6F",
    },
    text: {
        marginTop: 4,
        
        width: "91%",
        alignSelf: "center",
        alignItems: "center",
    },
    texts: {
        textAlign: "center",
        color: "#6F6F6F",
        fontSize: 12,
        fontWeight: 500,
    },
    wrapper:{
        width:"100%",
        height:38,
        flexDirection:"row",
        justifyContent:"center"
    }
});

export default SignUp;