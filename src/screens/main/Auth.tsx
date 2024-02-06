import { FormControl, Heading, Input } from 'native-base';
import React from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View, Platform } from 'react-native';

// TESTING PURPOSES
const AUTH_FORM = 'signup';

const AuthScreen = () => {

    const imageProps = {
        style: styles.imgBackground,
        source: AUTH_FORM === 'signup' ? require('../../../assets/signup-screen.jpg') : require('../../../assets/signin-screen.jpg')
    }

    return (
        <ImageBackground {...imageProps}>
                <View style={styles.innerContainer}>
                    <Heading size='2xl' color='white' maxWidth='1/2'>Auth form</Heading>
                    <View style={styles.formContainer}>
                       
                    </View>
                </View>
        </ImageBackground>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    imgBackground: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
    },
    innerContainer: {
        height: '80%'
    },
    formContainer: {}
})