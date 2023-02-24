import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AgendaScreen } from "../../../../screens/private/agenda/AgendaScreen";


export type AgendaStackNavigation = {
    AgendaScreen: undefined;
}

const Stack = createNativeStackNavigator<AgendaStackNavigation>();

export const AgendaNavigation = ()=>{
    
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="AgendaScreen"
                component={AgendaScreen}
            />
        </Stack.Navigator>
    )
}