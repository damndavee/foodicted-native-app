import { StyleSheet, View } from 'react-native';
import { Templates } from '../../types/template'
import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';
import useAuth from '../../hooks/useAuth';

type FormFooterProps = {
    templateName: keyof typeof Templates;
}

const FormFooter = (props: FormFooterProps) => {
    if(props.templateName === 'Signup') {
        return null;
    }

    const { signInWithGoogle } = useAuth();

    return (
        <View style={styles.container}>
            <Button label='Forgot password?' onPress={() => {}} size='Medium' type='Primary' variant='Ghost' dense selfAlignment='center' />
            <View style={styles.innerContainer}>
                <IconButton name='logo-facebook' type='Tertiary' onPress={signInWithGoogle} size='Medium' />
                <IconButton name='logo-google' type='Tertiary' onPress={() => {}} size='Medium' />
                <IconButton name='logo-apple' type='Tertiary' onPress={() => {}} size='Medium' />
            </View>
        </View>
    );
};

export default FormFooter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    innerContainer: {
        flexDirection: 'row', 
        gap: 10
    }
})