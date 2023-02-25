import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ThemeContext } from "../../../context/theme/ThemeContext";
import { HomeScreen } from "../../../screens/private/HomeScreen";
import { EcommerceNavigation } from "./ecommerce/EcommerceNavigation";
import { SettingsNavigation } from "./settings/SettingsNavigation";
import { UserNavigation } from "./user/UserNavigation";


export type TabBarNavigation = {
    HomeScreen: undefined;
    UserNavigation: undefined;
    SettingsNavigation: undefined;
    EcommerceNavigation: undefined;
    MenuLateral: undefined;
}

const Tab = createBottomTabNavigator<TabBarNavigation>();

const ICON_TAB_SIZE = 30;

export const TabNavigation = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 70
                }
            }}
        >

            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="home-outline"
                            size={ICON_TAB_SIZE}
                            color={(focused) ? theme.colors.primary : theme.colors.text}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="UserNavigation"
                component={UserNavigation}
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="person-outline"
                            size={ICON_TAB_SIZE}
                            color={(focused) ? theme.colors.primary : theme.colors.text}
                        />
                    )
                }}
            />

            {/* Abre menu lateral al presionar el boton, no cambia de pantalla */}
            <Tab.Screen
                name="MenuLateral"
                component={HomeScreen}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.openDrawer();
                    }
                })}
                options={{
                    title: 'Menu',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="grid-outline"
                            size={ICON_TAB_SIZE}
                            color={(focused) ? theme.colors.primary : theme.colors.text}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="EcommerceNavigation"
                component={EcommerceNavigation}
                options={{
                    title:'Ecommerce',
                    tabBarIcon: ({focused})=>(
                        <Ionicons 
                            name="cart-outline"
                            size={ICON_TAB_SIZE}
                            color={(focused) ? theme.colors.primary : theme.colors.text}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="SettingsNavigation"
                component={SettingsNavigation}
                options={{
                    title: 'Ajustes',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="settings-outline"
                            size={ICON_TAB_SIZE}
                            color={(focused) ? theme.colors.primary : theme.colors.text}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}