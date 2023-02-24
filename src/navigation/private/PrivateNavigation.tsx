import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screens/private/HomeScreen';
import { TabNavigation } from './tab-menu/TabNavigation';
import { DrawerNavigation } from './drawer-menu/DrawerNavigation';

export type AuthStackNavigation = {
    DrawerNavigation: undefined
}

const Stack = createNativeStackNavigator<AuthStackNavigation>();

export function PrivateNavigation() {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="DrawerNavigation"
                component={DrawerNavigation}
            />

        </Stack.Navigator>
    );
}