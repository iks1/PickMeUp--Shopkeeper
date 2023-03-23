const Pending = () => {
    return (
        <View style={styles.buttonbox}>
            <TouchableOpacity onPress={handleApply}>
                <Text style={styles.button}>Waiting for pickup</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Pending;