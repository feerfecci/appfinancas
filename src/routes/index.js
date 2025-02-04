import React, { useContext } from "react";
import { View, ActivityIndicator,Text } from "react-native";
import AuthRoutes from "./auth.routes";
import Login from "../pages/Login";
import AppRoutes from "./app.routes";
import { AuthContext } from "../contexts/auth";

function Routes() {
    const loading = false;
    const { logado } = useContext(AuthContext);


    return (
        logado ? <AppRoutes /> : <AuthRoutes />
    )
};
export default Routes;