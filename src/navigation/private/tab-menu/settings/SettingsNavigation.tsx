import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "../../../../screens/private/settings/SettingsScreen";


export type SettingsStackNavigation = {
    SettingsScreen: undefined;
}

const Stack = createNativeStackNavigator<SettingsStackNavigation>();

export const SettingsNavigation = ()=>{
    
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SettingsScreen"
                component={SettingsScreen}
            />
        </Stack.Navigator>
    )
}