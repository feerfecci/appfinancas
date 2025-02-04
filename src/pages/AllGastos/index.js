import { React, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import api from "../../../config/config.json";
import { useUser } from "../UserContext";


export default function AllGastos() {
    const { userId } = useUser();
    const [gastos, setGastos] = useState([]);

    useEffect(() => {
        async function loadGastos() {
            try {

                const response = await fetch(api.urlRootNode + "allgastos/" + userId, {
                    method: 'get',
                    headers: {
                        Accept: 'aplication/json',
                        'Content-Type': 'aplication/json'
                    }
                }).then(resp => resp.json(resp))
                    .then(json => {

                        console.log(json.data);

                    })

            } catch (error) {
                console.log(error);
            }


        }

        loadGastos();
    }, []);


    return (
        <View style={css.container}>
            <Text>Teste All</Text>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
});