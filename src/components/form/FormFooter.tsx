import { StyleSheet, View } from 'react-native';
import { Templates } from '../../types/template'
import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';

type FormFooterProps = {
    templateName: keyof typeof Templates;
}

const FormFooter = (props: FormFooterProps) => {
    if(props.templateName === 'Signup') {
        return null;
    }

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Button label='Forgot password?' onPress={() => {}} size='Medium' type='Primary' variant='Ghost' dense selfAlignment='center' />
        <View style={{flexDirection: 'row', gap: 10}}>
            <IconButton name='logo-facebook' type='Tertiary' onPress={() => {}} size='Big' />
            <IconButton name='logo-google' type='Tertiary' onPress={() => {}} size='Big' />
            <IconButton name='logo-apple' type='Tertiary' onPress={() => {}} size='Big' />
        </View>
    </View>
  )
}

export default FormFooter

const styles = StyleSheet.create({})