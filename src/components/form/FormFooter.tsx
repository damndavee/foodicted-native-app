import { StyleSheet, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { Templates } from '../../types/template'
import { COLORS } from '../../utils/tokens';
import Button from '../buttons/Button';

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
            {/* TODO: placeholders for IconButton component */}
            <Ionicons name='logo-facebook' size={30} color={COLORS.tertiary} />
            <Ionicons name='logo-google' size={30} color={COLORS.tertiary} />
            <Ionicons name='logo-apple' size={30} color={COLORS.tertiary} />
        </View>
    </View>
  )
}

export default FormFooter

const styles = StyleSheet.create({})