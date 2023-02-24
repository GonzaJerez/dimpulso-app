import { AuthActions, AuthState } from "../../interfaces/auth-interfaces";


export const AuthReducer = (state: AuthState, actions: AuthActions): AuthState => {
    switch (actions.type) {
        case "login":
            return {
                ...state,
                status: 'authenticated'
            };

        case "logout":
            return {
                ...state,
                status: 'not-authenticated'
            };

        default:
            return state;
    }
}