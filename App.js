import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';
// const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <StatusBar />
                <Routes />
                {/* <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="AllGastos" component={AllGastos}/>
                </Stack.Navigator> */}
            </AuthProvider>
        </NavigationContainer>

    )
}