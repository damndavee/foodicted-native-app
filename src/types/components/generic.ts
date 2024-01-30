import { COLORS, DIMENSIONS, FONT_SIZES, SPACINGS } from "../../utils/tokens";

export enum GenericComponentType {
    Primary = 'Primary',
    Secondary = 'Secondary',
    SecondaryLight = 'SecondaryLight',
    Tertiary = 'Tertiary',
}

export enum GenericComponentSize {
    Small = 'Small', 
    Medium = 'Medium',
    Big = 'Big',
    Large = 'Large'
}

export enum GenericComponentVariant {
    Outline = 'Outline',
    Filled = 'Filled',
}

export enum GenericComponentColorThemeIndex { Active, Pressed, Color };
export enum GenericComponentSizeIndex { FontSize, Spacing, Dimension };
export type GenericComponentColorThemeValues = [string, string, string];
export type GenericComponentSizeValues = [number, number, number];

export const GenericComponentColorThemeMap: Record<GenericComponentType, GenericComponentColorThemeValues> = {
    [GenericComponentType.Primary]: [COLORS.primary, COLORS.primaryLight, COLORS.secondaryLight],
    [GenericComponentType.Secondary]: [COLORS.secondaryDark, COLORS.secondary, COLORS.secondaryLight],
    [GenericComponentType.SecondaryLight]: [COLORS.secondaryLight, COLORS.secondary, COLORS.primary],
    [GenericComponentType.Tertiary]: [COLORS.tertiary, COLORS.tertiaryLight, COLORS.secondaryLight] 
};

export const COMPONENT_SIZE: Record<GenericComponentSize, GenericComponentSizeValues> = {
    [GenericComponentSize.Small]: [FONT_SIZES.small, SPACINGS.medium, DIMENSIONS.small],
    [GenericComponentSize.Medium]: [FONT_SIZES.medium, SPACINGS.medium, DIMENSIONS.medium],
    [GenericComponentSize.Big]: [FONT_SIZES.big, SPACINGS.big, DIMENSIONS.big],
    [GenericComponentSize.Large]: [FONT_SIZES.large, SPACINGS.large, DIMENSIONS.large],
}

export const GenericComponentTypographyMap = {};