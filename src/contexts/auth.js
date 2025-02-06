import React, { createContext, useState, useEffect } from "react";
import api from "../../config/config.json";
import { ActivityIndicator, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState();
    // const navigation = useNavigation();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('user');
            if (storageUser) {
                // console.log('entrou storege');
                setLoading(true);
                const user = JSON.parse(storageUser);
                // console.log(user);
                const response = await fetch(api.baseUrl + 'login', {
                    method: "post",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "username": user.username,
                        "password": user.password,
                        "logado": true,
                    })
                }).catch(() => {
                    alert("Não foi possível fazer o login. Digite novamente");
                    setUser(null);
                    setLoading(false);
                });


                const resp = await response.json();
                const data = resp.data;

                ///$2y$12$6BarbpNlOZKB9lSFK/shM.MLd3WYpkw4qLscgciuyWdGuJ8bIQsTK
                if (data != null) {
                    // console.log('tem data');
                    setUser(data);
                    setLoading(false);
                    // console.log('home', user);
                    //                        navigate("home");

                } else {
                    // console.log(data);
                    setUser(null);
                    setLoading(false);
                    await AsyncStorage.clear();
                    // navigate('login');
                    alert("Erro ao fazer login");
                }




            }

            setLoading(false);
            // console.log('saiu do if');
        }
        loadStorage();
    }, []);

    async function fazerLogin(username, password) {
        setLoading(true);
        try {
            const response = await fetch(api.baseUrl + 'login', {
                method: "post",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": "feeh@gmail.com",
                    "password": "abc123456",
                })
            });

            // console.log('entrou try');
            //                if (!response.ok) throw new Error("Falha ao conectar com o servidor");

            const resp = await response.json();
            const data = resp.data;

            if (data != null) {
                // console.log('data != null', data);
                setUser({ id: data.id, username: data.username }); // Salva no contexto
                setLoading(false);
                await AsyncStorage.setItem('user', JSON.stringify(data));
                const primeirouser = await AsyncStorage.getItem('user');
                // console.log('primeirouser ', primeirouser);
                //                navigate("home"); // Redireciona para outra página
            } else {
                // console.log('data == null');
                setLoading(false);
                alert(resp.mensagem); // Exibe erro genéricoI
            }
        } catch (err) {
            // console.log('err');
            setLoading(false);
            alert("Erro de conexão: ", err); // Exibe erro genérico
        }
    }


    async function fazerLogout() {
        await AsyncStorage.clear().the(() => {
            setUser(null)
        });
    }
    return (
        <AuthContext.Provider value={{ logado: !!user, user, fazerLogin, fazerLogout, loading }}>
            {children}
        </AuthContext.Provider>)
}