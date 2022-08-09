import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header_container: {
        backgroundColor: "#f0f0f0",
        marginVertical: 8,
        marginHorizontal: 5
    },
    page_buttons: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal:7,

    }

})