import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../../../components/menu/CustomDrawer';
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

export const DrawerNavigation = ()=>{
    

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
                }}
            />
            <Drawer.Screen 
                name='RecetarioNavigation'
                component={RecetarioNavigation}
                options={{
                    title: 'Recetario',
                }}
            />
            <Drawer.Screen 
                name='TurneroNavigation'
                component={TurneroNavigation}
                options={{
                    title: 'Turnero',
                }}
            />
            <Drawer.Screen 
                name='AgendaNavigation'
                component={AgendaNavigation}
                options={{
                    title: 'Agenda',
                }}
            />
        </Drawer.Navigator>
    )
}