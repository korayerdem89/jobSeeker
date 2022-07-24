import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        marginVertical:6,
        marginHorizontal:8,
        borderRadius:5,
        padding:5
    },
    locationItem:{
        backgroundColor:"#ef5350",
        alignSelf:"flex-start",
        paddingVertical:3,
        borderRadius:15,
        paddingHorizontal:8,
        marginVertical:2
    }
})