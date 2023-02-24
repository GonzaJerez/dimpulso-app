import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EcommerceScreen } from "../../../../screens/private/ecommerce/EcommerceScreen";


export type EcommerceStackNavigation = {
    EcommerceScreen: undefined;
}

const Stack = createNativeStackNavigator<EcommerceStackNavigation>();

export const EcommerceNavigation = ()=>{
    
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="EcommerceScreen"
                component={EcommerceScreen}
            />
        </Stack.Navigator>
    )
}