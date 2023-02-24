import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../../screens/auth/LoginScreen';
import { RegisterScreen } from '../../screens/auth/RegisterScreen';

export type AuthStackNavigation = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
}

const Stack = createNativeStackNavigator<AuthStackNavigation>();

export function AuthNavigation() {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
            />

        </Stack.Navigator>
    );
}