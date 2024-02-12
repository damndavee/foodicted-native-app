import { View } from "react-native";
import { Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { IconButtonProps } from "../../types/components/IconButton";
import { COMPONENT_SIZE, GenericComponentColorThemeIndex, GenericComponentColorThemeMap, GenericComponentSizeIndex } from "../../types/components/generic";

const IconButton = (props: IconButtonProps) => {
    const getIconButtonColor = (isPressed: boolean, isHovered: boolean) => {
        const active = GenericComponentColorThemeMap[props.type][GenericComponentColorThemeIndex.Active];
        const pressed = GenericComponentColorThemeMap[props.type][GenericComponentColorThemeIndex.Pressed];
        const color = GenericComponentColorThemeMap[props.type][GenericComponentColorThemeIndex.Color];

        const activeColorIndicator = isPressed || isHovered ? pressed : active;

        if(!props.showBackground) return ['transparent', activeColorIndicator];

        return [activeColorIndicator, color];
    };

    const borderRadius = props.rounded ? 200 : 0;

    const iconProps = {
        name: props.name,
        size: COMPONENT_SIZE[props.size][GenericComponentSizeIndex.FontSize] * 2,
    }

    return (
        <Pressable maxW={96} onPress={props.onPress} >
            {({isHovered, isFocused, isPressed}) => {
                const [iconBgColor, iconTextColor] = getIconButtonColor(isPressed, isHovered);

                return (
                    <View style={{backgroundColor: iconBgColor, transform: [{scale: isPressed ? 0.96 : 1}], borderRadius, ...props.style}} >
                        <Ionicons {...iconProps} color={iconTextColor} />
                    </View>
                )
            }}
        </Pressable>
    )
};

export default IconButton;