import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Phone from '../assets/phone.svg';
import Location from '../assets/location.svg';

const Detail = props => {

    return (
        <View style={styles.container}>         
            <Text style={styles.HeadText}>
                Shop details
            </Text>
            <View style={styles.body}>
                <View style={styles.detail}>
                    <Phone />
                    <Text style={styles.Text}>
                        {props.phoneNo}
                    </Text>
                </View>  
                <View style={styles.detail}>
                    <Location />
                    <Text style={styles.Text}>
                        {props.location}
                    </Text>
                </View>  
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
    },
    detail:{
        flexDirection: "row",
        marginBottom: 16,
        paddingRight: "18%",
        alignItems: "center",
    },
    Text:{
        fontSize: 14,
        fontWeight: 400,
        color: '#020314',
        marginLeft: 12,
        flexWrap: 'wrap',
    },
});
  
export default Detail;
