import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View, Text } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "./src/screens/Splash";
import useImageLoader from './src/hooks/useImageLoader';
import AuthScreen from './src/screens/main/Auth';

export default function App() {

  const [imagesLoaded] = useImageLoader([
    require('./assets/splash-icon.png'),
    require('./assets/welcome-screen.jpg'),
    require('./assets/signin-screen.jpg'),
    require('./assets/signup-screen.jpg'),
  ]);

  return (
      <SplashScreen isLoaded={imagesLoaded!}>
        <SafeAreaProvider>
          <NativeBaseProvider>
              <StatusBar style="auto" />
              <AuthScreen />
            {/* <View style={styles.container}>
              <Text>Open up App.tsx to start working on your app!</Text>
            </View> */}
          </NativeBaseProvider>
        </SafeAreaProvider>
      </SplashScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
