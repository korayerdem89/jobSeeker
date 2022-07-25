import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    button: {
        paddingVertical:8,
        paddingHorizontal:40,
        backgroundColor:"#ef5350",
        borderRadius:5
    },
})