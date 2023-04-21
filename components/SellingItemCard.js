import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NonVegIcon from "../assets/nonveg.svg";
import VegIcon from "../assets/veg.svg";
import RatingView from "../components/RatingView";
import Arrow from "../assets/rightArrow.svg";

const SellingItemCard = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.image}>
                <Image source={props.image} style={styles.image} /> 
            </View>
            <View style={styles.box}>
                <View style={styles.box11}>
                    <View style={styles.headingDecorator}>
                        {(props.veg === "1") ? (<VegIcon/>):(<NonVegIcon/>)}
                        {(props.bestSeller === "1") ? (<Text style={styles.texts}> BestSeller</Text>) : (<Text> </Text>)}
                    </View>
                    <View>
                        <Text style={styles.text}>
                            {props.itemName}
                        </Text>
                    </View>
                    <View>
                        <RatingView rating={props.rating} />
                    </View>
                
                </View>

                <View style={styles.box2}>
                    <TouchableOpacity>
                        <Arrow />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "91%",
        height: 92,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginBottom: 16,
    },
    box: {
        width: "66%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    box11: {
        flexDirection: 'column',
    },
    headingDecorator: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
    },
    text: {
        fontSize: 14,
        fontWeight: 500,
        color: "#020314",
        marginBottom: 4,
    },
    texts: {
        color: "#5736B5",
        fontWeight: 500,
        fontSize: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 16,
        alignSelf: "center",
        marginLeft: 16,
    },
    box2: {
        alignSelf: "center",
        marginRight: 2,
    }
});

export default SellingItemCard;