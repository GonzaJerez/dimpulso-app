import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TurneroScreen } from "../../../../screens/private/turnero/TurneroScreen";


export type TurneroStackNavigation = {
    TurneroScreen: undefined;
}

const Stack = createNativeStackNavigator<TurneroStackNavigation>();

export const TurneroNavigation = ()=>{
    
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="TurneroScreen"
                component={TurneroScreen}
            />
        </Stack.Navigator>
    )
}