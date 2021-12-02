import * as React from "react";
import { useState } from "react";
import { View, Text, Image, ScrollView, Touchable, TouchableOpacity } from "react-native";
import { servidor } from "../config/Path";
import { styles } from "../css/Styles";
import { AntDesign, Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Atualizar from "./Atualizar";

const Stack = createNativeStackNavigator();
let rs = "";

export default  function Home( {route} ){
  const {dados} = route.params;
  rs = dados[2];
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="TelaHome" component={TelaHome} />
        <Stack.Screen name="Atualizar" component={Atualizar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function TelaHome({ navigation }) {


  console.log(`Dados na home -> ${rs}`);

  // Listagem de clientes
  const [lstCliente, setLstClientes] = useState([]);

  React.useEffect(() => {
    fetch(`${servidor}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'token': rs,
      }
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setLstClientes(result.output);
      })
      .catch((erro) => console.error(`Erro ao ler a api ->${erro}`))
  }, [])

  return (
    <ScrollView horizontal={false} style={styles.scroll}>
      <View style={styles.container}>
        <Image source={{ uri: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80" }} style={styles.imgcliente} />
        <View>
          {
            lstCliente.map((item, index) => (
              <View style={styles.cliente} key={index}>
               
                <View style={styles.alinhaicon}>
                  <AntDesign name="user" size={18} color="green" />
                  <Text style={styles.nome}> Nome: {item.nome}</Text>
                </View>

                <View style={styles.alinhaicon}>
                  <AntDesign name="idcard" size={18} color="black" />
                  <Text style={styles.cpf}> CPF: {item.cpf}</Text>
                </View>

                <View style={styles.alinhaicon}>
                <Fontisto name="email" size={18} color="green" />
                <Text style={styles.email}> {item.email}</Text>
                </View>

                <View style={styles.alinhaicon}>
                <AntDesign name="user" size={18} color="black" />
                <Text style={styles.usuario}> {item.usuario}</Text>
                </View>

              <TouchableOpacity onPress={()=>{
                   navigation.navigate("Atualizar", {cliente:item, token:rs});
                  }}>
                <Feather name="edit" size={24} color="black" style={styles.atualizar}/>
                </TouchableOpacity>
              </View>
            ))
          }
        </View>
      </View>
    </ScrollView>
  );
}
