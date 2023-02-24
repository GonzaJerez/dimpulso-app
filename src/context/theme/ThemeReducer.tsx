import { darkTheme, lightTheme } from "../../constants/Colors";
import { ThemeActions, ThemeState } from "../../interfaces/theme-interfaces";



export const ThemeReducer = (state:ThemeState, actions: ThemeActions):ThemeState => {
    switch (actions.type) {
        case "set_dark_theme":
            return {...darkTheme}

        case "set_light_theme":
            return {...lightTheme}
    
        default:
            return state;
    }
}