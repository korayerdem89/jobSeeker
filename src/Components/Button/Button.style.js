import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    button: {
        paddingVertical:8,
        paddingHorizontal:30,
        backgroundColor:"#ef5350",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        width:deviceSize.width / 2.3,
        justifyContent:"center"
    },
    disabledButton: {
        paddingVertical:8,
        paddingHorizontal:30,
        backgroundColor:"#e0e0e0",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        width:deviceSize.width / 2.3,
        justifyContent:"center"
    },
})