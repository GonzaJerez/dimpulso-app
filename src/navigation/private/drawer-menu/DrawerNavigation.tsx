import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer } from '../../../components/menu/CustomDrawer';
import { ThemeContext } from '../../../context/theme/ThemeContext';
import { TabNavigation } from '../tab-menu/TabNavigation';
import { AgendaNavigation } from './agenda/AgendaNavigation';
import { RecetarioNavigation } from './recetario/RecetarioNavigation';
import { TurneroNavigation } from './turnero/TurneroNavigation';


export type DrawerNavigation = {
    TabNavigation: undefined;
    RecetarioNavigation: undefined;
    TurneroNavigation: undefined;
    AgendaNavigation: undefined;
}

const Drawer = createDrawerNavigator<DrawerNavigation>();

const ICON_DRAWER_SIZE = 20;

export const DrawerNavigation = ()=>{
    
    const { theme } = useContext(ThemeContext)

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerContentStyle: {paddingTop: 50}
            }}
            drawerContent={(props)=>(<CustomDrawer {...props}/>)}

        >
            <Drawer.Screen 
                name='TabNavigation'
                component={TabNavigation}
                options={{
                    title: 'Inicio',
                    headerShown: false,
                    drawerIcon: ({focused})=>(
                        <Ionicons
                            name="home-outline"
                            size={ICON_DRAWER_SIZE}
                            color={(focused) ? theme.colors.primary : theme.colors.text}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name='RecetarioNavigation'
                component={RecetarioNavigation}
                options={{
                    title: 'Recetario',
                    drawerIcon: ({focused})=>(
                        <Ionicons
                            name="receipt-outline"
                            size={ICON_DRAWER_SIZE}
                            color={(focused) ? theme.colors.primary : theme.colors.text}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name='TurneroNavigation'
                component={TurneroNavigation}
                options={{
                    title: 'Turnero',
                    drawerIcon: ({focused})=>(
                        <Ionicons
                            name="shield-checkmark-outline"
                            size={ICON_DRAWER_SIZE}
                            color={(focused) ? theme.colors.primary : theme.colors.text}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name='AgendaNavigation'
                component={AgendaNavigation}
                options={{
                    title: 'Agenda',
                    drawerIcon: ({focused})=>(
                        <Ionicons
                            name="calendar-outline"
                            size={ICON_DRAWER_SIZE}
                            color={(focused) ? theme.colors.primary : theme.colors.text}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}