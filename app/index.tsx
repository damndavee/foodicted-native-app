import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Heading } from "native-base";
import { router } from "expo-router";

import { COLORS, FONT_SIZES, SPACINGS } from '../src/utils/tokens';
import Button from '../src/components/buttons/Button';
import { useTemplateContext } from '../src/context/template';
import { Templates } from '../src/types/template';

const WelcomeScreen = () => {
    const templateContext = useTemplateContext();

    return (
        <ImageBackground source={require('../assets/welcome-screen.jpg')} resizeMode='cover' style={styles.rootContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.descriptionContainer}>
                    <View style={styles.headingContainer}>
                        <Heading size="2xl" color="white" >Fooddicted</Heading>
                    </View>
                    <View style={styles.description}>
                        <Text style={[styles.descriptionHeader, {color: COLORS.primaryLight}]}>Get Your cooking</Text>
                        <Text style={[styles.descriptionText, {color: COLORS.primaryLight}]}>easier than it used to!</Text>
                    </View>
                </View>
                <View style={{ gap: SPACINGS.big }}>
                    <Button 
                        fullWidth 
                        onPress={() => templateContext.navigateWithTemplate(Templates.Signin, '/auth')} 
                        size='Medium' 
                        type='SecondaryLight' 
                        variant='Filled' 
                        label='Sing In' 
                    />
                    <Button 
                        fullWidth 
                        onPress={() => templateContext.navigateWithTemplate(Templates.Signup, '/auth')} 
                        size='Medium' 
                        type='SecondaryLight' 
                        variant='Outline' 
                        label='Sign Up' 
                    />
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
        fontSize: FONT_SIZES.big
    },
    descriptionText: {
        fontSize: FONT_SIZES.big,
        fontWeight: 'bold',
    },
})