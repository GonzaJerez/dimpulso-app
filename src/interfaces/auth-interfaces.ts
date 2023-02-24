export interface AuthState {
    status:'authenticated' | 'checking' | 'not-authenticated';
    user: null;
    token: string | null;
}

export type AuthActions = 
| {type: 'login'}
| {type: 'logout'}