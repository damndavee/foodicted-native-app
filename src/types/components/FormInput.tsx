import { Icon, ExcludeComponentVariant } from "./generic";


export interface FormInputProps {
    type: 'text' | 'password';
    isValid: boolean;
    id: string;
    errorMessage: string;
    placeholder: string;
    variant: ExcludeComponentVariant<'Ghost'>;
    onChange: () => void;
    label?: string;
    inputProps?: object;
    icon?: Icon;
}