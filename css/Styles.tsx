import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white"
    
  },
  imglogo: {
    width: 200,
    height: 100,
    resizeMode: "cover",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  controles: {
    width: "80%",
    padding: 20,
    margin: 20,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: "white",
    borderRadius: 10
  },
  input: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
    fontSize: 15,
  },
  btnlogar: {
    padding: 10,
  },
  txtbtnlogar: {
    textAlign: "center",
    color: "black",
    textTransform: "uppercase",
  },
  btncadastrar: {
    // position: "absolute",
    // bottom: 100,
    backgroundColor: "#6eaa5e",
    padding: 20,
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 8
  },
  txtbtncadastrar: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  imgcliente:{
    width:'100%',
    height:200,
    resizeMode:"cover"
  },
  cliente:{
    padding:20,
    backgroundColor:'#fff',
    shadowColor:'silver',
    shadowOffset: {width: 10, height:10},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    margin:10,
    width:300

  },
  nome:{
    fontSize: 17,
    fontWeight:'bold',
    color:"#6eaa5e"
  },
  cpf:{
    fontSize:15,
    fontWeight:'bold',
    color:"#000",
    
  },
  email:{
    fontSize:15,
    color:"#6eaa5e",
    fontWeight:"600"
  },
  usuario:{
    fontSize: 15,
    color:'#000',
    fontWeight:'bold'
  },
  scroll:{
    width:"100%"
  },
  icon:{
    height:30,
    width:30,

  },
  alinhaicon:{
    flexDirection:"row",
    alignItems:"center",
    margin:5
  },
  atualizar:{
    left: "85%"
  },
  apagar:{
    backgroundColor:"red",
    flexDirection:"row",
    justifyContent: "center",
    textAlign: "center",
    padding:10,
    width:'60%',
    borderRadius:20,
    shadowColor:'silver',
    shadowOffset: {width: 10, height:10},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    
    

  },
  txtbtnapagar:{
    fontWeight:"bold",
    fontSize:20,
    marginLeft: 10,
    color:"white"

  }
});
