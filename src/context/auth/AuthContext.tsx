import { createContext, useReducer } from "react";
import { AuthState } from "../../interfaces/auth-interfaces";
import { AuthReducer } from "./AuthReducer";

interface AuthContextProps extends AuthState {
    login: ()=>void;
    logout: ()=>void;
}

const initialAuth:AuthState = {
    status: 'checking',
    token: null,
    user: null
}


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: {children: JSX.Element | JSX.Element[]}) => {

    const [state, dispatch] = useReducer(AuthReducer, initialAuth)

    const login = ()=>{
        dispatch({type: 'login'})
    }

    const logout = ()=>{
        dispatch({type: 'logout'})
    }


    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}