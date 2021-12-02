import * as React from "react";
import { servidor } from "../config/Path";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
import { styles } from "../css/Styles";


let us = "";
let sh = "";
let resultado: any = [];

export default function Login({ navigation }) {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.png")} style={styles.imglogo} />

      <View style={styles.controles}>
        <TextInput placeholder="Usuário" value={usuario} onChangeText={(value) => setUsuario(value)} style={styles.input} />
        <TextInput placeholder="Senha" value={senha} onChangeText={(value) => setSenha(value)} secureTextEntry style={styles.input} />

        <TouchableOpacity
          style={styles.btnlogar}
          onPress={() => {

            us = usuario;
            sh = senha;
            let retorno = efetuarLogin();

            if (retorno[0] == "Logado"){
              navigation.navigate("Home",{dados:retorno});
            }
            
          }}
        >
          <Text style={styles.txtbtnlogar}>Logar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.btncadastrar}
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
      >
        <Text style={styles.txtbtncadastrar}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

function efetuarLogin() {
  fetch(`${servidor}/login`, {
    method: "POST",
    headers: {
      aceppt: "application/json",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      usuario: us,
      senha: sh
    })
  })
    .then((response) => response.json())
    .then((rs) => {

      resultado[0] = rs.output;
      resultado[1] = rs.payload;
      resultado[2] = rs.token;
    }
    )
    .catch((erro) => console.error(`Erro ao tentar buscar api->${erro}`))
    return resultado;
}
