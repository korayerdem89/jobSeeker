import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, 
    backgroundColor: "rgba(50,170,255,0.1)", 
    padding: 10,
    paddingTop:50 
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
    alignSelf:"center",
    fontSize:20,
    color:"#ef5350",
    fontWeight:"bold",
    marginBottom:20

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