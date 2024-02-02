import React from 'react';
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, Pressable, DimensionValue, View } from 'react-native';

import { ButtonProps } from '../../types/components/Button';
import { GenericComponentVariant, GenericComponentColorThemeMap, GenericComponentColorThemeIndex, GenericComponentSizeIndex, COMPONENT_SIZE } from '../../types/components/generic';

const Button = (props: ButtonProps) => {

    const getButtonStyles = (pressed: boolean, isText: boolean = false)  => {
        const isFilled = props.variant === GenericComponentVariant.Filled;
        const buttonWidth = props.fullWidth ? '100%' : 'auto' as DimensionValue;
        const color = GenericComponentColorThemeMap[props.type];
        const pressedColor = pressed ? color[GenericComponentColorThemeIndex.Pressed] : color[GenericComponentColorThemeIndex.Active];

        if(isText) {
            return {
                color: isFilled ? color[GenericComponentColorThemeIndex.Color] : pressedColor,
                fontSize: COMPONENT_SIZE[props.size][GenericComponentSizeIndex.FontSize],
            }
        }

        return {
            backgroundColor: isFilled ? pressedColor : 'transparent',
            borderColor: isFilled ? 'transparent' : pressedColor,
            borderWidth: isFilled ? 0 : 2,
            borderRadius: 8,
            width: buttonWidth,
            paddingVertical: COMPONENT_SIZE[props.size][GenericComponentSizeIndex.Spacing],
            paddingHorizontal: 2 * COMPONENT_SIZE[props.size][GenericComponentSizeIndex.Spacing],
        }
    }

    return (
        <Pressable onPress={props.onPress} style={({ pressed }) => [styles.buttonContainer, getButtonStyles(pressed)]}>
            {({ pressed }) => (
                <>
                    {props.leftIcon && (
                        <View style={{paddingRight: COMPONENT_SIZE[props.size][GenericComponentSizeIndex.Spacing] - 4}}>
                            <Ionicons name={props.leftIcon} size={getButtonStyles(pressed, true)['fontSize']! + 8} color={getButtonStyles(pressed, true)['color']} />
                        </View>
                    )}
                    <Text style={[getButtonStyles(pressed, true)]}>{props.label}</Text>
                    {props.rightIcon && (
                        <View style={{paddingLeft: COMPONENT_SIZE[props.size][GenericComponentSizeIndex.Spacing] - 4}}>
                            <Ionicons name={props.rightIcon} size={getButtonStyles(pressed, true)['fontSize']! + 8} color={getButtonStyles(pressed, true)['color']} />
                        </View>
                    )}
                </>
            )}
        </Pressable>
    )
}

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})