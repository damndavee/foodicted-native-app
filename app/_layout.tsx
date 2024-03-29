import { Provider } from "react-redux";
import * as WebBrowser from "expo-web-browser";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Stack } from 'expo-router';
import { StatusBar, StatusBarStyle } from "expo-status-bar"

import SplashScreen from '../src/screens/Splash';

import useImageLoader from '../src/hooks/useImageLoader';
import { TemplateContextProvider } from '../src/context/template';
import { store } from "../src/store";

WebBrowser.maybeCompleteAuthSession();

export function RootNavigation() {
  const statusBar = {
    statusBarStyle: 'dark'  as StatusBarStyle,
    statusBarColor:  '#FAE6CD',
  }

  return (
    <Stack screenOptions={{headerShown: false, ...statusBar}}>
      <Stack.Screen name="auth" />
      <Stack.Screen name="index" />
    </Stack>
  )
}

export default function RootLayout() {
  const [imagesLoaded] = useImageLoader([
    require('../assets/splash-icon.png'),
    require('../assets/welcome-screen.jpg'),
    require('../assets/signin-screen.jpg'),
    require('../assets/signup-screen.jpg'),
    require('../assets/welcome-screen-alt.png'),
  ]);  

  return (
    <SplashScreen isLoaded={imagesLoaded!}>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <TemplateContextProvider>
            <Provider store={store}>
              <StatusBar animated={true} style="dark" />
              <RootNavigation />
            </Provider>
          </TemplateContextProvider>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </SplashScreen>
  )
}
