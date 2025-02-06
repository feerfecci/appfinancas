import React, { useContext, useState } from "react";
import { ActivityIndicator, Platform, View } from "react-native";
// import { useUser } from "../UserContext";
import { AreaInput, Background, Container, Input, Logo, SubmitButton, SubmitText } from "./styles";
import { AuthContext } from "../../contexts/auth";



export default function Login() {
    // const { setUserId } = useUser();
    const { fazerLogin, loading } = useContext(AuthContext);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();


    function submitLogin() {
        console.log('submite', username);
//        if (username == null || password == null) {
//            return;
//        } else {
            fazerLogin(username, password);

//        }
    }



    //envia form
    // async function fazerLogin() {
    //     console.log('Enviando dados: ', { name: username, password: password, });
    //     setLoading(true);

    //         const response = await fetch(api.baseUrl + 'login', {
    //             method: "post",
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 "username": username,
    //                 "password": password,
    //             })
    //         }).then(resp => resp.json(resp))
    //             .then(json => {
    //                 setLoading(false);
    //                 if (json.data != null) {
    //                     console.log(json);
    //                     alert(json.mensagem);
    //                     // console.log(json);
    //                     // setUser(json.data.id);
    //                     // navigation.replace('AllGastos');

    //                 } else if (!json.data) {
    //                     if (json.mensagem) {
    //                         alert(json.mensagem);

    //                     } else {
    //                         alert('Não foi possível realizar o login');
    //                     }
    //                 }

    //             });

    //         if (!response) {
    //             console.log('Erro na requisição: ' + response.statusText);
    //         } else {
    //             alert('Login realizado: ' + data.mensagem);
    //         }

    //         const data = await response.json();
    //         console.log('Resposta do servidor:');

    // }

    // if (loading) {
    //     return (
    //         <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    //             <ActivityIndicator color={'red'} size={45} />

    //         </View>
    //     )
    // } else {
    return (
        <Background >
            <Container
                behavior={Platform.OS == 'ios' ? 'padding' : ''}
                enabled>
                <Logo
                    source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input placeholder="UserName"
                        value={username}
                        onChangeText={(text) => setUserName(text)}

                    />
                </AreaInput>
                <AreaInput>
                    <Input placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.5}
                    onPress={() => submitLogin()}

                >
                    {
                        loading ? (<ActivityIndicator size={20} color="#fff" />) : (

                            <SubmitText>
                                Fazer Login
                            </SubmitText>
                        )
                    }

                </SubmitButton>

            </Container>
        </Background>
    )
    // }
}
