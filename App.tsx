// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from './src/context/auth/AuthContext';
import { ThemeProvider } from './src/context/theme/ThemeContext';
import { RootNavigation } from './src/navigation/RootNavigation';


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      
      <AppContexts>
        <RootNavigation />
      </AppContexts>

    </SafeAreaProvider>
  );
}

const AppContexts = ({children}:{children:JSX.Element | JSX.Element[]}) => (
  <AuthProvider>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </AuthProvider>
)