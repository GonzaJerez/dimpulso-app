import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigation } from './auth/AuthNavigation';
import { PrivateNavigation } from './private/PrivateNavigation';
import { ThemeContext } from '../context/theme/ThemeContext';
import { AuthContext } from '../context/auth/AuthContext';

export type RootStackNavigation = {
    AuthNavigation: undefined,
    PrivateNavigator: undefined;
}

const Stack = createNativeStackNavigator<RootStackNavigation>();

export function RootNavigation() {

    const {theme} = useContext(ThemeContext)
    const {status} = useContext(AuthContext)

    return (
        <NavigationContainer
        theme={theme}
        >

            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {(status === 'authenticated')
                 ? (
                     <Stack.Screen
                         name="PrivateNavigator"
                         component={PrivateNavigation}
                     />
                 )
                 : (
                     <Stack.Screen
                         name="AuthNavigation"
                         component={AuthNavigation}
                     />
                 )
                }




            </Stack.Navigator>

        </NavigationContainer>
    );
}