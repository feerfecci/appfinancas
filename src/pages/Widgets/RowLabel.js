import React from "react";
import { View,Text, StyleSheet } from "react-native";
import { Label, Texto } from "./styles";

export default function RowLabel ({label, text=''}){
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.texto}>{text}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    label:{
        'fontSize': 18,
        'fontWeight': 'bold',
        'marginRight': 10,
    },
    texto:{
        'fontSize': 18,
    }
});