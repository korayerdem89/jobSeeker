import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        marginHorizontal:8,
        borderRadius:5,
        padding:5,
        flex:1
    },
    remove_container:{
        backgroundColor:"white",
        marginHorizontal:8,
        padding:5,
        flex:1
    },
    locationItem:{
        backgroundColor:"#ef5350",
        alignSelf:"flex-start",
        paddingVertical:3,
        borderRadius:15,
        paddingHorizontal:8,
        marginVertical:2
    },
    favLevel:{

    }
})