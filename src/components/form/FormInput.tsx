import { StyleSheet, Text, View } from 'react-native';
import { FormControl, Input, WarningOutlineIcon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { FormInputProps } from "../../types/components/FormInput";
import { COLORS, FONT_SIZES, SPACINGS } from '../../utils/tokens';

const FormInput = (props: FormInputProps) => {

  const renderLeftInputElement = () => {
    return props.icon &&  (
        <Ionicons 
          name={props.icon} 
          size={FONT_SIZES.big} 
          color={props.variant === "Filled" ? "white" : COLORS.secondaryDark}
        />
    )
  }

  const INPUT_VARIANT_STYLES = {
    "Outline": {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.secondaryDark,
    },
    "Filled": {
        backgroundColor: COLORS.text,
        borderRadius: 5,
        borderWidth: 0,
    },
    "Underline": {
        backgroundColor: "transparent",
        borderRadius: 0,
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: COLORS.secondaryDark,
    }
  };

  const inputProps = {
    ...INPUT_VARIANT_STYLES[props.variant],
    fontSize: FONT_SIZES.medium,
    onChangeText: props.onChange.bind(this, props.id),
    placeholder: props.placeholder,
    placeholderTextColor: props.variant === "Filled" ? "lightText" : COLORS.secondaryDark,
    leftElement: renderLeftInputElement(),
    type: props.type,
    value: props.value
  }

  return (
    <FormControl isInvalid={!props.isValid}>
        <Input {...inputProps} borderBottomColor={'yellow.300'} />
        <FormControl.ErrorMessage 
          backgroundColor={COLORS.warning} 
          _text={{color: COLORS.danger, textAlign: 'justify', textBreakStrategy: 'balanced' }}
          padding={1}
          w={'full'}
          leftIcon={<WarningOutlineIcon style={{margin: 5}} />} 
        >
            <Text>{props.errorMessage}</Text>
        </FormControl.ErrorMessage>
    </FormControl>
  )
}

export default FormInput