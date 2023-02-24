import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecetarioScreen } from "../../../../screens/private/recetario/RecetarioScreen";


export type RecetarioStackNavigation = {
    RecetarioScreen: undefined;
}

const Stack = createNativeStackNavigator<RecetarioStackNavigation>();

export const RecetarioNavigation = ()=>{
    
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="RecetarioScreen"
                component={RecetarioScreen}
            />
        </Stack.Navigator>
    )
}