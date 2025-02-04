import React, { createContext, useState } from "react";
import api from "../../config/config.json";
import {  ActivityIndicator, useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    async function fazerLogin(username, password) {
        setLoading(true);
        try {
            const response = await fetch(api.urlRootNode + 'login', {
                method: "post",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                })
            });
            setLoading(false);
            console.log('deu certo');
            navigation.navigate('AllGastos');

        } catch (error) {
            setLoading(false);
            console.log('Erro ao Fazer login', error);
        }
    }

    return (
        <AuthContext.Provider value={{ logado: !!user, user, fazerLogin, loading }}>
            {children}
        </AuthContext.Provider>)
}