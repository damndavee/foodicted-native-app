import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Heading } from "native-base";

import { FONT_SIZES, SPACINGS } from '../../utils/tokens';
import Button from '../../components/buttons/Button';

const WelcomeScreen = () => {
  return (
    <ImageBackground source={require('../../../assets/welcome-screen.jpg')} resizeMode='cover' style={styles.rootContainer}>
        <View style={styles.innerContainer}>
            <View style={styles.descriptionContainer}>
                <View style={styles.headingContainer}>
                    <Heading size="2xl" color="white" >Fooddicted</Heading>
                </View>
                <View style={styles.description}>
                    <Text style={[styles.descriptionHeader, {color: '#0059D4'}]}>Get Your cooking</Text>
                    <Text style={[styles.descriptionText, {color: '#0059D4'}]}>easier than it used to!</Text>
                </View>
            </View>
            <View style={{ gap: SPACINGS.big }}>
                <Button fullWidth label='Log in' onPress={() => {}} size='Medium' type='SecondaryLight' variant='Filled' />
                <Button fullWidth label='Sign up' onPress={() => {}} size='Medium' type='SecondaryLight' variant='Outline' />
            </View>
        </View>
    </ImageBackground>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    innerContainer: {
        height: '80%',
        padding: SPACINGS.xlarge,
        justifyContent: 'space-between'
    },
    descriptionContainer: {
        width: "100%",
    },
    headingContainer: {
        elevation: 2,
    },
    description: {
        width: '70%',
    },
    descriptionHeader: {
        paddingTop: SPACINGS.xsmall,
        fontWeight: 'bold',
        fontSize: FONT_SIZES.large
    },
    descriptionText: {
        fontSize: FONT_SIZES.medium,
        fontWeight: 'bold',
    },
})