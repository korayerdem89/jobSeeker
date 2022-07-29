import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
 container:{
    backgroundColor:"rgba(50,170,255,0.1)",
    flex:1
 },
 page_buttons:{
   alignItems:"center",
   flexDirection:"row",
   justifyContent:"space-around",
   marginTop:10,
   marginBottom:20
 } 
})