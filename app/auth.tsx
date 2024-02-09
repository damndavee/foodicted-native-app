import React from 'react';
import { StyleSheet, View, ImageBackground, ImageResizeMode } from 'react-native';
import { Heading } from 'native-base';

import Button from '../src/components/buttons/Button';
import { useTemplateContext } from '../src/context/template';
import { Templates } from '../src/types/template';
import { COLORS, SPACINGS } from '../src/utils/tokens';
import FormInput from '../src/components/form/FormInput';
import { FormInputProps } from '../src/types/components/FormInput';

const AuthScreen = () => {
    const { template, setTemplate } = useTemplateContext();
    
    // TODO: Loading spinner
    if(!template) {
        return;
    }

    const imageProps = {
        style: [styles.imgBackground],
        source: require('../assets/auth-screen-alt.png'),
        resizeMode: 'cover' as ImageResizeMode
    }

    const switchAuthFormType = () => {
        setTemplate(template.name === Templates.Signin ? Templates.Signup : Templates.Signin);
    }

    const renderForm = () => {
        const { fields } = template;

        // TODO: for isValid prop, validation has to be added.

        return fields.map((field: FormInputProps) => {
            return (
                <FormInput 
                    errorMessage="This is Error placeholder message just to check potential length of the error message container" 
                    key={field.id} 
                    id={field.id} 
                    isValid 
                    onChange={() => {}} 
                    placeholder={field.placeholder} 
                    type={field.type} 
                    variant={field.variant} 
                    icon={field.icon} 
                />
            )
        })
    }
    
    return (
        <View style={[styles.rootContainer]}>
            <ImageBackground {...imageProps} >
                <View style={styles.innerContainer}>
                    <Heading pl={5} size='2xl' color={COLORS.primary} maxWidth='2/3'>{template.header}</Heading>
                    <View style={styles.formContainer}>
                        {renderForm()}
                    </View>
                    <View>
                        <Button 
                            fullWidth 
                            label={template.ctaText} 
                            onPress={() => {}} 
                            size='Medium' 
                            type='Secondary' 
                            variant='Filled' 
                        />
                        <Button 
                            label={template.link} 
                            onPress={switchAuthFormType} 
                            size='Medium' 
                            type='Tertiary' 
                            variant='Ghost' 
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
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
        height: '90%',
        padding: SPACINGS.large,
        justifyContent: 'space-between'
    },
    formContainer: {
        width: '100%',
        gap: SPACINGS.xlarge + 5,
    },
})