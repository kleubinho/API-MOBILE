import * as React from "react";
import { useState } from "react";
import { Alert, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { servidor } from "../config/Path";
import { styles } from "../css/Styles";
import { FontAwesome } from '@expo/vector-icons'

let idcliente = "";
let nome = "";
let email = "";
let rs = "";

export default function Atualizar({ route }) {
    const { cliente } = route.params;
    const { token } = route.params;
    rs = token;
    console.log(`Tela atualizar ${cliente.email}`);
    console.log(`token no atualizar ${token}`)


    const [nomecliente, setNomeCliente] = React.useState(cliente.nome)
    const [emailcliente, setEmailCliente] = useState(cliente.email)
    idcliente = cliente._id

    return (

        <View style={styles.container}>
            <Text style={styles.titulo}>Atualizar dados</Text>


            <View style={styles.controles}>
                <TextInput placeholder="Nome do Cliente" style={styles.input} value={nomecliente} onChangeText={(value) => setNomeCliente(value)} />
                <TextInput placeholder="E-mail" keyboardType="email-address" style={styles.input} value={emailcliente} onChangeText={(value) => setEmailCliente(value)} />
                <TouchableOpacity style={styles.btnlogar} onPress={() => {
                    nome = nomecliente;
                    email = emailcliente;

                    efetuarAtualização();

                    setNomeCliente('');
                    setEmailCliente('');
                }}>
                    <Text style={styles.btnlogar}>Atualizar os dados</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.apagar} onPress={() => {
                excluirUsuario();
            }}>
                <FontAwesome name="trash-o" size={24} color="white" />
                <Text style={styles.txtbtnapagar}>Apagar a conta</Text>
            </TouchableOpacity>

        </View>
    )
}

function efetuarAtualização() {
    fetch(`${servidor}/atualizar/${idcliente}`, {
        method: 'PUT',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            "token": rs
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    }).then((response) => response.json())
        .then((rs) => {
            Alert.alert("Atualização", rs.output)
        })
        .catch((erro) => console.error(`Erro ao tentar ler api ->${erro}`))
}

function excluirUsuario() {
    let r = false;

    Alert.alert("Atenção", "Você realmente deseja apagar essa conta?", [
        {
            text: 'Cancelar',
            onPress: () => { }
        },
        {
            text: 'Apagar',
            onPress: () => {
                fetch(`${servidor}/delete/${idcliente}`, {
                    method: "DELETE",
                    headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                        "token": rs
                    }
                }).then((response) => response.status)
                    .then((dados) => {
                        if (dados.toString() == "204") {
                            Alert.alert("Apagado", "Conta excluida")
                        } else {
                            Alert.alert("Atenção", "Não foi possível apagar sua conta");
                        }
                    }).catch((erro) => console.error(`Erro ao ler api -> ${erro}`));
            }
        }
    ]);
}