import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from "./src/screens/Splash";
import useImageLoader from './src/hooks/useImageLoader';

export default function App() {

  const [imagesLoaded] = useImageLoader([
    require('./assets/splash-icon.png'),
  ]);

  return (
    <SplashScreen isLoaded={imagesLoaded!}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
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
