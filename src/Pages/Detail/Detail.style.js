import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
 container:{
    flex:1
 },
header_container:{
    backgroundColor:"#f0f0f0",
    marginVertical:8,
    marginHorizontal:5
}
 
})