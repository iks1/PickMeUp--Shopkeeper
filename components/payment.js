import React,{useState} from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Gpay from '../assets/Gpay.png';
import Paytm from '../assets/paytm.png';

const Payment = props => {

    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (value) => {
        setSelectedOption(value);
    };

    return (
        <View style={styles.container}>         
            <Text style={styles.HeadText}>
                Payment gateway
            </Text>
            <View style={styles.body}>
                {/* <View style={styles.option}> */}
                    {props.list.map((item) => (
                        <View style={styles.option} key={item.id}>
                            <View style={styles.option1}>
                                <Image source={Gpay} style={styles.logo}/>
                                <View style={styles.id}>
                                    <Text style={styles.Text1}>
                                        {item.label[0]}
                                    </Text>
                                    <Text style={styles.Text2}>
                                        {item.label[1]}
                                    </Text>
                                </View>
                            </View>
                            <RadioButton
                                key={item.id}
                                value={item.id}
                                status={selectedOption === item ? 'checked' : 'unchecked'}
                                onPress={() => handleOptionSelect(item)}
                                style={styles.radiobutton}
                            />
                        </View>
                    ))} 
                {/* </View>   */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        flexDirection: 'column',
        borderRadius: 16,
        paddingLeft: 16,
        paddingTop: 16,
    },
    HeadText:{
        fontSize: 14,
        fontWeight: 500,
        color: '#6F6F6F',
    },
    body:{
        flexDirection: 'column',
        paddingTop: 16,
        paddingRight: 12,
    },
    option:{
        flexDirection: "row",
        marginBottom: 16,
        justifyContent: "space-between",
    },
    logo:{
        width: 37,
    },
    option1:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    id:{
        flexDirection: "column",
        marginLeft: 12,
    },
    Text1:{
        fontSize: 14,
        fontWeight: 400,
        color: '#020314',
    },
    Text2:{
        fontSize: 12,
        fontWeight: 400,
        color: '#6F6F6F',
    },
});
  
export default Payment;
