import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View, Text } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "./src/screens/Splash";
import useImageLoader from './src/hooks/useImageLoader';

export default function App() {

  const [imagesLoaded] = useImageLoader([
    require('./assets/splash-icon.png'),
    require('./assets/welcome-screen.jpg'),
  ]);

  return (
      <SplashScreen isLoaded={imagesLoaded!}>
        <SafeAreaProvider>
          <NativeBaseProvider>
            <View style={styles.container}>
              <StatusBar style="auto" />
              <Text>Open up App.tsx to start working on your app!</Text>
            </View>
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
