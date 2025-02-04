import React, { useContext } from "react";
import { View, ActivityIndicator,Text } from "react-native";
import AuthRoutes from "./auth.routes";
import Login from "../pages/Login";
import AppRoutes from "./app.routes";
import { AuthContext } from "../contexts/auth";


function Routes() {
    const { logado, loading } = useContext(AuthContext);

if(loading){
    return <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor: '#F0F4FF'}}>
        <ActivityIndicator size="large" color="#131313"/>
    </View>
}
    return (
        logado ? <AppRoutes /> : <AuthRoutes />
    )
};
export default Routes;