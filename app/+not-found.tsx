import { Stack, router } from 'expo-router';
import { Heading } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../src/components/buttons/Button';
import { NotFoundScreenIcon } from '../src/components/icons/Icon';

export default function NotFoundScreen() {

  return (
    <>
      <Stack.Screen/>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View>
            <Heading size="4xl" >404</Heading>
            <Heading size="2xl" >Page Not Found</Heading>
          </View>

          <NotFoundScreenIcon style={styles.icon} />
          <Text style={styles.title}>We're sorry, the page You requested could not be found. Please go back to the Homepage.</Text>
          <Button label='Go Home' onPress={() => router.replace('/')} size='Big' type='Primary' variant='Filled' fullWidth />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 30
  },
  innerContainer: {
    height: '95%',
    width: '100%',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  icon: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
});
