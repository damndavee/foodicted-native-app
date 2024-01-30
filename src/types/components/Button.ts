import { Ionicons } from "@expo/vector-icons"

import { GenericComponentVariant, GenericComponentSize, GenericComponentType } from './generic';

type Icon = keyof typeof Ionicons.glyphMap;

export interface ButtonProps {
    label: string;
    type: keyof typeof GenericComponentType;
    size: keyof typeof GenericComponentSize;
    variant: keyof typeof GenericComponentVariant;
    onPress: () => void;
    fullWidth?: boolean;
    leftIcon?: Icon;
    rightIcon?: Icon;
    flex?: 0 | 1;
}