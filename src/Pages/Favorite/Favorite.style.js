import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window') 

export default StyleSheet.create({
  container: { flex: 1, 
    backgroundColor: "rgba(50,170,255,0.1)", 
    padding: 5,
    paddingTop:50,
  },
  inner_container: {
    marginBottom: 10,
    borderRadius: 10,
  },
  button_container: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  favHeader:{
    fontSize:20,
    color:"white",
    fontWeight:"bold",
    marginBottom:20,
    backgroundColor:"#ef5350",
    padding:5,
    width:deviceSize.width,
    alignSelf:"center",
    textAlign:"center"
  },
  delete_item:{
    padding:2,
    backgroundColor:"white",
    alignSelf:"flex-end",
    marginRight:8,
    borderTopLeftRadius:2,
    borderTopRightRadius:2
  }
});