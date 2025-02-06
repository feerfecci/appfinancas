import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";

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
        </AppDrawer.Navigator>
    )
}