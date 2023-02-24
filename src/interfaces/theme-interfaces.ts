import { Theme } from "@react-navigation/native";

export interface ThemeState extends Theme {
    // colores personalizados
}

export type ThemeActions =
  | {type: 'set_light_theme'}
  | {type: 'set_dark_theme'}