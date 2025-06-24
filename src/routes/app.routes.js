import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Entradas from "../pages/AllEntradas"
import Gastos from "../pages/AllGastos"
import Categorias from "../pages/Categorias";
import TipoPagamento from "../pages/TipoPagamento";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes(){
    return(
        <AppDrawer.Navigator screenOptions={{
            headerShown:false,
            drawerStyle:{backgroundColor: 'white',padding:20},
            drawerActiveBackgroundColor: '#3B3DBF',
            drawerActiveTintColor: '#fff',
            drawerinactiveBackgroundColor: '#F0F2FF',
            drawerinactiveTintColor: '#121212',


        }}>
            <AppDrawer.Screen name="Home" component={Home} />
            <AppDrawer.Screen name="Entradas" component={Entradas} />
            <AppDrawer.Screen name="Gastos" component={Gastos} />
            <AppDrawer.Screen name="Categorias" component={Categorias} />
            <AppDrawer.Screen name="Tipos Pagamentos" component={TipoPagamento} />
        </AppDrawer.Navigator>
    )
}