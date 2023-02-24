import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserScreen } from "../../../../screens/private/user/UserScreen";


export type UserStackNavigation = {
    UserScreen: undefined;
}

const Stack = createNativeStackNavigator<UserStackNavigation>();

export const UserNavigation = ()=>{
    
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="UserScreen"
                component={UserScreen}
            />
        </Stack.Navigator>
    )
}