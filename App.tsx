import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { NativeBaseProvider,} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './components/Drawer/Drawer'
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <NativeBaseProvider>
            <MyDrawer />
         </NativeBaseProvider>
       </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
