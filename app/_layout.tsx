// HOME PAGE
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Slot, Stack, usePathname } from 'expo-router';

import SplashScreen from '../src/screens/Splash';

import useImageLoader from '../src/hooks/useImageLoader';
import { TemplateContextProvider } from '../src/context/template';

export function RootNavigation() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="auth" />
      <Stack.Screen name="index" />
    </Stack>
  )
}

export default function RootLayout() {

  const path = usePathname();

  console.log("PATH NAME: ", path);

  const [imagesLoaded] = useImageLoader([
    require('../assets/splash-icon.png'),
    require('../assets/welcome-screen.jpg'),
    require('../assets/signin-screen.jpg'),
    require('../assets/signup-screen.jpg'),
  ]);

  return (
    <SplashScreen isLoaded={imagesLoaded!}>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <TemplateContextProvider>
            <RootNavigation />
          </TemplateContextProvider>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </SplashScreen>
  )
}
