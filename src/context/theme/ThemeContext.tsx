import { createContext, useEffect, useReducer } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

import { darkTheme, lightTheme } from "../../constants/Colors";
import { ThemeState } from "../../interfaces/theme-interfaces";
import { ThemeReducer } from "./ThemeReducer";

interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,
}


export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:{children:JSX.Element | JSX.Element[]}) => {

    // retorna el tema por defecto
    const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(ThemeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme);

    /**
   * Recupera el tema elegido anteriormente por el usuario
   */
  useEffect(() => {
    getThemeFromAsyncStorage()
      .then(resp => {
        (resp === 'light')
          ? setLightTheme()
          : setDarkTheme()
      })
  }, [])

  const getThemeFromAsyncStorage = async () => {
    const themeStorage = await AsyncStorage.getItem('theme') || 'light'
    return themeStorage
  }


  const setDarkTheme = async () => {
    await AsyncStorage.setItem('theme', 'dark')
    dispatch({type: 'set_dark_theme'})

  }

  const setLightTheme = async () => {
    await AsyncStorage.setItem('theme', 'light')
    dispatch({type: 'set_light_theme'})
  }
    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}