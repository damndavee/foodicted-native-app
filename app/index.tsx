import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Heading } from "native-base";

import { COLORS, FONT_SIZES, SPACINGS } from '../src/utils/tokens';
import Button from '../src/components/buttons/Button';
import { useTemplateContext } from '../src/context/template';
import { Templates } from '../src/types/template';

const WelcomeScreen = () => {
    const templateContext = useTemplateContext();

    return (
        <ImageBackground source={require('../assets/welcome-screen-alt.png')} resizeMode='cover' style={styles.rootContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.descriptionContainer}>
                    <View style={styles.headingContainer}>
                        <Heading size="2xl" color={COLORS.primary} >Fooddicted</Heading>
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
                        type='Tertiary' 
                        variant='Filled' 
                        label='Sign In' 
                    />
                    <Button 
                        fullWidth 
                        onPress={() => templateContext.navigateWithTemplate(Templates.Signup, '/auth')}
                        size='Medium' 
                        type='Primary' 
                        variant='Outline' 
                        label='Get started' 
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
        height: '75%',
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
        marginTop: SPACINGS.small,
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

// const PlaygroundScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Button 
//         fullWidth 
//         onPress={() => {}} 
//         size='Medium' 
//         type='Tertiary' 
//         variant='Outline' 
//         label='Sign In' 
//       />
//       <Button 
//         fullWidth 
//         onPress={() => {}} 
//         size='Medium' 
//         type='Tertiary' 
//         variant='Filled' 
//         label='Sign In' 
//       />
//       <Button 
//         fullWidth 
//         onPress={() => {}} 
//         size='Medium' 
//         type='Tertiary' 
//         variant='Filled' 
//         label='Sign In' 
//       />
//     </View>
//   )
// }

// export default PlaygroundScreen;

// const styles = StyleSheet.create({
//     container: {
//         gap: 20,
//         padding: 20,
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#ffeedd',
//         flexDirection: 'column'
//     }
// })