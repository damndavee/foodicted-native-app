import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Heading } from 'native-base';
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Button from '../src/components/buttons/Button';
import { useTemplateContext } from '../src/context/template';
import { Templates } from '../src/types/template';
import { SPACINGS } from '../src/utils/tokens';

const AuthScreen = () => {
    const { template, setTemplate } = useTemplateContext();

    const insets = useSafeAreaInsets();

    const BackgroundMap: Record<Partial<Templates>, any> = {
        [Templates.Signin]: require('../assets/signin-screen.jpg'),
        [Templates.Signup]: require('../assets/signup-screen.jpg'),
    }
    
    // TODO: Loading spinner
    if(!template) {
        return;
    }

    const imageProps = {
        style: [styles.imgBackground, { paddingTop: insets.top }],
        source: BackgroundMap[template.name]
    }

    const switchAuthFormType = () => {
        setTemplate(template.name === Templates.Signin ? Templates.Signup : Templates.Signin);
    }
    
    return (
        <ImageBackground {...imageProps} resizeMode='cover' >
            <View style={styles.innerContainer}>
                <Heading size='2xl' color='white' maxWidth='1/2'>{template.header}</Heading>
                <View style={styles.formContainer}>
                    {template.fields.map((field: string) => <Text>{field}</Text>)}
                    <Button fullWidth label={template.ctaText} onPress={() => {}} size='Medium' type='Primary' variant='Filled' />
                    <Button label={template.link} onPress={switchAuthFormType} size='Medium' type='Secondary' variant='Ghost' />
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
        height: '80%',
        padding: SPACINGS.large
    },
    formContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        gap: SPACINGS.xlarge,
    }
})