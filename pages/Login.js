import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Arrow from "../assets/leftArrow.svg";
import RegisterButton from "../components/registerButton";
import InputField from "../components/InputField";
import Google from "../components/Google";

const SignUp = () => {
    
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.arrow}>
                    <TouchableOpacity>
                        <Arrow/>
                    </TouchableOpacity>
                </View>
                <View style={styles.input}>
                    <InputField text="Shop ID"/>
                    <InputField text="Email ID"/>
                    <InputField text="Password"/>
                </View>
                <View style={styles.password}>
                    <Text style={styles.p1}>Forgot Password or Shop ID?</Text>
                    <TouchableOpacity>
                        <Text style={styles.p2}> Click here</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.input2}>   
                    <RegisterButton text="Login"/>
                    <Text style={styles.or}>or</Text>
                    <Google/>
                </View>

                <View style={styles.text}>
                    <Text style={styles.texts}>
                        By tapping Register, or continue with Outlook or Google, you agree to our
                        <Text style={styles.boldText}> Terms of Use </Text> 
                        and  
                        <Text style={styles.boldText}> Privacy Policy</Text>                  
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
        paddingLeft: 33,
        paddingTop: 33,
    },
    input: {
        marginTop: 24,
        width: "100%",
        height: 185,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
    },
    input2: {
        marginTop: 24,
        height: 114,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
    },
    password: {
        marginTop: 16,
        height: 19,
        flexDirection:'row',
        alignSelf: 'center',
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
        marginTop: 16,
        height: 36,
        width: "91%",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: 'row',
    },
    boldText: {
        fontWeight: 500,
    },
    texts: {
        textAlign: "center",
        color: "#6F6F6F",
        fontSize: 12,
        fontWeight: 400,
    }
});

export default SignUp;